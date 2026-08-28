import { Link } from "react-router-dom";

const AuthLayout = ({ children, type }) => {
  const isLogin = type === "login";

  return (
    <div className="min-h-screen bg-[#080b12] text-white flex items-center justify-center p-4 md:p-6">
      <div className="w-full max-w-5xl min-h-[620px] grid overflow-hidden rounded-2xl border border-white/10 bg-[#151a26] shadow-2xl md:grid-cols-2">

        <div className="hidden flex-col justify-between bg-gradient-to-br from-[#172b3a] to-[#242343] p-10 md:flex">
          <div>
            <h1 className="text-4xl font-bold tracking-tight">
              HONELOGIX
            </h1>

            <p className="mt-3 text-sm tracking-wide text-gray-300">
              WEB DESIGN & DEVELOPMENT
            </p>

            <p className="mt-5 max-w-sm leading-6 text-gray-400">
              Creating thoughtful digital experiences through
              clean design and modern technology.
            </p>
          </div>

          <div className="space-y-4">
            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <h3 className="text-lg font-semibold">
                Simple. Modern. Reliable.
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-400">
                Focused solutions designed to make digital
                experiences better.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <h3 className="text-lg font-semibold">
                Technology with purpose.
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-400">
                Building practical solutions with modern
                web technologies.
              </p>
            </div>
          </div>

          <p className="text-sm text-gray-500">
            © 2026 Honelogix
          </p>
        </div>

        <div className="flex flex-col justify-center p-7 md:p-12">
          {children}

          <p className="mt-7 text-center text-sm text-gray-500">
            {isLogin
              ? "Don't have an account?"
              : "Already have an account?"}

            <Link
              to={isLogin ? "/register" : "/login"}
              className="ml-1 text-cyan-400 transition hover:text-cyan-300"
            >
              {isLogin ? "Create one" : "Sign in"}
            </Link>
          </p>
        </div>

      </div>
    </div>
  );
};

export default AuthLayout;