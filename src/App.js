import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminLayout from "./components/Layout/AdminLayout";
import DefaultLayout from "./components/Layout/DefaultLayout";
import { GlobalStyle } from "./styles";


function App() {
  return (<BrowserRouter>
    <GlobalStyle/>
    <Routes>
      <Route path="/" element={<DefaultLayout/>}/>
      <Route path="/admin" element={<AdminLayout/>}/>
    </Routes>
  </BrowserRouter>

  );
}

export default App;
