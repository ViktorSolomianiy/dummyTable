import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Header, Link } from "./StyledSharedLayout";

const SharedLayout = () => {
  return (
    <div>
      <Header>
        <Link to="/dummyTable" activeclassname="active">
          Dummy Table
        </Link>
        <Link to="/dummyChart" activeclassname="active">
          Dummy Chart
        </Link>
        <Link to="/dummyList" activeclassname="active">
          Dummy List
        </Link>
      </Header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default SharedLayout;
