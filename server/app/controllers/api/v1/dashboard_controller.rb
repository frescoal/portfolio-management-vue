class Api::V1::DashboardController < Api::V1::ApplicationController

  def key_numbers
    key_numbers = {
      assets: Plutus::Asset.balance,
      monthly_assets: Plutus::Asset.balance(from_date: Date.today.beginning_of_month, :to_date => Date.today),
    }
    render json: key_numbers
  end
end
