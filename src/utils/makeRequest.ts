interface IProps  {
  url: string;
  query: string;
  variables?: string;
  headers?: HeadersInit;
}
export const makeRequest: (request:IProps) => Promise<unknown | string> = (request) => {
  
    const {query, url, variables, headers} = request;
    const requestBody = {
      query,
      variables: variables,
    };
    return fetch(url, {
      method: 'POST',
      headers: {"Content-Type": "application/json",
    ...headers},
      body: JSON.stringify(requestBody),
    })
      .then((res) => res.json())
      .catch((err) => {
        console.error(`You have problem with your fetch request:\n${err}`);
        return `You have problem with your fetch request:\n${err}`
    });
  };