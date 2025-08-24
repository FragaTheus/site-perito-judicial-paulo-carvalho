import { Outlet, Route, Routes, useLocation } from "react-router-dom";
import { MainLayout } from "../layout/main-layout/MainLayout";
import { FuncaoPage } from "../pages/funcao/FuncaoPage";
import { PageSobre } from "../pages/sobre/Sobre";
import { HomePage } from "../pages/home/Home";
import { useEffect } from "react";
import { PageServicos } from "../pages/servicos/Servicos";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return null;
};

export const AppRoutes = () => {
  return (
    <Routes>
      <Route
        element={
          <MainLayout>
            <ScrollToTop />
            <Outlet />
          </MainLayout>
        }
      >
        <Route path="*" element={<HomePage />} />
        <Route path="funcao" element={<FuncaoPage />} />
        <Route path="sobre" element={<PageSobre />} />
        <Route path="servicos" element={<PageServicos />} />
      </Route>
    </Routes>
  );
};
