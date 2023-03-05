class Book < ApplicationRecord
  validates :title, :price, :description, presence: true
end
