"use client";

import Link from "next/link";
import React from "react";

import { usePathname } from "next/navigation";

const links = ["/", "/generate", "/about"];

function Menu() {
  const path = usePathname();

  return (
    <>
      {links.map((link) => (
        <li key={link}>
          <Link
            href={link}
            className={path === link ? "active" : ""}
            onClick={() => {
              const drawer = document.getElementById(
                "my-drawer-3"
              ) as HTMLInputElement;
              if (drawer) {
                drawer.checked = false;
              }
            }}
          >
            {link === "/" ? "Home" : link[1].toUpperCase() + link.slice(2)}
          </Link>
        </li>
      ))}
    </>
  );
}

function Navbar() {
  return (
    <div className="drawer z-50">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full navbar bg-base-300 fixed">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="flex-1 px-2 mx-2">
            <Link href="/">Comment Snippet Generator</Link>
          </div>
          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal gap-2">
              {/* Navbar menu content here */}
              <Menu />
            </ul>
          </div>
        </div>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 gap-2">
          {/* Sidebar content here */}
          <Menu />
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
