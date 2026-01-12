import React from "react";

export const AddStock = () => {
  return (
    <>
      <div className="row gy-4 align-items-center justify-content-center">
        <div className="col-lg-12">
          <div className="form_element">
            <div className="form_title">
              <h5 className="title">Add Stock</h5>
            </div>
            <div className="form_content">
              <form action="" className="row gy-3 align-items-center ">
                <div className="col-md-4">
                  <label htmlFor="" className="form-label">
                    Vendor Name
                  </label>
                  <select name="" id="" className="form-select">
                    <option value="">Select</option>
                    <option value="Bullet">Kuralarsan</option>
                    <option value="Surya">Ganeshan</option>
                    <option value="Ponni">Subash</option>
                  </select>
                </div>
                <div className="col-md-4">
                  <label htmlFor="" className="form-label">
                    Vendor Phone Number
                  </label>
                  <input type="text" className="form-control" name="" id="" placeholder="9876543210" readOnly />
                </div>
                <div className="col-md-4">
                  <label htmlFor="" className="form-label">
                    Product Name
                  </label>
                  <select name="" id="" className="form-select">
                    <option value="">Select</option>
                    <option value="Bullet">Bullet Rice</option>
                    <option value="Surya">Surya Rice</option>
                    <option value="Ponni">Ponni Rice</option>
                  </select>
                </div>
                <div className="col-md-4">
                  <label htmlFor="" className="form-label">
                    Product ID
                  </label>
                  <input type="text" className="form-control" name="" id="" placeholder="Product Id" readOnly />
                </div>

                <div className="col-md-4">
                  <label htmlFor="" className="form-label">
                    Product Brand & Catergorey
                  </label>
                  <select name="" id="" className="form-select">
                    <option value="">Select</option>
                    <option value="Bullet">Bullet</option>
                    <option value="Surya">Surya</option>
                    <option value="Ponni">Ponni</option>
                  </select>
                </div>
                <div className="col-md-4">
                  <label htmlFor="" className="form-label">
                    Product Quantity
                  </label>
                  <select name="" id="" className="form-select">
                    <option value="">Select</option>
                    <option value="Bullet">5 kg</option>
                    <option value="Surya">10 Kg</option>
                    <option value="Ponni">26 Kg</option>
                  </select>
                </div>
                <div className="col-md-4">
                  <label htmlFor="" className="form-label">
                    Total Stock
                  </label>
                  <input type="text" className="form-control" name="" id="" placeholder="Purchase Stock" />
                </div>
                <div className="col-md-12 align-self-end text-end">
                  <button type="submit" className="btn main-btn">
                    Add Stock
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
