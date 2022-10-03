class ApplicationController < ActionController::API
    
    include ActionController::Cookies
    SECRET_KEY = Rails.application.secrets.secret_key_base.to_s
    
    rescue_from JWT::DecodeError, with: :render_invalid_token
    def encode_token(payload)
        JWT.encode(payload, SECRET_KEY)
    end

    # authorizing user
    def authorized
        jwt = cookies.signed[:jwt]
        decoded_token = JWT.decode(jwt, SECRET_KEY)
        user_id = decoded_token[0]['user_id']
        @user = User.find(user_id)
    end
    private
    def render_invalid_token(e)
        render json: {errors: ["Please log in"]}, status: :unauthorized
    end
end
