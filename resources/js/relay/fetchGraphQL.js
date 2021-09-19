export default function fetchGraphQL(query, variables) {
  return fetch("/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: query.text,
      variables,
    }),
  }).then((result) => result.json());
}
