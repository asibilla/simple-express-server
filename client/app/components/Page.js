import React from 'react';

const Page = ({
  match
}) => {
  return (
    <h1>Page {match.params.id}</h1>
  )
}

export default Page;
