import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Detail from "./pages/Detail";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        {/* Layout serves as a parent route */}
        <Route path="/" element={<Layout />}>
          {/* Default route */}
          <Route index element={<Home />} />
          {/* Dynamic route for details */}
          <Route path=":slug" element={<Detail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
