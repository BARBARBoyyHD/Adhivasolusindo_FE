import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./App.css";
import LearningManagementSystem from "./pages/LearningManagementSystem";
import LoginPages from "./pages/LoginPages";
import LoginPemtariPages from "./pages/LoginPemateriPages";
import AllStudentPages from "./pages/AllStudentPages";
import RegisterPemateriPages from "./pages/RegisterPemateriPages";
import RegisterStudentPages from "./pages/RegisterStudentPages";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPages />}></Route>
          <Route
            path="/learning-management-system"
            element={<LearningManagementSystem />}
          ></Route>
          <Route path="/login" element={<LoginPages />}></Route>
          <Route path="/login-pemateri" element={<LoginPemtariPages />}></Route>
          <Route path="/all-student" element={<AllStudentPages />}></Route>
          <Route path="/register-pemateri" element={<RegisterPemateriPages />}></Route>
          <Route path="/register-student" element={<RegisterStudentPages />}></Route>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
