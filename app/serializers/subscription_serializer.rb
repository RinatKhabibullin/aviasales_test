class SubscriptionSerializer < ApplicationSerializer
  attributes :id
  belongs_to :affiliate_program
  belongs_to :user
end
