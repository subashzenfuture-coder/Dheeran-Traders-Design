import { ProductData } from "../data/ProductData";

export const ProductTable = () => {
  return (
    <>
      <div className="common-table-wrapper ">
        <table className="common-table table-striped">
          <thead>
            <tr>
              <th>Product ID</th>
              <th>Product Name</th>
              <th>Brand</th>
              <th>Categorey</th>
              <th>Quantity</th>
              <th>Price</th>
              <th className="text-end">Actions</th>
            </tr>
          </thead>
          <tbody>
            {ProductData.map((product, index) => (
              <tr key={index}>
                <td className="time-cell">{product.serial_number}</td>
                <td className="time-cell">{product.product_name}</td>
                <td className="time-cell">{product.product_brand}</td>
                <td className="time-cell">{product.product_categorey}</td>
                <td className="hours-cell">{product.product_quantity}</td>
                <td className="hours-cell">{product.price}</td>
                <td className="action-buttons d-flex justify-content-end">
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
