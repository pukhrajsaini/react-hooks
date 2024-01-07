import { useContext } from "react";
import { AppContext } from "./use-context";

const Child = () => {
  const userData = useContext(AppContext);
  return (
    <>
      <h1>Child Comp</h1>
      <p>
        {userData.name} : {userData.designation}
      </p>
    </>
  );
};

export default Child;
