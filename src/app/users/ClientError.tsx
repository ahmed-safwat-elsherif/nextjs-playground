"use client";

import React, { useState } from "react";

const ClientError = () => {
  const [trigger, setTrigger] = useState(false);
  if (trigger) {
    throw new Error("This is a client error");
  }
  return <button onClick={() => setTrigger(true)}>Trigger Client Error</button>;
};

export default ClientError;
