import React from "react";
import { useParams } from "react-router-dom";
import NotFound from "./NotFound";

const ProfileView = () => {
  const params = useParams<{ id: string }>();
  const profiles: Array<string> = ["1", "2", "3", "4", "5"];

  // Check if id is included in the profiles array
  //const isIdIncluded = profiles.includes(profid);
  return (
    <>
      {profiles.includes(params.id) ? (
        <div> Profile {params.id}</div>
      ) : (
        <NotFound />
      )}
    </>
  );
};

export default ProfileView;
