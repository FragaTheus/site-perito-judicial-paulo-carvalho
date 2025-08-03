import { BrowserRouter } from "react-router-dom";
import { DrawerContextProvider } from "./contexts/DrawerContext";
import { ResponsiveProvider } from "./contexts/ResponsiveContext";
import { WppProvider } from "./contexts/WhatsAppContext";
import { AppRoutes } from "./router/Routes";

function App() {
  return (
    <BrowserRouter>
      <DrawerContextProvider>
        <ResponsiveProvider>
          <WppProvider>
            <AppRoutes />
          </WppProvider>
        </ResponsiveProvider>
      </DrawerContextProvider>
    </BrowserRouter>
  );
}

export default App;
