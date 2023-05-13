module Api
  module User
    class GreenHousesController < Api::UsersController
      # GET /api/user/greenhouses
      def index
        render json: { greenhouses: GreenHouse.all }, status: :ok
      end

      # POST /api/user/greenhouses
      def create
        response = Users::CreateGreenHouse.new(greenhouse_params(params)).call
        render json: response.except(:status), status: response[:status]
      end

      # PUT/PATCH /api/user/greenhouse/:id
      def update

      end

      # DELETE /api/user/greenhouse/:id
      def destroy

      end

      private

      def greenhouse_params(params)
        params.require(:greenhouse).permit(:name, :ip_address, :location)
      end
    end
  end
end