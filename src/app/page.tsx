// import Image from "next/image";

import Link from "next/link";

export default function Home() {
  // design hero page
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="text-center hero-content">
        <div className="max-w-xl">
          <h1 className="mb-4 leading-tight text-5xl font-bold">
            <div className="">Welcome to</div>
            <div className="">
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-600">
                Easy Snippet
              </span>
            </div>
          </h1>

          <div className="mb-12">
            <div className="badge badge-outline">
              Specially Made for ezSnippets
            </div>
          </div>
          <p className="mb-5">
            Your go to WebApp for generating snippets for YT comments. No more
            wasting time on editing the template.
          </p>
          <Link
            href="/generate"
            className="btn btn-primary btn-circle w-52 px-4 bg-gradient-to-r from-blue-400 to-pink-600 text-base"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}
