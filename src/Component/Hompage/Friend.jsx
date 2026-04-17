import React from "react";
import { NavLink } from "react-router";

const FriendCard = ({ friend }) => {
  const { name,  picture,  status } = friend;

  return (
    <NavLink to={`/friendDetails/${friend.id}`} className="bg-base-100 p-5 rounded-xl shadow-sm text-center">
      
      {/* Profile Image */}
      <div className="flex justify-center mb-3">
        <img
          src={picture}
          alt={name}
          className="w-16 h-16 rounded-full object-cover"
        />
      </div>

      {/* Name */}
      <h2 className="font-semibold">{name}</h2>

      {/* Role / Info */}
      <p className="text-sm text-gray-500 mb-2">{friend.days_since_contact} days ago</p>
      <button className="text-sm text-gray-500 mb-2 bg-[#CBFADB] rounded-2xl w-16">{friend.bio}</button> <br />
          <span className={`text-xs px-3 py-1 rounded-full ${friend.status === 'on-track' ? 'bg-green-100 text-green-600' : friend.status === 'overdue' ? 'bg-red-100 text-red-600' : 'bg-yellow-100 text-yellow-600'}`}>
              {friend.status}
            </span>
      {/* Status Badge */}
      <div>
        {status === "active" && (
          <span className="badge badge-success">On Track</span>
        )}
        {status === "inactive" && (
          <span className="badge badge-error">Inactive</span>
        )}
        {status === "pending" && (
          <span className="badge badge-warning">Need Care</span>
        )}
      </div>
    </NavLink>
  );
};

export default FriendCard;