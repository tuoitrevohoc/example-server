import { graphql, useFragment } from "react-relay";
import useEditTaskMutation from "../../relay/mutations/editTask";

export default function TodoItem(props) {
  const task = useFragment(
    graphql`
      fragment TodoItem_task on Task {
        id
        name
        finished
      }
    `,
    props.task
  );

  const [commit, loading] = useEditTaskMutation();

  return (
    <label className="list-group-item">
      <input
        className="form-check-input me-1"
        type="checkbox"
        disabled={loading}
        checked={task.finished}
        onChange={() =>
          commit({
            variables: {
              id: task.id,
              name: task.name,
              finished: !task.finished,
            },
          })
        }
      />
      {task.name}
    </label>
  );
}
