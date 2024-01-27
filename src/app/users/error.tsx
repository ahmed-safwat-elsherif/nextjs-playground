"use client"; // Error components must be Client Components

import React, { useEffect } from "react";

const UsersError = ({
  error,
  reset,
}: {
  error: Error & { digest: string };
  reset: () => void;
}) => {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);
  return (
    <div>
      <h1 className="text-red-500">Something went wrong</h1>
      <p>
        <span className="font-bold">Message:</span> {error.message}
      </p>
      <p>
        <span className="font-bold">Digest:</span> {error.digest}
      </p>
      <hr />
      <button onClick={reset}>Try again</button>
    </div>
  );
};

export default UsersError;
