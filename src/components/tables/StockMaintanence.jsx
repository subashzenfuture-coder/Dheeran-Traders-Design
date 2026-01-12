import React from "react";

export const StockMaintanence = () => {
  return (
    <>
      <div className="common-table-wrapper ">
        <table className="common-table table-striped">
          <thead>
            <tr>
              <th>Vendor Name</th>
              <th>Vendor Number</th>
              <th>Product Name</th>
              <th>Product ID</th>
              <th>Brand & Categorey</th>
              <th>Quantity</th>
              <th>Total Stock</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="time-cell">Kuralsan</td>
              <td className="time-cell">9876543210</td>
              <td className="time-cell">Bullet Rice</td>
              <td className="time-cell">pd0001</td>

              <td className="time-cell">Bullet Half Boil</td>
              <td className="hours-cell">26 Kg</td>
              <td className="hours-cell">70 Bags</td>
              <td className="time-cell">
                <small className="stock-badge low-stock">Low Stock</small>
              </td>
            </tr>
            <tr>
              <td className="time-cell">Ganeshan</td>
              <td className="time-cell">9876543210</td>
              <td className="time-cell">Briyani Rice</td>
              <td className="time-cell">pd0002</td>

              <td className="time-cell">Bullet Half Boil</td>
              <td className="hours-cell">5 Kg</td>
              <td className="hours-cell">20 Bags</td>
              <td className="time-cell">
                <small className="stock-badge in-stock">In Stock</small>
              </td>
            </tr>
            <tr>
              <td className="time-cell">Subash</td>
              <td className="time-cell">9876543210</td>
              <td className="time-cell">Siragasamba Rice</td>
              <td className="time-cell">pd0003</td>

              <td className="time-cell">Bullet Full Boil</td>
              <td className="hours-cell">10 Kg</td>
              <td className="hours-cell">40 Bags</td>
              <td className="time-cell">
                <small className="stock-badge out-of-stock">Out Of Stock</small>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};
