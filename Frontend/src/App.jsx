import { BrowserRouter } from "react-router-dom";
// import MainRouts from "./MainRouts";
import { lazy } from "react";
const MainRouts = lazy(() => import("./MainRouts"));

function App() {
  return (
    <BrowserRouter>
      <MainRouts />
    </BrowserRouter>
  );
}

export default App;
