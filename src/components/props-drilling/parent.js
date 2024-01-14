import Child from "./child";

const Parent = ({ props }) => {
  console.log(props, "parent");
  return (
    <div className="parent">
      <h1>Parent Comp</h1>
      <Child props={props} />
    </div>
  );
};

export default Parent;
