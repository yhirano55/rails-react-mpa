class HomeController < ApplicationController
  def index
    render_react_app(name: 'Home#index')
  end
end
