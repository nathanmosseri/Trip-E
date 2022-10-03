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

    private 

    def find_group 
        Group.find(params[:id])
    end

    def render_not_found 
        render json: {error: 'Group not found'}, status: :not_found 
    end

end
