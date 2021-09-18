import React from "react";

const AuthInput = ({ type, placeholder, icon,value,onValueChange }) => {
  return (
    <div className="flex  space-x-1 items-stretch">
      <label className="border-l-4 border-purple-700"></label>
      <div className="relative flex-1">
        <input
          data-placeholder=""
          type={type}
          className="border-b border-purple-700 w-full p-2 pl-6 focus:outline-none focus:shadow-md"
          placeholder={placeholder}
          required
          value={value}
          onChange={e=> onValueChange(e.target.value)}
          autoComplete="off"
        />
        <div className="absolute top-3 left-1 text-purple-700">{icon}</div>
      </div>
    </div>
  );
};

export default AuthInput;
