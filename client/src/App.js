import { Route, Routes, Navigate, Outlet } from "react-router-dom";
import Main from "./components/Main";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Merchants from "./components/merchant/Merchants";
import AddMerchant from "./components/merchant/AddMerchant";
import User from "./components/user/User";
import AddUser from "./components/user/AddUser";

function ProtectedRoutes() {
  const user = localStorage.getItem("token");

  return user ? <Outlet /> : <Navigate to="/login" replace />;
}

function App() {
  return (
    <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="/" element={<Main />}>
          <Route path="/" element={<User />}>
            <Route path="add-user" element={<AddUser />} />
          </Route>
          <Route path="merchants" element={<Merchants />}>
            <Route path="add-merchant" element={<AddMerchant />} />
          </Route>

          <Route path="users" element={<User />}>
            <Route path="add-user" element={<AddUser />} />
          </Route>
        </Route>
      </Route>
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}
export default App;
