require 'test_helper'

class Web::MainsControllerTest < ActionController::TestCase
  test 'should get show' do
    get web_mains_show_url
    assert_response :success
  end
end
