import AppbarCustom from "./Components/Appbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreateUserPage from "./pages/CreateUserPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <AppbarCustom />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/createuser" element={<CreateUserPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
