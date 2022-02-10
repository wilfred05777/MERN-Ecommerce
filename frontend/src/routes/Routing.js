import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminLogin from "../screens/auth/AdminLogin";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="auth">
          <Route path="admin-login" element={<AdminLogin />} />
        </Route>
        {/* <Route path="admin-login" element={<AdminLogin />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
