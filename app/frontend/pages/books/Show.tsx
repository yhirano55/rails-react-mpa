import React, { FC } from 'react'
import { Book, Flash } from '../../types';
import { books_path, edit_book_path, book_path } from '../../routes';

interface Props {
  csrfParam: string;
  csrfToken: string;
  initialData: {
    flash: Flash[];
    book: Book;
  };
}

export const BooksShowPage: FC<Props> = ({ csrfParam, csrfToken, initialData: { flash, book } }) => {
  return (
    <>
      {flash.map(({ message }, index) => <p key={index} style={{ color: 'green' }}>{message}</p>)}
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
      <div>
        <a href={edit_book_path(book.id)}>Edit this book</a> | <a href={books_path()}>Back to books</a>

        <form action={book_path(book.id)} method="post">
          <input type="hidden" name="_method" value="delete" />
          <input type="hidden" name={csrfParam} value={csrfToken} />
          <input type="submit" value="Destroy this book" />
        </form>
      </div>
    </>
  );
}
