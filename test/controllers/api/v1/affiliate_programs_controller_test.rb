require 'test_helper'

class Api::V1::AffiliateProgramsControllerTest < ActionController::TestCase
  test 'should get index' do
    get :index, params: { format: :json }
    assert_response :success

    get :index, params: { term: '2', format: :json }
    assert_response :success
  end
end
