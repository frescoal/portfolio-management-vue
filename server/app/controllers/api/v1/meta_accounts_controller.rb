class Api::V1::MetaAccountsController < Api::V1::ApplicationController

  def index
    render json: MetaAccount.where(parent_id: nil), include: [:meta_accounts, :accounts]
  end
end
