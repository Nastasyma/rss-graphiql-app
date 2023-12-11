import { getIntrospectionQuery } from 'graphql';

// const url = 'https://rickandmortyapi.com/graphql';
// const url = 'https://swapi-graphql.netlify.app/.netlify/functions/index';
// const url = 'https://graphql-pokemon2.vercel.app';

export async function getSchemaTypes() {
  const url = 'https://swapi-graphql.netlify.app/.netlify/functions/index';

  const query = {
    query: getIntrospectionQuery(),
  };
  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(query),
  });

  const { data } = await response.json();
  const schema = data.__schema.types;
  return schema;
}
