class User < ApplicationRecord
    has_secure_password
    has_many :memberships 
    has_many :groups, through: :memberships

    validates :username, presence: :true
    validates :username, uniqueness: :true
    validates :username, confirmation: { case_sensitive: false }
    validates :password, presence: :true
    validates :password, confirmation: { case_sensitive: true }
    validates :password, length: { in: 4..10 } 

end
