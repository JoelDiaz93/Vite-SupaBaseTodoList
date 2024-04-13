import { useState } from "react";
import { useTasks } from "../context/TaskContext";

export const TaskForm = () => {
  const [taskName, setTaskName] = useState("");
  const { createTask, adding } = useTasks();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createTask(taskName);
      setTaskName("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center align-middle">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-6 w-full max-w-md"
        onSubmit={handleSubmit}
      >
        <div className="sm:flex sm:items-center gap-2">
          <div className="sm:w-2/3">
            <input
              type="text"
              value={taskName}
              name="taskName"
              onChange={(e) => setTaskName(e.target.value)}
              required
              placeholder="Write a task name"
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 m-1"
            />
          </div>
          <div className="sm:w-1/3">
            <button
              className="bg-blue-600 text-white w-full py-2 px-4 rounded m-1"
              disabled={adding}
            >
              {adding ? "Loading..." : "Add"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
