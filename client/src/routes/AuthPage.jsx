import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

const AuthPage = () => {
  const [mode, setMode] = useState("login"); // 'login' | 'register'
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPwd, setShowPwd] = useState(false);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const validate = () => {
    const e = {};
    if (mode === "register" && !name.trim()) e.name = "Name is required";
    if (!email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      e.email = "Enter a valid email";
    if (!password) e.password = "Password is required";
    else if (password.length < 6) e.password = "At least 6 characters";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    try {
      // TODO: Call your API
      await new Promise((r) => setTimeout(r, 600));
      // On success: navigate or show toast
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="authPage min-h-screen w-full flex items-center justify-center px-4 py-6 sm:py-10">
      <div className="w-full max-w-[520px] rounded-3xl border border-[#e9e9e9] bg-white p-4 sm:p-6 md:p-10 text-center">
        {/* Logo */}
        <div className="mb-6 flex justify-center">
          <img
            src="/general/pinterest-logo.png"
            alt="Pinterest"
            className="h-36"
          />
        </div>

        <h1 className="text-xl sm:text-2xl font-semibold mb-2">
          Welcome to Pinterest
        </h1>
        <p className="text-sm sm:text-base text-gray-600 mb-6">
          Find new ideas to try
        </p>

        {/* Social buttons */}
        <div className="flex flex-col gap-2 mb-4">
          <button className="w-full rounded-full py-3 bg-black text-white hover:opacity-90 flex items-center justify-center gap-3">
            <FcGoogle size={20} aria-hidden="true" />
            <span>Continue with Google</span>
          </button>
          <button className="w-full rounded-full py-3 bg-blue-600 text-white hover:bg-blue-700 flex items-center justify-center gap-3">
            <FaFacebook size={20} className="text-white" aria-hidden="true" />
            <span>Continue with Facebook</span>
          </button>
        </div>

        {/* Divider */}
        <div className="relative my-3 sm:my-4">
          <div className="h-px bg-gray-200" />
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white px-3 text-sm text-gray-500">
            OR
          </span>
        </div>

        {/* Form */}
        <form onSubmit={onSubmit} className="flex flex-col gap-3 text-left">
          {mode === "register" && (
            <div className="flex flex-col gap-1">
              <label htmlFor="name" className="text-sm text-gray-600">
                Name
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={`rounded-2xl border px-4 py-3 outline-none ${
                  errors.name ? "border-red-500" : "border-gray-300"
                }`}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? "name-err" : undefined}
                placeholder="Your name"
              />
              {errors.name && (
                <span id="name-err" className="text-xs text-red-600">
                  {errors.name}
                </span>
              )}
            </div>
          )}

          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-sm text-gray-600">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`rounded-2xl border px-4 py-3 outline-none ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "email-err" : undefined}
              placeholder="you@example.com"
            />
            {errors.email && (
              <span id="email-err" className="text-xs text-red-600">
                {errors.email}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="password" className="text-sm text-gray-600">
              Password
            </label>
            <div
              className={`rounded-2xl border flex items-center px-4 ${
                errors.password ? "border-red-500" : "border-gray-300"
              }`}
            >
              <input
                id="password"
                type={showPwd ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="py-3 outline-none flex-1"
                placeholder="••••••"
                aria-invalid={Boolean(errors.password)}
                aria-describedby={errors.password ? "password-err" : undefined}
              />
              <button
                type="button"
                className="text-sm text-gray-600 hover:text-black"
                onClick={() => setShowPwd((s) => !s)}
              >
                {showPwd ? "Hide" : "Show"}
              </button>
            </div>
            {errors.password && (
              <span id="password-err" className="text-xs text-red-600">
                {errors.password}
              </span>
            )}
          </div>

          <button
            type="submit"
            disabled={submitting}
            className={`mt-2 rounded-full py-3 text-white font-semibold ${
              submitting ? "bg-red-300" : "bg-red-600 hover:bg-red-700"
            }`}
          >
            {mode === "login" ? "Log in" : "Create account"}
          </button>
        </form>

        {/* Toggle */}
        <div className="mt-6 text-sm text-gray-700">
          {mode === "login" ? (
            <span>
              Not on Pinterest yet?{" "}
              <button
                className="text-blue-600 hover:underline"
                onClick={() => setMode("register")}
              >
                Sign up
              </button>
            </span>
          ) : (
            <span>
              Already a member?{" "}
              <button
                className="text-blue-600 hover:underline"
                onClick={() => setMode("login")}
              >
                Log in
              </button>
            </span>
          )}
        </div>

        <p className="mt-4 text-[11px] text-gray-500">
          By continuing, you agree to Pinterest&apos;s Terms of Service and
          acknowledge you&apos;ve read our Privacy Policy.
        </p>
      </div>
    </div>
  );
};

export default AuthPage;
