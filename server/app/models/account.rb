class Account < ApplicationRecord
  belongs_to :plutus_account, class_name: 'Plutus::Account', foreign_key: 'plutus_account_id'
end
