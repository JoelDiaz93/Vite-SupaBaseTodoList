import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { supabase } from "../supabase/client";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const { user, getUser, loading, loginMagicLink } = useAuth();

  useEffect(() => {
    async function router() {
      await getUser();
      if (user) {
        navigate("/");
      }
    }
    router();
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    loginMagicLink(email);
  };

  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <form className="flex flex-col justify-center " onSubmit={handleSubmit}>
        <div className="bg-slate-950/30 p-10 rounded shadow-lg">
          <input
            type="email"
            name="email"
            placeholder="youremail@site.com"
            onChange={(e) => setEmail(e.target.value)}
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 m-1"
          />
          <button className="bg-blue-600 text-white w-full py-2 px-4 rounded m-1 hover:bg-blue-900">
            Send
          </button>
        </div>
      </form>
    </div>
  );
};
