import React from 'react';
import Head from 'next/head';

export default function HtmlHead(props) {
  const { title, description, keywords } = props;

  const tabTitleCapitalize = (str) => {
    return str
      .charAt(0)
      .toUpperCase()
      + str.slice(1);
  };

  return (
    <Head>
      <meta charset="UTF-8" />
      <meta
        httpEquiv="Content-Type"
        content="
            text/html;
            charset=UTF-8
          "
      />
      <meta
        name="description"
        content={
          description
            ? description
            : ''
        }
      />
      <meta
        name="keywords"
        content={
          Array.isArray(keywords)
          ? keywords.join(', ')
          : ''
        }
      />
      <meta
        name="viewport"
        content="
            width=device-width,
            initial-scale=1.0,
            maximum-scale=1.0,
            user-scalable=0
          "
      />
      <title>
        {title.length 
          ? `${tabTitleCapitalize(title)} | `
          : ''
        }
        Next Resume
        </title>
      <link
        rel="shortcut icon"
        type="image/ico"
        href="/favicon.ico"
      />
    </Head>
  );
}
