class UsersController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found


    def index 
        users = User.all 
        render json: users 
    end

    def show 
        user = find_user
        render json: user, serializer: UserShowMethodSerializer
    end
    # register user
    def create
        user = User.create!(user_params)
        token = encode_token({user_id: user.id})
        cookies.signed[:jwt] = {
            value: token,
            httponly: true, 
        }
        render json: user
    end

    private 

    def find_user
        User.find(params[:id])
    end
    def render_not_found 
        render json: {error: 'User not found'}, status: :not_found
    end
    def user_params
        params.permit(:username, :full_name, :password)
    end

end
