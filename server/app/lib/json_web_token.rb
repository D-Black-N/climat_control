# Токен сессии
class JsonWebToken
  # Секретный ключ для создания токена авторизации
  SECRET_KEY = Rails.application.secrets.secret_key_base.to_s
  
  # Для создания токена
  def self.encode(payload) 
    exp = ENV.fetch("SESSION_EXPIRED") { 30 }.to_i.minutes.from_now # длительность сессии 30 минут по умолчанию
    payload[:exp] = exp.to_i
    JWT.encode(payload, SECRET_KEY)
  end

  # Для декодирования и проверки токена
  def self.decode(token)
    decoded = JWT.decode(token, SECRET_KEY)[0]
    HashWithIndifferentAccess.new decoded
  end
end