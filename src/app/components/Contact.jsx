import React from "react";
import Link from "next/link";
import Image from "next/image";

function Contact({ user }) {
  const { username, name, email, phone, website } = user;
  return (
    <>
      <Link href={`/${user.id}`}>
        <div className="flex items-center justify-center flex-col md:flex-row gap-4">
          <Image
            src={`https://robohash.org/${user.id}?set=set2&size=200x200`}
            alt={user.name}
            width="180"
            height="180"
          />

          <div className="lg:p-1 md:p-2 sm:p-6 text-start">
            <h2 className="text-lg font-medium text-white">{username}</h2>
            <p className="mt-2 text-sm text-white">Name: {name}</p>
            <p className="mt-1 text-sm text-white">Email: {email}</p>
            <p className="mt-1 text-sm text-white">Phone: {phone}</p>
            <p className="mt-1 text-sm text-white">Website: {website}</p>
          </div>
        </div>
      </Link>
    </>
  );
}

export default Contact;
