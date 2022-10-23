import React, { useContext } from "react";
import { AuthContext } from "../Context/Context";
import userAvater from "../Assets/user.png";
const Profile = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <div className="lg:my-20 lg:px-96 ">
      <div className="card card-side bg-base-200 shadow-xl py-5 px-5">
        <figure className="w-40">
          <img
            src={user?.photoURL ? user.photoURL : userAvater}
            alt="User Profile"
          />
        </figure>
        <div className="card-body">
          <h3 className="card-title">
            {user?.displayName ? (
              <span className="text-teal-600">{user?.displayName}</span>
            ) : (
              <span className="text-rose-800">No Username Found</span>
            )}
          </h3>
          <h3>
            Your Email :{" "}
            {user?.email ? (
              <span className="text-teal-600">{user?.email}</span>
            ) : (
              <span className="text-rose-800">No Email Found</span>
            )}
          </h3>
          <h3>
            Email Verified:{" "}
            {user?.emailVerified ? (
              <span className="text-teal-600">{user?.emailVerified}</span>
            ) : (
              <span className="text-rose-800">Email Not Verified</span>
            )}
          </h3>
          <h3>
            Your ID:{" "}
            {user?.uid ? (
              <span className="text-teal-600">{user?.uid}</span>
            ) : (
              <span className="text-rose-800">Email Not Verified</span>
            )}
          </h3>
          <div className="card-actions justify-end"></div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
