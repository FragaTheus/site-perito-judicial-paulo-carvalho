import { Outlet, Route, Routes } from "react-router-dom";
import { MainLayout } from "../layout/main-layout/MainLayout";
import { FuncaoPage } from "../pages/funcao/FuncaoPage";
import { PageSobre } from "../pages/sobre/Sobre";
import { HomePage } from "../pages/home/Home";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route
        element={
          <MainLayout>
            <Outlet />
          </MainLayout>
        }
      >
        <Route path="*" element={<HomePage />} />
        <Route path="funcao" element={<FuncaoPage />} />
        <Route path="sobre" element={<PageSobre />} />
      </Route>
    </Routes>
  );
};
