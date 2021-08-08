require 'test_helper'

class SubscriptionTest < ActiveSupport::TestCase
  test 'create' do
    subscription = create(:subscription)
    assert subscription.persisted?
  end
end
