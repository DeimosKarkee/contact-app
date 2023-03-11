"use client";
import { useState } from "react";
import Contact from "./Contact";

function SearchContacts({ users }) {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="md:w-1/3 mb-3 self-center border-2 border-gray-400 text-center p-2 md:rounded-md sm:rounded-lg sm:w-10/12"
        placeholder="Search contact name....."
      />
      <div className="grid grid-cols-1 gap-3 xl:grid-cols-4 xl:gap-4 lg:grid-cols-3 lg:gap-3 md:grid-cols-2 md:gap-3 p-8 sm:p-2 md:p-3">
        {filteredUsers.map((user) => (
          <div
            className="bg-[#363e4c] rounded-lg overflow-hidden shadow-lg"
            key={user.id}
          >
            <Contact user={user} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchContacts;
