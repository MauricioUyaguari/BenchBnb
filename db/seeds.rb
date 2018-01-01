# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
user1 = User.new(username: "mauricio", password: "password")
user2 = User.new(username: "luis", password: "password")
user3 = User.new(username: "uyaguari", password: "password")
user4 = User.new(username: "bob", password: "password")
user5 = User.new(username: "atom", password: "password")

user1.save!
user2.save!
user3.save!
user4.save!
user5.save!
