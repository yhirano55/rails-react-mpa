import React, { FC } from 'react'
import { books_path } from '../../routes';
import { LinkTo } from '../../components/LinkTo';

interface Props {
  csrfParam: string;
  csrfToken: string;
  initialData: {
    name: string,
  };
}

export const HomeIndexPage: FC<Props> = ({ initialData: { name } }) => {
  return (
    <div>
      <h1>Hello {name}!</h1>
      <LinkTo url={books_path()} text="Go Crud Sample" />
    </div>
  );
}
