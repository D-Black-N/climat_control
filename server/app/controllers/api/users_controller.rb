# Базовый контроллер для пользователя
module Api
  class UsersController < ApplicationController
    # Добавление модулей работы с Cookie
    include ActionController::Cookies
    include ActionController::RequestForgeryProtection
    
    protect_from_forgery with: :exception

    # Вызов колбека формирования токена CSRF
    before_action :set_csrf_cookie, :check_authenticity
    # Для инициализации пропущена проверка авторизации
    skip_before_action :check_authenticity, only: :initialize_client

    # Когда пользователь заходит на страницу необходимо получить токен, поэтому этот метод оставлен
    def initialize_client; end

    private

    # Метод, отправляющий токен для POST, PUT, DELETE запросов
    def set_csrf_cookie
      cookies['CSRF-TOKEN'] = form_authenticity_token
    end

    # Проверка авторизации пользователя
    def check_authenticity
      token = cookies['_token']
      render json: { error: 'unauthorized' }, status: :unauthorized unless Session.find_by_token(token)
      
    end
  end
end