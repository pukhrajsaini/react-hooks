const Child = ({ props }) => {
  const list = props;
  return (
    <div className="child">
      <h1>Child Comp</h1>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Skill</th>
          </tr>
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
