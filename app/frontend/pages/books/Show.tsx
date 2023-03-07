import React, { FC } from 'react'
import { Book, Flash } from '../../types';
import { books_path, edit_book_path, book_path } from '../../routes';
import { LinkTo } from '../../components/LinkTo';

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
        <LinkTo url={edit_book_path(book.id)} text="Edit this book" /> | <LinkTo url={books_path()} text="Back to books" />

        <form action={book_path(book.id)} method="post">
          <input type="hidden" name="_method" value="delete" />
          <input type="hidden" name={csrfParam} value={csrfToken} />
          <input type="submit" value="Destroy this book" />
        </form>
      </div>
    </>
  );
}
