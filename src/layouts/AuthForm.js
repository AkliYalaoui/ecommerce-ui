import { useRef, useEffect } from "react";

const AuthForm = ({ children,submitForm }) => {
  const formRef = useRef();

  useEffect(() => {
    if (formRef) {
      Array.from(
        formRef.current.querySelectorAll("input:not([type='submit'])")
      ).forEach((input) => {
        input.addEventListener("focus", () => {
          input.setAttribute(
            "data-placeholder",
            input.getAttribute("placeholder")
          );
          input.setAttribute("placeholder", "");
        });
        input.addEventListener("blur", () => {
          input.setAttribute(
            "placeholder",
            input.getAttribute("data-placeholder")
          );
        });
      });
    }
  }, []);
  return (
    <form onSubmit={submitForm} className="space-y-6" ref={formRef}>
      {children}
    </form>
  );
};

export default AuthForm;
