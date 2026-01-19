import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Dashboard } from "./components/dashboard/Dashboard";
import { Topbar } from "./components/topbar/topbar";
import { Sidebar } from "./components/sidebar/Sidebar";
import { Login } from "./pages/Login";
import { Invoice } from "./components/invoice/Invoice";
import { AddBrand } from "./pages/billing/product/AddBrand";
import { ProductLayout } from "./pages/billing/product/ProductLayout";
import { AddCategorey } from "./pages/billing/product/AddCategorey";
import { AddProduct } from "./pages/billing/product/AddProduct";
import { AccountsLayout } from "./pages/billing/accounts/AccountsLayout";
import { ProductList } from "./pages/billing/product/ProductList";
import { AddQuantity } from "./pages/billing/product/AddQuantity";
import { Vendors } from "./pages/billing/vendors/Vendors";
import { Customers } from "./pages/billing/customers/Customers";
import { AddCustomers } from "./pages/billing/customers/AddCustomers";
import { AddVendors } from "./pages/billing/vendors/AddVendors";
import { CustomerList } from "./pages/billing/customers/CustomerList";
import { VendorList } from "./pages/billing/vendors/VendorList";
import { CustomerDetail } from "./pages/billing/customers/CustomerDetail";
import { Breadcrumb } from "./components/breadcrumb/BreadCrumb";
import { DailyReport } from "./pages/billing/reports/DailyReport";
import { WeeklyReport } from "./pages/billing/reports/WeeklyReport";
import { MonthlyReport } from "./pages/billing/reports/MonthlyReport";
import { ReportLayout } from "./pages/billing/reports/ReportLayout";
import { UserProfile } from "./pages/settings/UserProfile";
import { Notifications } from "./pages/Notifications";
import { Footer } from "./components/footer/Footer";
import { ChitDashboard } from "./components/dashboard/ChitDashboard";
import { EmployeeLayout } from "./pages/billing/employee/EmployeeLayout";
import { EmployeeList } from "./pages/billing/employee/EmployeeList";
import { AddEmployee } from "./pages/billing/employee/AddEmployee";
import { EmployeeDetail } from "./pages/billing/employee/EmployeeDetail";
import { PendingPaymentList } from "./pages/billing/accounts/PendingPaymentList";
import { StockMaintanence } from "./pages/billing/accounts/stocks/StockMaintanence";
import { AddStock } from "./pages/billing/accounts/stocks/AddStock";
import { StockList } from "./pages/billing/accounts/stocks/StockList";
import { Settings } from "./pages/settings/Settings";
import { BankDetails } from "./pages/settings/BankDetails";
import { AddBankDetails } from "./pages/settings/AddBankDetails";
import { BankDetailsList } from "./pages/settings/BankDetailsList";
import { ProductBilling } from "./pages/billing/product-billing/ProductBilling";

function App() {
  return (
    <BrowserRouter>
      {/* <Login /> */}
      <Sidebar />
      <div className="dashboard_main">
        <Topbar />
        <div className="dashboard_container">
          <Breadcrumb />
          <Routes>
            <Route path="/" element={<ProductBilling />} />
            <Route path="/billing-dashboard" element={<Dashboard />} />
            <Route path="/chit-dashboard" element={<ChitDashboard />} />

            <Route path="/products" element={<ProductLayout />}>
              <Route path="add-product" element={<AddProduct />} />
              <Route path="add-brand" element={<AddBrand />} />
              <Route path="add-categorey" element={<AddCategorey />} />
              <Route path="add-quantity" element={<AddQuantity />} />
              <Route path="product-list" element={<ProductList />} />
            </Route>

            <Route path="/accounts" element={<AccountsLayout />}>
              <Route path="pending-list" element={<PendingPaymentList />} />
              <Route path="stock-maintanence" element={<StockMaintanence />}>
                <Route index element={<StockList />} />
                <Route path="add-stock" element={<AddStock />} />
              </Route>
            </Route>

            <Route path="customers" element={<Customers />}>
              <Route index element={<CustomerList />} />
              <Route path="add-customers" element={<AddCustomers />} />
              <Route path="customers-detail" element={<CustomerDetail />} />
            </Route>

            <Route path="vendors" element={<Vendors />}>
              <Route index element={<VendorList />} />
              <Route path="add-vendors" element={<AddVendors />} />
            </Route>

            <Route path="/report" element={<ReportLayout />}>
              <Route path="daily" element={<DailyReport />} />
              <Route path="weekly" element={<WeeklyReport />} />
              <Route path="monthly" element={<MonthlyReport />} />
            </Route>

            <Route path="/employee" element={<EmployeeLayout />}>
              <Route index element={<EmployeeList />} />
              <Route path="employee-list" element={<EmployeeList />} />
              <Route path="add-employee" element={<AddEmployee />} />
              <Route path="employee-detail" element={<EmployeeDetail />} />
            </Route>

            <Route path="/settings" element={<Settings />}>
              <Route index element={<UserProfile />} />
              <Route path="edit-profile" element={<UserProfile />} />
              <Route path="bank-details" element={<BankDetails />}>
                <Route index element={<BankDetailsList />} />
                <Route path="add-bank" element={<AddBankDetails />} />
              </Route>
            </Route>

            <Route path="/notifications" element={<Notifications />} />
            <Route path="/invoice" element={<Invoice />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
