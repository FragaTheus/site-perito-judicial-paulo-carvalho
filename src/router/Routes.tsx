import { Outlet, Route, Routes, useLocation } from "react-router-dom";
import { MainLayout } from "../layout/MainLayout";
import { useEffect } from "react";
import { PageHome } from "../pages/PageHome";

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
        <Route path="*" element={<PageHome />} />
      </Route>
    </Routes>
  );
};
