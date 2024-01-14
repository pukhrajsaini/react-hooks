import { useEmploy } from "./use-context";

const Child = () => {
  const { list } = useEmploy();
  return (
    <div className="child">
      <h1>Child Comp</h1>
      <table>
        <thead>
          <th>Id</th>
          <th>Name</th>
          <th>Skill</th>
        </thead>
        <tbody>
          {list.map((e) => (
            <tr key={e.id}>
              <td>{e.id}</td>
              <td> {e.name} </td>
              <td> {e.skill} </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Child;
