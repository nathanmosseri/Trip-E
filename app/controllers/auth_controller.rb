class AuthController < ApplicationController
    def create
        user = User.find_by(username: params[:username])
        if user&.authenticate(params[:password])
            token = encode_token({user_id: user.id})
            cookies.signed[:jwt] = {
                value: token,
                httponly: true
            }
            render json: {user_id: user.id}
        else
            render json: {message: "log in!"}
        end
    end
end
