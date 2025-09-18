import Link from "next/link";

export default function SignupPage() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <section
        className="h-screen w-full bg-cover bg-center flex items-center justify-center "
        style={{ backgroundImage: "url('/Castle.png')" }}
      >
        <form
          className="bg-[var(--color-bg)]/90 backdrop-blur-lg shadow-2xl p-8 rounded-xl w-96 border border-gray-300/30 relative overflow-hidden mt-20"
        >
          {/* Artisanal decorative elements */}
          <div className="absolute -top-4 -left-4 w-8 h-8 border-l-2 border-t-2 border-amber-600/70"></div>
          <div className="absolute -bottom-4 -right-4 w-8 h-8 border-r-2 border-b-2 border-amber-600/70"></div>

          <div className="text-center mb-2">
            <h2 className="text-3xl font-serif font-bold text-black mb-2">Create Account</h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
          </div>

          <div className="mb-4 relative">
            <input
              name="name"
              type="text"
              placeholder="Full Name"


              className="w-full p-3 border rounded-lg border-gray-400 focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 bg-white/90 transition-all duration-300 pl-10"
              required
            />
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 absolute left-3 top-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>

          <div className="mb-4 relative">
            <input
              name="email"
              type="email"
              placeholder="Email Address"


              className="w-full p-3 border rounded-lg border-gray-400 focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 bg-white/90 transition-all duration-300 pl-10"
              required
            />
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 absolute left-3 top-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>

          <div className="mb-4 relative">
            <input
              name="password"
              type="password"
              placeholder="Password"


              className="w-full p-3 border rounded-lg border-gray-400 focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 bg-white/90 transition-all duration-300 pl-10"
              required
            />
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 absolute left-3 top-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>

          <div className="mb-6 relative">
            <input
              name="confirmPassword"
              type="password"
              placeholder="Confirm Password"


              className="w-full p-3 border rounded-lg border-gray-400 focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 bg-white/90 transition-all duration-300 pl-10"
              required
            />
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 absolute left-3 top-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-black text-white rounded-lg border-black font-medium hover:bg-amber-700 transition-colors duration-300 flex items-center justify-center"
          >
            <span>Sign Up</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
            </svg>
          </button>

          <p className="text-center mt-4 text-black">
            Already have an account?{" "}
            <Link href="/login" className="text-amber-700 font-medium hover:underline ml-1">
              Log In
            </Link>
          </p>

          <div className="text-center mt-6">
            <div className="inline-block h-px w-16 bg-gray-400 align-middle"></div>
            <span className="mx-2 text-gray-600 text-sm">Or continue with</span>
            <div className="inline-block h-px w-16 bg-gray-400 align-middle"></div>
          </div>

          <div className="flex justify-center gap-4 mt-4">
            <button type="button" className="p-2 border border-gray-300 rounded-full hover:bg-gray-100 transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </button>
            <button type="button" className="p-2 border border-gray-300 rounded-full hover:bg-gray-100 transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
            </button>
            <button type="button" className="p-2 border border-gray-300 rounded-full hover:bg-gray-100 transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M21.35 11.1h-9.17v2.73h6.51c-.33 3.81-3.5 5.44-6.5 5.44C8.36 19.27 5 16.25 5 12c0-4.1 3.2-7.27 7.2-7.27 3.09 0 4.9 1.97 4.9 1.97L19 4.72S16.56 2 12.1 2C6.42 2 2.03 6.8 2.03 12c0 5.05 4.13 10 10.22 10 5.35 0 9.25-3.67 9.25-9.09 0-1.15-.15-1.81-.15-1.81z" />
              </svg>
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}