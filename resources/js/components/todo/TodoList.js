import { graphql, useLazyLoadQuery } from "react-relay";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const query = graphql`
    query TodoListQuery {
      allTasks {
        id
        ...TodoItem_task
      }
    }
  `;

  const { allTasks } = useLazyLoadQuery(query, {});

  return (
    <div className="container">
      <div className="card">
        <div className="card-header">Tasks</div>
        <div className="card-body">
          <div className="list-group list-group-flush">
            {allTasks.map((task) => (
              <TodoItem key={task.id} task={task} />
            ))}
          </div>
        </div>
        <div className="card-footer">Number of Tasks: {allTasks.length}</div>
      </div>
    </div>
  );
}
