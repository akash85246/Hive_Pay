import React from "react";

export default function Navbar() {
  return (
    <nav className="fixed w-full p-5 py-2 flex gap-2  items-center">
      <img src="/hiveIcon.svg" alt="Hive Icon" className="h-20" />
      <h1 className="text-6xl  font-semibold">Pay</h1>
    </nav>
  );
}
