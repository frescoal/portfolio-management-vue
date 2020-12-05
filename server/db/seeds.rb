puts 'Drop Users'
User.destroy_all

puts 'Create users'

alain = User.create!(email:'alain.fresco@gmail.com', password:'123456', first_name:'Alain', last_name: 'Fresco');
toni = User.create!(email:'toni.dias.91@gmail.com', password:'123456', first_name:'Toni', last_name: 'Dias');


puts 'Creating Ledger'
actif = MetaAccount.create!(name: 'Actif')
bank = MetaAccount.create!(name: 'Comptes bancaires', parent: actif)

ubs = MetaAccount.create!(name: 'UBS', parent: bank)
Account.create!(name:'UBS Compte personel', description: 'CH44 0025 5255 7761 3840 M', category: :asset, meta_account: ubs)
Account.create!(name:'UBS Compte épargne', description: 'CH28 0025 5255 7761 38M1 D', category: :asset, meta_account: ubs)

revolut = MetaAccount.create!(name: 'Revolut', parent: bank)

swissqote = MetaAccount.create!(name: 'Swissquote', parent: bank)
vaudoise = MetaAccount.create!(name: 'Vaudoise', parent: bank)

p2p = MetaAccount.create!(name: 'P2P lending', parent: actif)

crowdfunding = MetaAccount.create!(name: 'Crowdfunding', parent: actif)

physique = MetaAccount.create!(name: 'Produits physique', parent: actif)


loss = MetaAccount.create!(name: 'Pertes')
revenue = MetaAccount.create!(name: 'Profits')
Account.create!(name:'Salaire Wavemind', category: :revenue, meta_account: revenue )

