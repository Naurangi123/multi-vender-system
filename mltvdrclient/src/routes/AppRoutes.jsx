import { Routes, Route } from 'react-router-dom';
import Login from '../pages/auth/Login';
import Dashboard from '../pages/dashboard/Overview';
import ProtectedRoute from './ProtectedRoute';
import EmployeeList from '../pages/employees/EmployeeList';
import EmployeeDetail from '../pages/employees/EmployeeDetail';
import AddEmployee from '../pages/employees/AddEmployee';
import EditEmployee from '../pages/employees/EditEmployee';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route
                path="/"
                element={
                    <ProtectedRoute allowedRoles={['admin', 'vendor']}>
                        <Dashboard />
                    </ProtectedRoute>
                }
            />

            <Route path="/employees" element={<EmployeeList />} />
            <Route path="/employees/add" element={<AddEmployee />} />
            <Route path="/employees/:id" element={<EmployeeDetail />} />
            <Route path="/employees/edit/:id" element={<EditEmployee />} />

            <Route path="/unauthorized" element={<h2>Access Denied</h2>} />
        </Routes>
    );
};

export default AppRoutes;
