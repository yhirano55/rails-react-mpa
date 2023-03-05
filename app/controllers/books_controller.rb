class BooksController < ApplicationController
  before_action :set_book, only: %i[ show edit update destroy ]

  # GET /books
  def index
    @books = Book.all

    render_react_component(
      page_data: {
        books: @books,
      },
    )
  end

  # GET /books/1
  def show
    render_react_component(
      page_data: {
        book: @book,
      },
    )
  end

  # GET /books/new
  def new
    @book = Book.new

    render_react_component(
      page_data: {
        book: @book,
      },
    )
  end

  # GET /books/1/edit
  def edit
    render_react_component(
      page_data: {
        book: @book,
      },
    )
  end

  # POST /books
  def create
    @book = Book.new(book_params)

    if @book.save
      redirect_to @book, notice: "Book was successfully created."
    else
      render_react_component(
        page_name: :new,
        page_data: {
          book: {
            errors: {
              full_messages: @book.errors.full_messages,
            },
            **@book.attributes
          },
        },
      )
    end
  end

  # PATCH/PUT /books/1
  def update
    if @book.update(book_params)
      redirect_to @book, notice: "Book was successfully updated."
    else
      render_react_component(
        page_name: :edit,
        page_data: {
          book: {
            errors: {
              full_messages: @book.errors.full_messages,
            },
            **@book.attributes
          },
        },
      )
    end
  end

  # DELETE /books/1
  def destroy
    @book.destroy
    redirect_to books_url, notice: "Book was successfully destroyed."
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_book
      @book = Book.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def book_params
      params.require(:book).permit(:title, :price, :description)
    end
end
