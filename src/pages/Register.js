import { useState } from "react";
import { MdEmail } from "react-icons/md";
import { SiGooglecalendar } from "react-icons/si";
import { FaSmileWink, FaUserAlt } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import HomeNav from "../layouts/HomeNav";
import Container from "../layouts/Container";
import AuthForm from "../layouts/AuthForm";
import AuthInput from "../layouts/AuthInput";
import authImage from "../assets/auth.svg";
import { Link } from "react-router-dom";

const Register = () => {
  const [registerCredentials, setRegisterCredentials] = useState({
    email: "",
    username: "",
    birthday: "",
    password: "",
    passwordConfirmation: "",
  });
  const updateLoginCredentials = (input, value) => {
    setRegisterCredentials((prev) => ({ ...prev, [input]: value }));
  };
  const submitFormHandler = (e) => {
    e.preventDefault();
    console.log(registerCredentials);
  };
  return (
    <div>
      <div className="shadow-sm">
        <HomeNav />
      </div>
      <Container>
        <div className="flex flex-row-reverse items-center p-4 mt-16 space-x-4">
          <div className="flex-1 max-w-md m-auto">
            <div className="text-center text-3xl mb-6 text-gray-600">
              <h1 className="mb-2">
                Join us and find the best products for you
              </h1>
              <div className="flex items-center justify-center">
                <FaSmileWink />
              </div>
            </div>
            <AuthForm submitForm={submitFormHandler}>
              <AuthInput
                value={registerCredentials.email}
                onValueChange={(val) => updateLoginCredentials("email", val)}
                type="email"
                placeholder="Type your email here"
                icon={<MdEmail />}
              />
              <AuthInput
                value={registerCredentials.username}
                onValueChange={(val) => updateLoginCredentials("username", val)}
                type="text"
                placeholder="type your username here"
                icon={<FaUserAlt />}
              />
              <AuthInput
                value={registerCredentials.birthday}
                onValueChange={(val) => updateLoginCredentials("birthday", val)}
                type="date"
                placeholder="type your birthday here"
                icon={<SiGooglecalendar />}
              />
              <AuthInput
                value={registerCredentials.password}
                onValueChange={(val) => updateLoginCredentials("password", val)}
                type="password"
                placeholder="type your password here"
                icon={<RiLockPasswordFill />}
              />
              <AuthInput
                value={registerCredentials.passwordConfirmation}
                onValueChange={(val) =>
                  updateLoginCredentials("passwordConfirmation", val)
                }
                type="password"
                placeholder="confirm your password"
                icon={<RiLockPasswordFill />}
              />
              <div>
                <div>
                  <Link to="/login" className="text-purple-700 hover:underline">
                    You already have an account? sign in now
                  </Link>
                </div>
                <input
                  className="bg-purple-700 hover:bg-purple-600 cursor-pointer rounded py-2 px-4 text-white ml-auto block"
                  type="submit"
                  value="sign up"
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

export default Register;
