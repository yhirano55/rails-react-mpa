class HomeController < ApplicationController
  def index
    render_react_component(
      page_data: {
        name: 'Home#index',
      },
    )
  end
end
