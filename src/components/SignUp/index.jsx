import React from "react";
import { FcGoogle } from "react-icons/fc";
import { IMAGES } from "../../assets";

const SignUpComponent = () => {
  return (
    <div className="flex items-center space-between">
      <img src={IMAGES.LOGIN} />
      <button>
        <FcGoogle /> Sign In With Google
      </button>
    </div>
  );
};

export default SignUpComponent;
