import Link from "next/link";
import React from "react";

function About() {
  // generate about page with info about the project and the creator
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="text-center hero-content">
        <div className="max-w-xl">
          <h1 className="mb-4 leading-tight text-5xl font-bold">
            About
            {/* <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-600">
              EasySnippet
            </span> */}
          </h1>
          <div className="mb-12">
            <div className="badge badge-outline">
              Created by Soham Sagathiya
            </div>
          </div>
          <p className="mb-5">
            You can start contributing to this project by finding issues and by{" "}
            <a
              href="https://github.com/soham901/easy-snippet"
              className="text-blue-500 hover:underline"
            >
              contributing on GitHub
            </a>
            .
          </p>
          <p className="mb-5">
            This project was made by{" "}
            <a
              href="https://twitter.com/soham901x"
              className="text-blue-500 hover:underline"
            >
              Soham Sagathiya
            </a>{" "}
            for ezSnippets. It is a simple tool that generates comment snippets
            for you.
          </p>
          <p className="mb-5 flex justify-center gap-2">
            <Link
              href="https://github.com/soham901/easy-snippet"
              className="btn btn-accent"
            >
              Source Code
            </Link>
            <Link
              href="https://twitter.com/soham901x"
              className="btn btn-primary"
            >
              Follow on Twitter
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
