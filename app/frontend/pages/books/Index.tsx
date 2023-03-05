import React, { FC } from 'react'
import { Book } from '../../type';
import { book_path, new_book_path } from '../../routes';

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
              <a href={book_path(book.id)}>Show this book</a>
            </p>
          </div>
        ))}
      </div>
      <a href={new_book_path()}>New book</a>
    </>
  );
}
