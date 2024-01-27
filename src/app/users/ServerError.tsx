import getAsyncData from "@/utils/getAsyncData";
import React from "react";

const ServerError = () => {
  return (
    <div>
      <button onClick={() => getAsyncData(null, true, 2000)}>
        Trigger Error
      </button>
    </div>
  );
};

export default ServerError;
