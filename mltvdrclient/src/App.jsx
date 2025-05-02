import { Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Employees from './pages/Employee';
import Departments from './pages/Departments';
import Settings from './pages/Settings';
import ProductListing from './components/ProductList';
import VendorProfile from './components/VendorProfile';
import Analytics from './pages/Analytics';
import ProfileUpdate from './pages/Profileupdate';
import CreateProduct from './components/AddProduct';
import UpdateProduct from './components/UpdateProduct';
import ProductAnalytics from './components/ProductRanking';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <>
      <div className="flex min-h-screen">
        <Sidebar />
        <div className="flex-1 p-6 bg-gray-100">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/departments" element={<Departments />} />
            <Route path="/products" element={<ProductListing />} />
            <Route path="/profile" element={<VendorProfile />} />
            {/* <Route path="/departments/finance" element={<Finance/>} /> */}

            <Route path="/employees" element={<Employees />} />
            <Route path="/employees/new" element={<Employees />} />

            <Route path="/products/create" element={<CreateProduct />} />
            <Route path="/products/edit/:id" element={<UpdateProduct />} />

            <Route path="/analytic" element={<ProductAnalytics />} />
            <Route path="/analytics" element={<Analytics />} />

            <Route path="/settings" element={<Settings />} />
            <Route path="/settings/updateprofile" element={<ProfileUpdate />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default App;
