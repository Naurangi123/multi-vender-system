import { Navigate } from 'react-router-dom';
import { useCurrentUser } from '../hooks/useUser';


const ProtectedRoute = ({ children, allowedRoles }) => {
  const { user } = useCurrentUser();

  if (!user) return <Navigate to="/login" replace />;
  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
};

export default ProtectedRoute;
