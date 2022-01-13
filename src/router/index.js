import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "components/Home";
import Dashboard from "components/Dashboard";
import { TaskProvider } from "context/Task";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/dashboard"
          element={
            <TaskProvider>
              <Dashboard />
            </TaskProvider>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
