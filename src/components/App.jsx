import { HomePage } from 'Pages/Home/Home';
import { TweetsPage } from 'Pages/TweetsPage/TweetsPage';
import { Navigate, Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyled/global.styled';
import SharedLayout from './SharedLayout/SharedLayout';

export const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
          <Route path="/tweets" element={<TweetsPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
      
    </Routes>
    <GlobalStyle />
    </>
  );
};
