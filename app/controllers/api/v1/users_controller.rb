class Api::V1::UsersController < Api::V1::ApplicationController
  def show
    @user = User.find(params[:id])
    respond_with(@user, serializer: UserSerializer)
  end

  def create
    @user = User.new(user_params)
    @user.save
    respond_with(@user, serializer: UserSerializer, location: nil)
  end

  def user_params
    params.require(:user).permit(:name, :email)
  end
end
