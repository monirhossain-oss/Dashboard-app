"use client";
import React, { useState } from "react";
import { FaEdit, FaSave } from "react-icons/fa";

export default function Page() {
  const [activeTab, setActiveTab] = useState("profile");
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState({
    image: "/profile.png",
    fullName: "Jane D.",
    email: "jane@gmail.com",
    storeName: "Ubreakfix Store",
    storeAddress: "123 Main Street, New York, NY 10001",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen text-white">
      <div className="w-full rounded-xl">
        {/* Tabs */}
        <div className="flex mb-6">
          <button
            className={`px-4 py-2 mr-4 ${activeTab === "profile" && isEditing
              ? "border-b-2 border-white font-semibold"
              : "text-blue-200"
              }`}
            onClick={() => setActiveTab("profile")}
          >
            Profile
          </button>
          <button
            className={`px-4 py-2 ${activeTab === "password"
              ? "border-b-2 border-white font-semibold"
              : "text-blue-200"
              }`}
            onClick={() => setActiveTab("password")}
          >
            Password Settings
          </button>
        </div>

        {/* Profile Tab */}
        {activeTab === "profile" && (
          <div className="flex flex-col items-start gap-6 w-full">
            <p className=" text-lg ">Profile Image</p>

            {/* Profile Image */}
            <div className="relative">
              <img
              src="/b940caf9f3a52bcc9317c793ebc094db911b237b.jpg"
                alt="Profile"
                className="w-28 h-28 rounded-full object-cover border-2 border-white"
              />
              {!isEditing && (
                <button
                  className="absolute w-28 bottom-0 left-28 h-[40px] px-4 rounded-3xl bg-gradient-to-b from-[#152252] to-[#111B3C] text-white text-sm flex items-center justify-center gap-2 shadow-[inset_0px_1px_18px_2px_#D2EAFF]"
                  onClick={() => setIsEditing(true)}
                >
                  Edit Profile
                </button>
              )}
            </div>

            {/* User Info */}
            <div
              className={`mt-4 space-y-4 ${isEditing ? "w-full" : "max-w-md w-full"
                }`}
            >
              {isEditing ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                  {/* Full Name */}
                  <div className="flex flex-col w-full">
                    <label className="block mb-1">Full Name:</label>
                    <input
                      type="text"
                      name="fullName"
                      value={user.fullName}
                      onChange={handleChange}
                      className="w-full p-2 rounded-xl bg-gray-800 text-white border border-gray-600"
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col w-full">
                    <label className="block mb-1">Email:</label>
                    <input
                      type="email"
                      name="email"
                      value={user.email}
                      onChange={handleChange}
                      className="w-full p-2 rounded-xl bg-gray-800 text-white border border-gray-600"
                    />
                  </div>

                  {/* Store Name */}
                  <div className="flex flex-col w-full">
                    <label className="block mb-1">Store Name:</label>
                    <input
                      type="text"
                      name="storeName"
                      value={user.storeName}
                      onChange={handleChange}
                      className="w-full p-2 rounded-xl bg-gray-800 text-white border border-gray-600"
                    />
                  </div>

                  {/* Store Address */}
                  <div className="flex flex-col w-full">
                    <label className="block mb-1">Store Address:</label>
                    <input
                      type="text"
                      name="storeAddress"
                      value={user.storeAddress}
                      onChange={handleChange}
                      className="w-full p-2 rounded-xl bg-gray-800 text-white border border-gray-600"
                    />
                  </div>

                  {/* Save Button centered */}
                  <div className="md:col-span-2 flex justify-center mt-2 w-full">
                    <button
                      onClick={handleSave}
                      className="flex items-center justify-center gap-2 px-6 py-2 w-64 bg-[#00C950] rounded-4xl hover:bg-blue-400"
                    >
                      Save
                    </button>
                  </div>

                </div>
              ) : (
                <div className="space-y-2 w-full">
                  {["fullName", "email", "storeName", "storeAddress"].map(
                    (field) => (
                      <div
                        key={field}
                        className="flex justify-between pb-2 border-b border-gray-600 w-full"
                      >
                        <span className="capitalize">
                          {field.replace(/([A-Z])/g, " $1")}:
                        </span>
                        <span>{user[field]}</span>
                      </div>
                    )
                  )}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Password Tab */}
        {activeTab === "password" && (
          <div className="text-center text-blue-200 mt-10 w-full">
            Password settings form will be here.
          </div>
        )}
      </div>
    </div>
  );
}
