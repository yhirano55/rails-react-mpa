import React, { FC } from 'react'
import { HomeIndexPage } from './home/Index';
import { BooksIndexPage } from './books/Index';

interface Props {
  actionName: string;
  controllerPath: string;
  csrfParam: string;
  csrfToken: string;
  initialPageData: Object;
  pageName: string | null;
}

const createPageId = (controllerPath: string, actionName: string): string => {
  return `${controllerPath}-${actionName}`;
};

const pages = {
  [createPageId("home", "index")]: HomeIndexPage,
  [createPageId("books", "index")]: BooksIndexPage,
} as const;

const findPage = (
  controllerPath: string,
  actionName: string,
  pageName: string | null
) => {
  const pageId = createPageId(controllerPath, pageName.length ? pageName : actionName);
  // TODO: TypeScript determines that `pages[pageId]` always returns a value.
  if (pages.hasOwnProperty(pageId) === false) {
    throw new Error(
      `A page for "${controllerPath}#${actionName}" is not defined.`
    );
  }
  return pages[pageId];
};

export const CurrentPage: FC<Props> = ({
  controllerPath,
  actionName,
  pageName,
  csrfParam,
  csrfToken,
  initialPageData,
}) => {
  const page = findPage(controllerPath, actionName, pageName);
  return React.createElement(page, { csrfParam, csrfToken, initialPageData });
};
