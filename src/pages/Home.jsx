import { useEffect, useState } from "react";
import { supabase } from "../supabase/client";
import { useNavigate } from "react-router-dom";
import { TaskForm } from "../components/TaskForm";
import { TasksList } from "../components/TaskList";

export const Home = () => {
  const navigate = useNavigate();
  const [showTasksDone, setShowTasksDone] = useState(false);

  useEffect(() => {
    async function getUser() {
      const user = await supabase.auth.getUser();
      // console.log(user);
      if (!user.data.user) {
        navigate("/login");
      } else {
        navigate("/");
      }
    }
    getUser();
  }, []);

  return (
    <div className="container bg-slate-950/30 rounded-xl shadow-lg p-10">
      <div className="flex flex-col justify-center">
        <TaskForm />
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="container m-4">
          <header className="flex flex-col md:flex-row md:justify-between items-center align-middle md:px-28 md:mx-8">
            <span className=" text-2xl text-white font-bold my-2">
              {showTasksDone ? `Done Tasks` : "Tasks"}
            </span>
            <button
              onClick={() => setShowTasksDone(!showTasksDone)}
              className="bg-blue-900 text-slate-200 rounded-md p-2 my-2"
            >
              {showTasksDone ? "Show tasks to do" : "Show tasks done"}
            </button>
          </header>
        </div>

        <TasksList done={showTasksDone} />
      </div>
    </div>
  );
};
