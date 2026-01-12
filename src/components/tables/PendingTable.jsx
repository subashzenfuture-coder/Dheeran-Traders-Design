import React from "react";

export const PendingTable = () => {
  return (
    <div className="common-table-wrapper ">
      <table className="common-table table-striped">
        <thead>
          <tr>
            <th>Customer Name</th>
            <th>Mobile Number</th>
            <th>Product</th>
            <th>Quantity</th>
            <th>Total Amount</th>
            <th>Payable Amount</th>
            <th>Pending Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="time-cell">Kuralarasan</td>
            <td className="time-cell">9876543210</td>
            <td className="time-cell">Bullet Rice 26 Kg</td>
            <td className="time-cell">10 Bags</td>
            <td className="hours-cell">20000</td>
            <td className="hours-cell">13000</td>
            <td className="hours-cell">7000</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
