class ActivitiesController < ApplicationController

    def index 
        activities = Activity.all.order(:datetime)
        render json: activities
    end

    def create 
        activity = Activity.create!(activity_params)
        render json: activity, status: :created
    end

    private 

    def activity_params
        params.permit(:name, :description, :time, :date, :group_id)
    end


end
