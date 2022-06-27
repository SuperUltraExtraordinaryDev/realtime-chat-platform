import React from "react";
import { FcGoogle } from "react-icons/fc";
import { IMAGES } from "../../assets";

const SignUpComponent = () => {
  return (
    <div className="flex items-center space-between">
      <img src={IMAGES.LOGIN} alt="Login" />
      <button className="flex items-center columns-4 p-2 text-white bg-gray-800 border-2 border-slate-500 rounded-lg">
        <FcGoogle size={24} />
        <span className="ml-4">Sign In With Google</span>
      </button>
    </div>
  );
};

export default SignUpComponent;
