"use client";

import { CreateSchool } from "@/app/actions/school";

export default function AddSchool() {
  return (
    <div className="bg-white  shadow-lg space-y-6 p-10">
      <h2 className="text-2xl font-semibold text-center">
        Add a New School and its Admin
      </h2>

      {/* Combined Form */}
      <form action={CreateSchool} className="space-y-6">
        {/* School Form Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">School Details</h3>

          <input
            type="text"
            name="schoolName"
            placeholder="School Name"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-blue-500"
          />

          <select
            name="schoolType"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-blue-500"
          >
            <option value="" disabled>
              Select School Type
            </option>
            <option value="private">Private</option>
            <option value="public">Public</option>
          </select>

          <input
            type="text"
            name="address"
            placeholder="Address"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-blue-500"
          />

          <input
            type="text"
            name="city"
            placeholder="City"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-blue-500"
          />

          <input
            type="number"
            name="numOfStudents"
            placeholder="Number of Students"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-blue-500"
          />
        </div>

        {/* User Validation Form Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">School Admin</h3>

          <input
            type="text"
            name="userName"
            placeholder="Full Name"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-blue-500"
          />

          <input
            type="email"
            name="userEmail"
            placeholder="Email"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-blue-500"
          />

          <input
            type="password"
            name="userPassword"
            placeholder="Password"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-blue-500"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full text-white bg-black py-3 rounded-lg  transition"
        >
          Add School and User
        </button>
      </form>
    </div>
  );
}
