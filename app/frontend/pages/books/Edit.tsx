import React, { FC, useState } from 'react'
import { Book } from '../../type';
import { book_path, books_path } from '../../routes';

interface Props {
  csrfParam: string;
  csrfToken: string;
  initialPageData: {
    book: Book;
  };
}

export const BooksEditPage: FC<Props> = ({ csrfParam, csrfToken, initialPageData: { book } }) => {
  const [form, setForm] = useState({ title: book.title, price: book.price, description: book.description });

  const handleChange = (input) => e => {
    setForm({ ...form, [input] : e.target.value });
  };

  return (
    <>
      <h1>Editing book</h1>

      <form action={book_path(book.id)} method="post">
        <input type="hidden" name="_method" value="put" />
        <input type="hidden" name={csrfParam} value={csrfToken} />

        { book.errors && (
          <div style={{ color: 'red' }}>
            <ul>
              {book.errors.full_messages.map((message, index) => <li key={index}>{message}</li>)}
            </ul>
          </div>
        )}

        <div>
          <label style={{ display: 'block' }}>Title</label>
          <input type="text" name="book[title]" value={form.title} onChange={handleChange('title')} />
        </div>

        <div>
          <label style={{ display: 'block' }}>Price</label>
          <input type="number" name="book[price]" value={form.price} onChange={handleChange('price')} />
        </div>

        <div>
          <label style={{ display: 'block' }}>Description</label>
          <textarea name="book[description]" value={form.description} onChange={handleChange('description')}></textarea>
        </div>

        <div>
          <input type="submit" value="Update book" />
        </div>
      </form>

      <br />

      <div>
        <a href={book_path(book.id)}>Show this book</a> | <a href={books_path()}>Back to books</a>
      </div>
    </>
  );
}
