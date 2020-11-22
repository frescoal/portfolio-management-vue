puts 'Drop Users'
User.destroy_all

puts 'Create users'

alain = User.create!(email:'alain.fresco@gmail.com', password:'123456', first_name:'Alain', last_name: 'Fresco');
toni = User.create!(email:'toni.dias.91@gmail.com', password:'123456', first_name:'Toni', last_name: 'Dias');


cash = Plutus::Asset.create!(name: 'Cash')
Account.create!(name:'cash', number: 1000, plutus_account: cash)
