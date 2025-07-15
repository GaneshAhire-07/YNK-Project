import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <AppRoutes />
      </div>
    </Router>
  );
}
