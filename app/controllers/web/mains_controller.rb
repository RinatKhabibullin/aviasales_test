class Web::MainsController < Web::ApplicationController
  def show
    render(react_component: 'App', props: {})
  end
end
