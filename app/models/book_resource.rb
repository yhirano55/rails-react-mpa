class BookResource
  include Alba::Resource

  attributes :id, :title, :price, :description, :created_at, :updated_at

  attribute :errors do |resource|
    resource.errors.empty? ? {} : { full_messages: resource.errors.full_messages }
  end
end
