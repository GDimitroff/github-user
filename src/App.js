import { Dashboard, Error, Login } from './pages';
import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from './pages/ProtectedRoute';

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route path="login" element={<Login />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default App;
