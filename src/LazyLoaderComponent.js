import { Suspense } from "react";

const LazyLoaderComponent = ({ component: Component }) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Component />
    </Suspense>
  );
};

export default LazyLoaderComponent;
