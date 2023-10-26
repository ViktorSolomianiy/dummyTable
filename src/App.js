import { lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import LazyLoaderComponent from "./LazyLoaderComponent";
import tabsConfig from "./tabs.json";

const SharedLayout = lazy(() => import("./SharedLayout"));

const App = () => {
  const tabs = tabsConfig.map(({ id, title, order, path }) => ({
    id,
    title,
    order,
    path,
    component: lazy(() => import(`./${path}`)),
  }));

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        {tabs.map(({ id, component }) => (
          <Route
            key={id}
            path={id}
            index
            element={<LazyLoaderComponent component={component} />}
          />
        ))}
        <Route path="/" element={<Navigate to={tabs[0].id} replace />} />
      </Route>
    </Routes>
  );
};

export default App;
