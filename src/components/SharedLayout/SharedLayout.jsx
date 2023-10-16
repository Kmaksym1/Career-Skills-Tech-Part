import { Header } from "components/Header/Header";
import { Loader } from "components/Loader/Loader";
import { Suspense } from 'react';
// import { useSelector } from "react-redux";
import { Outlet } from 'react-router-dom';
// import { selectIsLoading } from "redux/follow/selector";


const SharedLayout = () => {
// const Loading = useSelector(selectIsLoading)
  return (
    <>
            <Header />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;