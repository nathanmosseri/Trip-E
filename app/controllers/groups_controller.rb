class GroupsController < ApplicationController
    # before_action :authorized, only: [:index]
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found

    def index 
        groups = Group.all 
        render json: groups 
    end

    def show 
        group = find_group
        render json: group, serializer: GroupsShowMethodSerializer
    end

    def create
        # get token
        token = request.headers["token"]
        # decode token
        user_id = decode_token(token)
        # find user from decoded token(user_id)
        user = User.find(user_id)
        group = Group.create(group_params)
        member = Membership.create(user_id:user.id, group_id:group.id)
        # create membership with user_id and group.id
        render json: {member:member,group:group}, status: :created
    end
    

    private 

    def find_group 
        Group.find(params[:id])
    end

    def render_not_found 
        render json: {error: 'Group not found'}, status: :not_found 
    end

    def group_params
        params.permit(:name, :location, :description, :end_date, :start_date)
    end
end
