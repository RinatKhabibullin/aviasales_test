require 'test_helper'

class AffiliateProgramTest < ActiveSupport::TestCase
  test 'create' do
    affiliate_program = create(:affiliate_program)
    assert affiliate_program.persisted?
  end
end
