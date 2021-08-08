require 'test_helper'

class Api::V1::UsersControllerTest < ActionController::TestCase
  test 'should get show' do
    user = create(:user)
    get :show, params: { id: user.id, format: :json }
    assert_response :success
  end

  test 'should post create' do
    user_attributes = attributes_for(:user)

    post :create, params: { user: user_attributes, format: :json }

    assert_response :created

    data = JSON.parse(response.body)
    created_user = User.find(data['user']['id'])

    assert created_user.present?
  end
end
