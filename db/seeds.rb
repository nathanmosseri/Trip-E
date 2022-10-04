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

Group.create(start_date: 'Sept 22 2022', end_date: 'Sept 29 2022', location: 'New York', name: 'Jews take New York', description: 'WE TAKINNN OVVVVAAAA')
Group.create(start_date: 'Oct 22 2022', end_date:  'Oct 29 2022', location: 'New Jersey', name: 'Joysey shawww adventure', description: 'Its a Joysey thing')
Group.create(start_date: 'Aug 22 2023', end_date: 'Aug 29 2023', location: 'Miami', name: 'Miami boys choir', description: 'Adom olam ahser malach')

35.times do 
    User.create(
        username: Faker::Internet.username,
        full_name: Faker::Name.name ,
        password:  "123"
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

Activity.create(
    name: 'vibing',
    description: 'just vibez',
    time: '2:30pm',
    date: '2022-09-23',
    group_id: 1,
    datetime: Time.parse('2022-09-23 2:30pm')
)
Activity.create(
    name: 'vibing',
    description: 'just vibez',
    time: '2:30pm',
    date: '2022-09-24',
    group_id: 1,
    datetime: Time.parse('2022-09-24 2:30pm')
)
Activity.create(
    name: 'vibing',
    description: 'just vibez',
    time: '2:30pm',
    date: '2022-09-26',
    group_id: 1,
    datetime: Time.parse('2022-09-26 2:30pm')
)
Activity.create(
    name: 'more vibing',
    description: 'vibez',
    time: '3pm',
    date: '2022-09-23',
    group_id: 1,
    datetime: Time.parse('2022-09-23 3pm')
)
Activity.create(
    name: 'thing',
    description: 'things',
    time: '2pm',
    date: '2022-09-23',
    group_id: 1,
    datetime: Time.parse('2022-09-23 2pm')
)

