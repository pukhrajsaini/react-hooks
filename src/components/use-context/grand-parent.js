import Parent from "./parent";
import { useEmploy } from "./use-context";

const GrandParent = () => {
  const employData = useEmploy();
  return (
    <div className="grand-parent">
      <h1>Grand parent Comp : {employData.heading}</h1>
      <Parent />
    </div>
  );
};

export default GrandParent;
