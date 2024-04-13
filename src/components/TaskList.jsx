import { useEffect } from "react";
import { useTasks } from "../context/TaskContext";
import { TaskCard } from "./TaskCard";

export const TasksList = ({ done = false }) => {
  const { loading, getTasks, tasks } = useTasks();

  useEffect(() => {
    getTasks(done);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [done]);

  function renderTasks() {
    if (loading) {
      return <p className="text-2xl text-white text-center">Loading...</p>;
    } else if (tasks.length === 0) {
      return <p>No tasks</p>;
    } else {
      return tasks.map((task) => {
        return <TaskCard key={task.id} task={task} />;
      });
    }
  }
  
  // console.log(renderTasks());
  return <div className={`grid gap-2 ${renderTasks().length <= 1 ? 'grid-cols-1':'sm:grid-cols-1 md:grid-cols-2'}` }>{renderTasks()}</div>;
};
