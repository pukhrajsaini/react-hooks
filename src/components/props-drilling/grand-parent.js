import Parent from "./parent";

const GrandParent = () => {
  const employData = {
    list: [
      {
        id: 1234,
        name: "pukhraj",
        skill: "NodeJS",
      },
      {
        id: 1235,
        name: "Shiv",
        skill: "React",
      },
    ],
    heading: "Employee List",
  };

  const list = employData.list;
  return (
    <div className="grand-parent">
      <h1>Grand parent Comp : {employData.heading}</h1>
      <Parent props={list} />
    </div>
  );
};

export default GrandParent;
