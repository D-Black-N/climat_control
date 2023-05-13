# frozen_string_literal: true

class GreenHouse < ApplicationRecord
  IP_REGEXP = /192\.168\.0\.(25[0-5]|2[0-4]\d|1\d{2}|\d{1,2})$/
  enum state: { ready: 1, stopped: 2, error: 3 }, _default: :ready

  validates :name, presence: true, uniqueness: true, length: { in: 4..99 }
  validates :location, presence: true, uniqueness: true, length: { in: 4..99 }, if: -> { location.present? }
  validates :ip_address, format: { with: IP_REGEXP, message: 'invalid IP address' }
end
