import React from "react";
import { Link, Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Profile = () => {
  const profiles = [1, 2, 3, 4, 5];
  return (
    <>
      <div>
        {profiles.map((p) => (
          <Link key={p} to={`/profile/${p}`} className="d-flex flex-col gap-5">
            <b> Profile {p} </b>
          </Link>
        ))}
      </div>
      <p>
        Custom Buttons for actions in forms, dialogs, and more with support for
        multiple sizes, states, and more.Custom Buttons for actions in forms,
        dialogs, and more with support for multiple sizes, states, and
        more.Custom Buttons for actions in forms, dialogs, and more with support
        for multiple sizes, states, and more.Custom Buttons for actions in
        forms, dialogs, and more with support for multiple sizes, states, and
        more.
      </p>
      <Outlet />
    </>
  );
};

export default Profile;
