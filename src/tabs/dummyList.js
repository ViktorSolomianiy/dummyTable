import tabs from "../tabs.json";

const DummyList = () => {
  return (
    <div>
      {tabs.map(({ id, title, order, path }) => (
        <ul key={id}>
          <li>
            <h2>{title}</h2>
            <p>Order: {order}</p>
            <p>Path: {path}</p>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default DummyList;
