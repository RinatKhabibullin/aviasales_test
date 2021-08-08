class AffiliateProgram < ApplicationRecord
  has_many :subscriptions
  has_many :users, through: :subscriptions

  validates :title, presence: true
  validates :description, presence: true
end
