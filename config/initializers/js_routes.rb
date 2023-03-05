# Patch to support frontend dir.
JsRoutes::Configuration.prepend(Module.new do
  def output_file = Rails.root.join('app', 'frontend', default_file_name)
end)
