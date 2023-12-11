import { getIntrospectionQuery } from 'graphql';

export async function getSchemaTypes() {
  const url = 'https://graphql-pokemon2.vercel.app';
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
  console.log(schema);
}

// const response = await fetch(url, {
//   method: 'POST',
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify(query),
// })

// const result = await response.json();
// const introspectionData = result.data;
// const schema = buildClientSchema(introspectionData);
// console.log(schema);