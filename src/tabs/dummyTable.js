import tabs from "../tabs.json";
import "./dummyTable.css";

const DummyTable = () => {
  return (
    <table>
      <tbody>
        <tr>
          <td>Title</td>
          <td>Order</td>
          <td>Path</td>
        </tr>
        {tabs.map(({ id, title, order, path }) => (
          <tr key={id}>
            <td>{title}</td>
            <td>{order}</td>
            <td>{path}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DummyTable;
