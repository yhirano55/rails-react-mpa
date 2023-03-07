import React, { FC } from 'react'

interface Props {
  csrfParam: string;
  csrfToken: string;
  initialData: {
    name: string,
  };
}

export const HomeIndexPage: FC<Props> = ({ initialData: { name } }) => {
  return <div>Hello {name}!</div>;
}
