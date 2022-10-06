class Group < ApplicationRecord

    has_many :memberships 
    has_many :users, through: :memberships
    has_many :activities


    validates :name, presence: :true
    validates :location, presence: :true
    validates :start_date, presence: :true
    validates :end_date, presence: :true
    
    def date_range
        range = Date.parse(self.start_date)..Date.parse(self.end_date)
        range.to_a
    end

end
