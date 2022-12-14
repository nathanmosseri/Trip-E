class ApplicationController < ActionController::API
    
    include ActionController::Cookies
    SECRET_KEY = Rails.application.secrets.secret_key_base.to_s
    
    rescue_from JWT::DecodeError, with: :render_invalid_token
    def encode_token(payload)
        JWT.encode(payload, SECRET_KEY)
    end
    
    def decode_token(token)
        JWT.decode(token, SECRET_KEY)[0]["user_id"]
    end
    
    private
    def render_invalid_token(e)
        render json: {errors: ["Please log in"]}, status: :unauthorized
    end
end
