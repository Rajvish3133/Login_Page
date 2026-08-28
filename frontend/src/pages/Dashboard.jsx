import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import api from "../api";

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      try {
        const { data } = await api.get("/auth/me");
        setUser(data.user);
      } catch (error) {
        navigate("/login");
      }
    };

    getUser();
  }, [navigate]);

  const logout = async () => {
    try {
      await api.post("/auth/logout");

      toast.success("Logged out successfully");
      navigate("/login");
    } catch (error) {
      const message =
        error.response?.data?.message || "Unable to logout";

      toast.error(message);
    }
  };

  return (
    <div className="relative h-screen overflow-hidden bg-[#080b12] text-white">
      <div className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-violet-600/10 blur-[120px]" />

      <header className="relative z-10 flex items-start justify-between px-6 pt-7 md:px-12">
        <div>
          <h1 className="text-xl font-bold tracking-[0.14em] md:text-2xl">
            HONELOGIX
          </h1>

          <p className="mt-1 text-[9px] tracking-[0.3em] text-gray-500 md:text-[10px]">
            WEB DESIGN & DEVELOPMENT
          </p>
        </div>

        <button
          onClick={logout}
          className="rounded-lg border border-white/10 px-5 py-2.5 text-sm text-gray-400 transition hover:bg-white/5 hover:text-white"
        >
          Logout
        </button>
      </header>

      <main className="relative z-10 flex justify-center px-5 pt-7 md:pt-9">
        <div className="w-full max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-4 py-2 text-xs text-emerald-300 md:text-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Authentication successful
          </div>

          <div className="rounded-3xl border border-white/10 bg-[#10141c]/90 px-6 py-9 shadow-2xl backdrop-blur-xl md:px-14 md:py-11">
            <div className="mx-auto h-1 w-12 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500" />

            <p className="mt-5 text-sm text-gray-400 md:text-base">
              Welcome,
            </p>

            {user?.fullName && (
              <p className="mt-1 font-semibold text-gray-200">
                {user.fullName}
              </p>
            )}

            <h2 className="mt-4 text-4xl font-bold leading-tight md:text-6xl">
              Welcome to
            </h2>

            <h2 className="mt-1 bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-500 bg-clip-text text-5xl font-bold leading-tight text-transparent md:text-7xl">
              Honelogix
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-gray-400 md:text-lg">
              We're glad to have you here.
              <br />
              Let's build something meaningful together.
            </p>

            <div className="mx-auto my-5 h-px w-16 bg-white/10" />

            <p className="flex items-center justify-center gap-2 text-xs text-gray-500 md:text-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              You are securely signed in to your account.
            </p>
          </div>

          <p className="mt-4 text-xs text-gray-600">
            © 2026 Honelogix. All rights reserved.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;