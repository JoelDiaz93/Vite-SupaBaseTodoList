import { useTasks } from "../context/TaskContext";

export const TaskCard = ({ task }) => {
  const { deleteTask, updateTasks } = useTasks();

  const handleDelete = async (id) => {
    await deleteTask(id);
  };

  const handleToggleDone = async (id, doneState) => {
    await updateTasks(id, { done: !doneState });
  };

  return (
    <div className="flex flex-col justify-center items-center align-middle m-1">
      <div className="bg-white shadow-md rounded-xl px-8 pt-4 pb-4 w-full max-w-md">
        <div className="flex flex-row justify-between">
          <span className="inline-block bg-blue-500/40 rounded-full px-2 py-1 text-sm font-bold text-gray-700">
            {task.id}
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-5 py-1 text-sm font-semibold text-gray-700">
            {task.done ? "Done" : "Not done"}
          </span>
        </div>
        <h4 className="italic text-lg mx-4 w-60 my-4 line-clamp-1 hover:line-clamp-none">{task.name}</h4>
        <div className="flex flex-row justify-between">
          <button
            className="mx-4 bg-red-600 text-white rounded-full p-1"
            onClick={() => handleDelete(task.id)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 7l16 0" />
              <path d="M10 11l0 6" />
              <path d="M14 11l0 6" />
              <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
              <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
            </svg>
          </button>
          <button
            className="mx-4 bg-blue-600 text-white rounded-full p-1"
            onClick={() => handleToggleDone(task.id, task.done)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
              <path d="M9 12l2 2l4 -4" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
