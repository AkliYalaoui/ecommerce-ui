import { useState } from "react";
import { MdEmail } from "react-icons/md";
import { FaSmileWink } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import HomeNav from "../layouts/HomeNav";
import Container from "../layouts/Container";
import AuthForm from "../layouts/AuthForm";
import AuthInput from "../layouts/AuthInput";
import authImage from "../assets/auth.svg";
import { Link } from "react-router-dom";

const Login = () => {
  const [loginCredentials, setLoginCredentials] = useState({
    email: "",
    password: "",
  });
  const updateLoginCredentials = (input, value) => {
    setLoginCredentials((prev) => ({ ...prev, [input]: value }));
  };
  const submitFormHandler = (e) => {
    e.preventDefault();
    console.log(loginCredentials);
  };
  return (
    <div>
      <div className="shadow-sm">
        <HomeNav />
      </div>
      <Container>
        <div className="flex items-center p-4 mt-16 space-x-4">
          <div className="flex-1 max-w-md m-auto">
            <div className="text-center text-3xl mb-6 text-gray-600">
              <h1 className="mb-2">Welcome Back dear client</h1>
              <div className="flex items-center justify-center">
                <FaSmileWink />
              </div>
            </div>
            <AuthForm submitForm={submitFormHandler}>
              <AuthInput
                value={loginCredentials.email}
                onValueChange={(val) => updateLoginCredentials("email", val)}
                type="email"
                placeholder="Type your email here"
                icon={<MdEmail />}
              />
              <AuthInput
                value={loginCredentials.password}
                onValueChange={(val) => updateLoginCredentials("password", val)}
                type="password"
                placeholder="Type your password here"
                icon={<RiLockPasswordFill />}
              />
              <div>
                <div>
                  <Link
                    to="/register"
                    className="text-purple-700 hover:underline"
                  >
                    You don't have an account? sign up now
                  </Link>
                </div>
                <div>
                  <Link
                    to="/password-reset"
                    className="text-purple-700 hover:underline"
                  >
                    forgot Your password ?
                  </Link>
                </div>
                <input
                  className="bg-purple-700 hover:bg-purple-600 cursor-pointer rounded py-2 px-4 text-white ml-auto block"
                  type="submit"
                  value="sign in"
                />
              </div>
            </AuthForm>
          </div>
          <div className="hidden lg:block max-w-lg">
            <img src={authImage} alt="authentification" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Login;
