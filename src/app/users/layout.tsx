import React, { PropsWithChildren } from "react";

const UsersLayout = ({ children }: PropsWithChildren<{}>) => {
  return (
    <div>
      <h1>Users list</h1>
      <div>{children}</div>
    </div>
  );
};

export default UsersLayout;
