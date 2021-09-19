import { graphql, useMutation } from "react-relay";

export default function useEditTaskMutation() {
  return useMutation(graphql`
    mutation editTaskMutation(
      $id: String!
      $name: String!
      $finished: Boolean!
    ) {
      editTask(id: $id, name: $name, finished: $finished) {
        id
        name
        finished
      }
    }
  `);
}
