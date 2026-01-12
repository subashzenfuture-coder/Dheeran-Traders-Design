import React from "react";
import { CustomerData } from "../data/CustomerData";
import { Link, Outlet } from "react-router-dom";

export const CustomerTable = () => {
  return (
    <>
      <div className="common-table-wrapper mt-4">
        <table className="common-table table-striped">
          <thead>
            <tr>
              <th>Customer ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Advance Amount</th>
              <th>Pending Amount</th>
              <th>Buy Stock</th>
              <th>Total</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {CustomerData.map((customer, index) => (
              <tr key={index}>
                <td className="time-cell">{customer.customer_code}</td>
                <td className="time-cell">{customer.name}</td>
                <td className="time-cell">{customer.email}</td>
                <td className="time-cell">{customer.phone_number}</td>
                <td className="hours-cell">{customer.advance_amount}</td>
                <td className="hours-cell">{customer.pending_amount}</td>
                <td className="hours-cell">{customer.stock}</td>
                <td className="hours-cell">{customer.total}</td>
                <td className="action-buttons d-flex justify-content-end">
                  <Link to="customers-detail" className="btn btn-sm btn-dark me-2">
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
      <Outlet />
    </>
  );
};
