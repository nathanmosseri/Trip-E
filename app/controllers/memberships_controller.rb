class MembershipsController < ApplicationController
    def index
        render json: Membership.all, status: :ok
    end

    def create
        member = Membership.create!(member_params)
        render json: member, status: :created
    end

    private

    def member_params
        params.permit(:group_id, :user_id)
    end
end
