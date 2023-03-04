# Контроллер сессий для авторизации
module Api
  class SessionsController < UsersController
    skip_before_action :check_authenticity, only: %i[create destroy]

    # POST /login - создание сессии
    def create
      user = User.find_by_login(params[:login])
      return render json: { error: 'unauthorized' }, status: :unauthorized unless user&.authenticate(params[:password])

      token = JsonWebToken.encode(user_id: user.id)                 # Генерация токена
      expired_time = ENV['SESSION_EXPIRED'].to_i.minutes.from_now   # Установка времени окончания сессии
      user.sessions.create(token: token, expired: expired_time)     # Создание сессии для пользователя
      cookies['_token'] = { value: token, expires: expired_time, same_site: 'None', }   # Запись токена сессии в куки
      render status: :created
    end

    # DELETE /login - удаление сессии
    def destroy
      token = cookies['_token']
      current_session = Session.find_by_token(token)
      return render head: :no_content if current_session&.update(expired: DateTime.now)

      render json: { error: 'session destroy failed' }, status: :bad_request
    end
  end
end