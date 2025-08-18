import React from "react";
const UserCard = ({ name, email, image }) => {
  return (
    <div className="max-w-sm w-full p-6 rounded-2xl  text-gray-800 shadow-md hover:shadow-xl transform transition duration-500 hover:-translate-y-2">
      <div className="flex justify-center">
        <div className="w-24 h-24 rounded-full border-4 border-white shadow-sm flex items-center justify-center text-3xl font-bold text-white overflow-hidden">
          {image ? (
            <img
              src={image}
              alt="User Avatar"
              className="w-24 h-24 rounded-full object-cover hover:scale-110 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-r from-purple-400 via-pink-400 to-red-400">
              {name?.charAt(0).toUpperCase() || "U"}
            </div>
          )}
        </div>
      </div>
      <div className="text-center mt-4">
        <h2 className="text-xl font-semibold text-gray-900">{name || "Unknown User"}</h2>
        <p className="text-sm text-gray-700 mt-1">{email || "No email provided"}</p>
      </div>
      <div className="mt-6 flex justify-center">
        <button className="px-6 py-2 bg-gradient-to-r from-[#6a11cb] via-[#b721ff] to-[#f857a6] text-white font-medium rounded-lg shadow hover:opacity-90 transition">
          View Profile
        </button>
      </div>
    </div>
  );
};
export default UserCard;
