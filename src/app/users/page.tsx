import getAsyncData from "@/utils/getAsyncData";
import React, { Suspense } from "react";
import UserReviews from "./reviews";
import ClientError from "./ClientError";
import ServerError from "./ServerError";

const usersList = [
  { id: 1, name: "Ahmed" },
  { id: 2, name: "Ali" },
];
const Users = async () => {
  const users = await getAsyncData(usersList);

  return (
    <ul>
      <div>
        <ClientError />
        <ServerError />
      </div>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
      <hr />
      <Suspense fallback={<div>loading reviews..</div>}>
        <UserReviews />
      </Suspense>
    </ul>
  );
};

export default Users;
