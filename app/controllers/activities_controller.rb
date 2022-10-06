class ActivitiesController < ApplicationController

    rescue_from ActiveRecord::RecordInvalid, with: :activities_error_handling

    def index 
        activities = Activity.all.order(:datetime)
        render json: activities
    end

    def create 
        activity = Activity.create!(activity_params)
        render json: activity, status: :created
    end

    def update
        activity = find_activity
        activity.update(activity_params)
        render json: activity
    end

    def destroy
        activity = find_activity
        activity.destroy
        head :no_content
    end

    private 

    def activity_params
        params.permit(:name, :description, :time, :date, :group_id, :datetime)
    end

    def find_activity
        Activity.find(params[:id])
    end

    def activities_error_handling(exception)
        render json: {errors: exception.record.errors.full_messages}, status: :unprocessable_entity
    end

end
