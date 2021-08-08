class User < ApplicationRecord
  has_many :subscriptions
  has_many :affiliate_programs, through: :subscriptions

  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i.freeze

  validates :email, presence: true, uniqueness: true, format: { with: VALID_EMAIL_REGEX }
  validates :name, presence: true
end
