import UserCard from "../components/UserCard.jsx";
import React from "react";
export default function Home() {
  return (
    <div className="p-6 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      <UserCard name="Karan Singh" email="karan@example.com" />
      <UserCard name="Neha Sharma" email="neha@example.com" />
      <UserCard name="Rahul Verma" email="rahul@example.com" />
    </div>
  );
}
