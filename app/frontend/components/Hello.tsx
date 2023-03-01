import React, { FC } from 'react'

interface Props {
  name: string;
}

export const Hello: FC<Props> = ({ name }) => <div>Hello {name}!</div>;
