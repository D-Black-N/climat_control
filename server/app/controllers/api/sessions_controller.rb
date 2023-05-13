# Контроллер сессий для авторизации
module Api
  class SessionsController < Api::UsersController
    skip_before_action :check_authenticity, only: %i[create destroy]

    # POST /login - создание сессии
    def create
      permitted_params = session_params(params)
      user = User.find_by_login(permitted_params[:login])
      return render json: { error: 'unauthorized' }, status: :unauthorized unless user&.authenticate(permitted_params[:password])

      token = JsonWebToken.encode(user_id: user.id)                 # Генерация токена
      expired_time = ENV['SESSION_EXPIRED'].to_i.minutes.from_now   # Установка времени окончания сессии
      user.sessions.create(token: token, expired: expired_time)     # Создание сессии для пользователя
      cookies['_token'] = { value: token, expires: expired_time }   # Запись токена сессии в куки
      render status: :created
    end

    # DELETE /login - удаление сессии
    def destroy
      token = cookies['_token']
      current_session = Session.find_by_token(token)
      return render head: :no_content if current_session&.update(expired: DateTime.now)

      render json: { error: 'session destroy failed' }, status: :bad_request
    end

    private

    def session_params(params)
      params.require(:session).permit(:login, :password)
    end
  end
end