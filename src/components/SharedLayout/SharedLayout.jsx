import { Loader } from "components/Loader/Loader";
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';


const SharedLayout = () => {

  return (
    <>
      {/* {IsLogin&&<Header />} */}
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;