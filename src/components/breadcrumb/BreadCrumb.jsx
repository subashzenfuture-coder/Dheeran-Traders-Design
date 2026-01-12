import { Link, useLocation } from "react-router-dom";
import "./breadcrumb.css";

const breadcrumbNameMap = {
  "/dashboard": "Dashboard",
  "/products": "Products",
  "/products/brand": "Brand",
  "/products/category": "Category",
  "/products/quantity": "Quantity",
  "/billing": "Billing",
  "/billing/customers": "Customers",
  "/billing/vendors": "Vendors",
  "/report": "Report",
  "/report/daily": "Daily",
  "/report/monthly": "Monthly",
  "/report/yearly": "Yearly",
};

const nonClickablePaths = ["/billing", "/products", "/accounts", "/report", "/chit"];

export const Breadcrumb = () => {
  const location = useLocation();
  const paths = location.pathname.split("/").filter(Boolean);

  return (
    <div className="breadcrumb-list mb-3">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          {/* HOME */}
          <li className="breadcrumb-item">
            <Link to="/dashboard">Dashboard</Link>
          </li>

          {paths.map((_, index) => {
            const url = `/${paths.slice(0, index + 1).join("/")}`;
            const isLast = index === paths.length - 1;
            const label = breadcrumbNameMap[url] || paths[index];
            const isMainMenu = nonClickablePaths.includes(url);

            return (
              <li key={url} className={`breadcrumb-item ${isLast ? "active" : ""}`} aria-current={isLast ? "page" : undefined}>
                {/* ❌ NOT CLICKABLE */}
                {isLast || isMainMenu ? <span>{label}</span> : <Link to={url}>{label}</Link>}
              </li>
            );
          })}
        </ol>
      </nav>
    </div>
  );
};
