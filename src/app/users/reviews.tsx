import getAsyncData from "@/utils/getAsyncData";
import React from "react";

const data = { rate: 4, total: 5 };
const UserReviews = async () => {
  const reviews = await getAsyncData(data, false, 3000);
  return (
    <div>
      Reviews: {reviews.rate} / {reviews.total}
    </div>
  );
};

export default UserReviews;
