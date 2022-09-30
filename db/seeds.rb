# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
User.destroy_all
Group.destroy_all 
Membership.destroy_all

Group.create(start_date: '09-22-22', end_date: '09-29-22', location: 'New York', name: 'Jews take New York', description: 'WE TAKINNN OVVVVAAAA')
Group.create(start_date: '10-22-22', end_date: '10-29-22', location: 'New Jersey', name: 'Joysey shawww adventure', description: 'Its a Joysey thing')
Group.create(start_date: '08-22-22', end_date: '08-29-22', location: 'Miami', name: 'Miami boys choir', description: 'Adom olam ahser malach')

35.times do 
    User.create(
        username: Faker::Internet.username,
        full_name: Faker::Name.name ,
        password_digest:  Faker::Internet.password   
    )
end

50.times do 
    Membership.create(
        group_id: Group.all.sample.id,
        user_id: User.all.sample.id
    )
end

# 60.times do 
#     Activity.create(
#         name: Faker::Hobby.activity,
#         description: Faker::Lorem.sentence,
#         time: ,
#         date: Faker::Date.between(from: '2022-08-22', to: '2014-09-25'),
#         group_id: Group.all.sample.id 
#     )
# end

