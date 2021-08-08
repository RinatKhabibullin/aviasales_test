require 'test_helper'

class Api::V1::SubscriptionsControllerTest < ActionController::TestCase
  test 'should post index' do
    user = create(:user)
    affiliate_program = create(:affiliate_program)
    subscription_attributes = { user_id: user.id, affiliate_program_id: affiliate_program.id }

    post :create, params: { subscription: subscription_attributes, format: :json }

    assert_response :created

    get :index, params: { format: :json }
    assert_response :success

    get :index, params: { user_id: user.id, format: :json }
    assert_response :success
  end
  test 'should post create' do
    user = create(:user)
    affiliate_program = create(:affiliate_program)
    subscription_attributes = { user_id: user.id, affiliate_program_id: affiliate_program.id }

    post :create, params: { subscription: subscription_attributes, format: :json }

    assert_response :created

    data = JSON.parse(response.body)
    created_subscription = Subscription.find(data['subscription']['id'])

    assert created_subscription.present?
  end
end
