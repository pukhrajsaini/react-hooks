import { useState } from "react";

const LoginForm = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handler = (event) => {
    const { value, name } = event.target;
    setLoginData((prevData) => {
      return { ...prevData, [name]: value };
    });
  };

  return (
    <form>
      <div>
        <label htmlFor="email">Email : </label>
        <input
          type="email"
          name="email"
          placeholder="enter email"
          onChange={handler}
        ></input>
      </div>
      <div>
        <label htmlFor="password">Password : </label>
        <input
          type="password"
          name="password"
          placeholder="enter password"
          onChange={handler}
        ></input>
      </div>
    </form>
  );
};

export default LoginForm;
