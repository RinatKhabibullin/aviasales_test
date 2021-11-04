class Api::V1::SubscriptionsController < Api::V1::ApplicationController
  def index
    @subscriptions = if params[:user_id]
                       Subscription.where(user_id: params[:user_id])
                     else
                       Subscription.all
                     end

    respond_with(@subscriptions, each_serializer: SubscriptionSerializer, root: 'items')
  end

  def create
    @subscription = Subscription.new(subscription_params)
    @subscription.save
    respond_with(@subscription, serializer: SubscriptionSerializer, location: nil)
  end

  def subscription_params
    params.require(:subscription).permit(:user_id, :affiliate_program_id)
  end
end
