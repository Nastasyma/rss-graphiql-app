import { IRequest } from "@/types/general";

export const makeRequest: (request: IRequest) => Promise<unknown | string> = (request) => {
    const {query, url, variables, headers} = request;
    const requestBody = {
      query,
      variables: variables,
    };
    return fetch(url, {
      method: 'POST',
      headers: headers || undefined,
      body: JSON.stringify(requestBody),
    })
      .then((res) => res.json())
      .catch((err) => {
        console.error(`You have problem with your fetch request:\n${err}`);
        return `You have problem with your fetch request:\n${err}`
    });
  };