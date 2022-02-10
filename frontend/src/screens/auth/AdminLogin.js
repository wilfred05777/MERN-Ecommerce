import React from "react";

const AdminLogin = () => {
  return (
    <div className="bg-black h-screen flex justify-center items-center ">
      <form className="bg-slate-900 p-8 rounded w-10/12 sm:w-8/12 md:w-6/12 lg:w-3/12">
        <h3 className="mb-4 text-white capitalize font-sembold text-lg">
          Dashboard Login
        </h3>
        <div className="mb-4">
          <input
            className="w-full bg-black1 p-3 rounded outline-none"
            type="email"
            placeholder="Enter email"
          />
        </div>
        <div className="mb-4">
          <input
            className="w-full bg-black1 p-3 rounded outline-none"
            type="email"
            placeholder="Enter password"
          />
        </div>
        <div className="mb-4">
          <input
            type="submit"
            value="Sign In &rarr;"
            className="bg-indigo-600 w-full p-4 rounded text-white uppercase font-semibold cursor-pointer"
          />
        </div>
      </form>
    </div>
  );
};

export default AdminLogin;
