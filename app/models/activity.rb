class Activity < ApplicationRecord

    belongs_to :group

    validates :name, presence: :true
    validates :date, presence: :true
    validates :time, presence: :true
    
    def date_parser
        Date.parse(self.date)
    end

    def time_parser
        time = self.time + '' + self.date
        Time.parse(time)
    end

end
