import { DrawerContextProvider } from "./contexts/DrawerContext";
import { ResponsiveProvider } from "./contexts/ResponsiveContext";
import { WppProvider } from "./contexts/WhatsAppContext";
import { MainLayout } from "./layout/main-layout/MainLayout";
import { FuncaoPage } from "./pages/funcao/FuncaoPage";
import { PageSobre } from "./pages/sobre/Sobre";

function App() {
  return (
    <DrawerContextProvider>
      <ResponsiveProvider>
        <WppProvider>
          <MainLayout>
            <FuncaoPage />
          </MainLayout>
        </WppProvider>
      </ResponsiveProvider>
    </DrawerContextProvider>
  );
}

export default App;
