class Activity < ApplicationRecord

    belongs_to :group

    def date_parser
        Date.parse(self.date)
    end

    def time_parser
        time = self.time + '' + self.date
        Time.parse(time)
    end

end
