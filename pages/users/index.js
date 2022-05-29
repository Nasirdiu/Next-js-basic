import Link from "next/link";
import React from "react";

const index = ({users}) => {
  return (
    <div>
      <h2>this is a users:{users.length}</h2>
      {
          users.map(user=><div key={user.id}>
              <h4>Name:{user.name}
              <Link href={`/users/${user.id}`}>
              <button>explore</button>
              </Link>
              </h4>
          </div>)
      }
    </div>
  );
};

export default index;

export async function getStaticProps(context) {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return {
    props: {users:data}, // will be passed to the page component as props
  };
}
