module ReactComponentRenderable
  extend ActiveSupport::Concern

  private

  def render_react_component(page_data: {}, page_name: nil)
    flash_data = flash.map { |(type, message)| { type:, message: } }

    render html: '', layout: true, assigns: {
      client_data_attributes: {
        client_controller_path_value: controller_path,
        client_action_name_value: action_name,
        # Specify when you want to render a different React page than action_name.
        # e.g. "create" -> "new", "update" -> "edit"
        client_page_name_value: page_name,
        client_csrf_param_value: request_forgery_protection_token,
        client_csrf_token_value: form_authenticity_token,
        client_initial_page_data_value: {
          flash: flash.map { |(type, message)| { type:, message: } },
          **page_data
        }.to_json.html_safe,
      }
    }
  end
end
