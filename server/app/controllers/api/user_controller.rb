# Базовый контроллер для пользователя
module Api
  class UserController < ApplicationController
    before_action :authorize_request

    # Расшифровка токена авторизации
    def authorize_request
      header = request.headers['Authorization']
      header = header.split(' ').last if header

      render json: { error: 'session', message: 'token_expired' } unless actual_session?(header)
    end

    private

    def actual_session?(token)
      session = Session.find_by_token(token)
      DateTime.current > session.expired
    end
  end
end