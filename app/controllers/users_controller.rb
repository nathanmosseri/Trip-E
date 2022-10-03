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
        render json: {user:user, token:token}
    end
    def login
        user = User.find_by!(username:params[:username]).try(:authenticate, params[:password])
        if user 
            token = encode_token({user_id: user.id})
            render json: {user:user, token:token, groups: user.groups}
        else
            render json: {error:"wrong password"}, status: 401
        end
    end
    
    def profile
        token = request.headers["token"]
        user_id = decode_token(token)
        user = User.find(user_id)
        render json: user,  serializer: UserShowMethodSerializer
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
