require 'test_helper'

class Web::MainsControllerTest < ActionController::TestCase
  test 'should get new' do
    get :show
    assert_response :success
  end
end
