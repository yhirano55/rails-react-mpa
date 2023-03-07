import React, { FC } from 'react'
import { Book, Flash } from '../../types';
import { book_path, new_book_path } from '../../routes';

interface Props {
  csrfParam: string;
  csrfToken: string;
  initialData: {
    flash: Flash[];
    books: Book[]
  };
}

export const BooksIndexPage: FC<Props> = ({ initialData: { flash, books } }) => {
  return (
    <>
      {flash.map(({ message }, index) => <p key={index} style={{ color: 'green' }}>{message}</p>)}
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
