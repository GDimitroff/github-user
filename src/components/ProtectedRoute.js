import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

import loadingImage from '../images/preloader.gif';

const ProtectedRoute = ({ children, redirectTo = '/login' }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <img src={loadingImage} alt="Loading" className="loading" />;
  }

  if (!user) {
    return <Navigate to={redirectTo} replace={true} />;
  }

  return children ? children : <Outlet />;
};

export default ProtectedRoute;
