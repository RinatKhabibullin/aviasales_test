FactoryBot.define do
  factory :subscription do
    user factory: :user
    affiliate_program factory: :affiliate_program
  end
end
