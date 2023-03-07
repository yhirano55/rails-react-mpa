module ReactAppRenderable
  extend ActiveSupport::Concern

  private

  def render_react_app(action: nil, **props)
    flash_data = flash.map { |(type, message)| { type:, message: } }

    render 'react_app', assigns: {
      data_attributes: {
        controller_path:,
        action_name: action || action_name,
        csrf_param: request_forgery_protection_token,
        csrf_token: form_authenticity_token,
        react_app_initial_data_value: {
          flash: flash.map { |(type, message)| { type:, message: } },
          **props,
        }.to_json.html_safe,
      }
    }
  end
end
