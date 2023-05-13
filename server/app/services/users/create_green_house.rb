module Users
  class CreateGreenHouse
    attr_reader :greenhouse

    def initialize(params)
      @greenhouse = GreenHouse.new(params)
    end

    def call
      return { greenhouse: greenhouse, status: :created } if greenhouse.save
      
      { errors: greenhouse.errors, status: :bad_request }
    end
  end
end