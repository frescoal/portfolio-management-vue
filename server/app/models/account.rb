class Account < ApplicationRecord
  enum category: [:asset, :liability, :equity,:revenue,:expense]
  enum currency: [:chf, :usd, :eur, :cad]
  belongs_to :plutus_account, class_name: 'Plutus::Account', foreign_key: 'plutus_account_id', optional: true
  belongs_to :meta_account

  after_create :create_plutus_account

  def balance
    puts self.name
    puts self.id
    plutus_account.balance
  end

  def create_plutus_account
    case category
    when 'asset'
      self.plutus_account = Plutus::Asset.create(name: name)
      self.save
    when 'liability'
      self.plutus_account = Plutus::Liability.create(name: name)
      self.save
    when 'equity'
      self.plutus_account = Plutus::Equity.create(name: name)
      self.save
    when 'revenue'
      self.plutus_account = Plutus::Revenue.create(name: name)
      self.save
    when 'expense'
      self.plutus_account = Plutus::Expense.create(name: name)
      self.save
    end
  end
end
