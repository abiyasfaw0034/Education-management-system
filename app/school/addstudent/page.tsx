"use client";

import { useState } from "react";
import { createStudent } from "@/app/actions/students";

export default function AddStudent() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(event.target);

    setLoading(true);
    setError("");

    try {
      await createStudent(formData); // This sends the form data to the server action
      console.log(formData);
      // You can handle a success message or redirection here
    } catch (error) {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
      form.reset();
    }
  };

  return (
    <div className="bg-white shadow-lg space-y-6 p-10">
      <h2 className="text-2xl font-semibold text-center">Add a New Student</h2>
      {/* 
      {error && <div className="text-red-500">{error}</div>}

      {/* First Name */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-blue-500"
          disabled={loading}
          required
        />

        {/* Last Name */}
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-blue-500"
          disabled={loading}
          required
        />

        {/* Date of Birth */}
        <input
          type="date"
          name="dateOfBirth"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-blue-500"
          disabled={loading}
        />

        {/* Gender */}
        <select
          name="gender"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-blue-500"
          disabled={loading}
          defaultValue={"male"}
        >
          <option value="" disabled selected>
            Select Gender
          </option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full text-white bg-black py-3 rounded-lg transition"
        >
          {loading ? "Adding Student..." : "Add Student"}
        </button>
      </form>
    </div>
  );
}
