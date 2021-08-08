class Subscription < ApplicationRecord
  belongs_to :user
  belongs_to :affiliate_program
end
