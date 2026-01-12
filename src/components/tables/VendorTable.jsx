import { Link } from "react-router-dom";
import { VendorData } from "../data/VendorData";

export const VendorTable = () => {
  return (
    <>
      <div className="common-table-wrapper mt-4">
        <table className="common-table table-striped">
          <thead>
            <tr>
              <th>Vendor ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Advance Amount</th>
              <th>Pending Amount</th>
              <th>Buy Stock</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {VendorData.map((vendor, index) => (
              <tr key={index}>
                <td className="time-cell">{vendor.vendor_code}</td>
                <td className="time-cell">{vendor.name}</td>
                <td className="time-cell">{vendor.email}</td>
                <td className="time-cell">{vendor.phone_number}</td>
                <td className="hours-cell">{vendor.advance_amount}</td>
                <td className="hours-cell">{vendor.pending_amount}</td>
                <td className="hours-cell">{vendor.stock}</td>
                <td className="action-buttons d-flex justify-content-end">
                  <Link to="" className="btn btn-sm btn-dark me-2">
                    <i class="bi bi-box-arrow-up-right"></i>
                  </Link>
                  <button className="btn btn-sm btn-warning me-2">
                    <i className="bi bi-pencil"></i>
                  </button>

                  <button className="btn btn-sm btn-danger">
                    <i className="bi bi-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
