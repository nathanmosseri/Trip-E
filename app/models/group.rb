class Group < ApplicationRecord

    has_many :memberships 
    has_many :users, through: :memberships
    has_many :activities

    def date_range
        range = Date.parse(self.start_date)..Date.parse(self.end_date)
        range.to_a
    end

end
