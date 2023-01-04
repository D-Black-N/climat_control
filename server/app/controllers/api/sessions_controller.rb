# Контроллер сессий для авторизации
module Api
  class SessionsController < ApplicationController
    # Создание сессии и передача токена
    def create
      user = User.find_by_login(session_params(params)[:login])
      if user&.authenticate(session_params(params)[:password])
        token = JsonWebToken.encode(user_id: user.id)
        time = DateTime.current + 30.minutes.to_i
        user.sessions.create(token: token, expired: time)
        render json: { token: token, expired: time.strftime("%m-%d-%Y %H:%M") }, status: 200
      else
        render json: { error: 'authorization', message: 'not_authorized' }, status: 401
      end
    end

    # Удаление сессии, выход из программы
    def destroy
      header = request.headers['Authorization']
      header = header.split(' ').last if header

      session = Session.find_by_token(header)
      if session
        session.update(expired: DateTime.current) # Завершаем сессию обновлением истечения токена на текущее время
        render json: { message: 'logout_success' }, status: 204
      else
        render json: { error: 'authorization', message: 'not_authorized' }, status: 401
      end
    end

    private

    # Strong params для сессии
    def session_params(params)
      params.require(:session).permit(:login, :password)
    end
  end
end