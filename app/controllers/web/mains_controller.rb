class Web::MainsController < Web::ApplicationController
  def show
    @users = User.all
  end
end
