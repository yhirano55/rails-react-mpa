import React, { FC } from 'react'

interface Book {
  id: number;
  title: string;
  price: number;
  description: string;
  created_at: Date;
  updated_at: Date;
}

interface Props {
  csrfParam: string;
  csrfToken: string;
  initialPageData: {
    books: Book[]
  };
}

export const BooksIndexPage: FC<Props> = ({ initialPageData: { books } }) => {
  return (
    <>
      <h1>Books</h1>
      <div id="books">
        {books.map(book => (
          <div key={book.id}>
            <div>
              <p>
                <strong>Title:</strong>
                {book.title}
              </p>
              <p>
                <strong>Price:</strong>
                {book.price}
              </p>
              <p>
                <strong>Description:</strong>
                {book.description}
              </p>
            </div>
            <p>
              <a href={`/books/${book.id}`}>Show this book</a>
            </p>
          </div>
        ))}
      </div>
      <a href="books/new">New book</a>
    </>
  );
}
