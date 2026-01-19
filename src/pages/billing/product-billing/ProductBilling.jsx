import React, { useState } from "react";
import "./product-billing.css";
import { Link } from "react-router-dom";

export const ProductBilling = () => {
  const [paymentMode, setPaymentMode] = useState("cash");

  return (
    <>
      <div className="product-billing">
        <div className="row gy-4">
          <div className="col-md-7">
            <div className="product-list-items">
              <div className="row gy-4">
                <div className="col-lg-12">
                  <div className="product-list-box">
                    <h5 className="box-title">
                      <i class="fi fi-tr-user-pen"></i>Customer Details
                    </h5>
                    <div className="row gy-4 ">
                      <div className="col-md-6">
                        <label htmlFor="" className="form-label">
                          Search Customer
                        </label>
                        <input type="text" className="form-control" name="" id="" placeholder="Search Customer" />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="" className="form-label">
                          Quick Actions
                        </label>
                        <button className="main-btn">
                          <i class="bi bi-person-plus"></i>Add New Customers
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="product-list-box">
                    <h5 className="box-title">
                      <i class="fi fi-tr-shopping-cart-add"></i>Add Products to bill
                    </h5>
                    <div className="row gy-4 ">
                      <div className="col-md-6">
                        <label htmlFor="" className="form-label">
                          Product Brand & Categorey
                        </label>
                        <select name="" id="" className="form-select">
                          <option value="">Select</option>
                          <option value="Bullet">Bullet</option>
                          <option value="Surya">Surya</option>
                          <option value="Ponni">Ponni</option>
                        </select>
                      </div>
                      <div className="col-md-6">
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
                      <div className="col-md-6">
                        <label htmlFor="" className="form-label">
                          Product Stock
                        </label>
                        <input type="text" className="form-control" name="" id="" placeholder="Search Customer" />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="" className="form-label">
                          Quick Actions
                        </label>
                        <button className="main-btn">
                          <i class="bi bi-plus"></i>Add to Bill
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="common-table-wrapper ">
                    <table className="common-table table-striped">
                      <thead>
                        <tr>
                          <th>Product <span className="d-none d-md-inline-block">Name</span></th>
                          <th>Brand <span className="d-none d-md-inline-block">Categorey</span></th>
                          <th>Quantity</th>
                          <th>Stock</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="time-cell">Bullet Rice</td>

                          <td className="time-cell">Bullet Half Boil</td>
                          <td className="hours-cell">26 Kg</td>
                          <td className="hours-cell">70 </td>
                          <td className="time-cell ">
                            <button class="btn btn-sm btn-danger">
                              <i class="bi bi-trash"></i>
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td className="time-cell">Briyani Rice</td>

                          <td className="time-cell">Bullet Half Boil</td>
                          <td className="hours-cell">5 Kg</td>
                          <td className="hours-cell">20</td>
                          <td className="time-cell ">
                            <button class="btn btn-sm btn-danger">
                              <i class="bi bi-trash"></i>
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td className="time-cell">Siragasamba Rice</td>

                          <td className="time-cell">Bullet Full Boil</td>
                          <td className="hours-cell">10 Kg</td>
                          <td className="hours-cell">40 </td>
                          <td className="time-cell ">
                            <button class="btn btn-sm btn-danger">
                              <i class="bi bi-trash"></i>
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <div className="product-list-box invoice-box">
              {/* Header */}
              <div className="row invoice-header">
                <div className="col-6">
                  <div className="title">INVOICE</div>
                  <div className="invoice-no">#INV-2023-0042</div>
                </div>
                <div className="col-6 right">
                  <div className="date">Date</div>
                  <div className="due">24 Oct 2023</div>
                </div>
              </div>

              {/* Bill Info */}
              <div className="row bill-info">
                <div className="col-6">
                  <div className="label">Bill From</div>
                  <div className="name">BillMaster Pro Solutions</div>
                  <div className="text">123 Tech Park, Suite 404</div>
                  <div className="text">San Francisco, CA 94107</div>
                </div>

                <div className="col-6 right">
                  <div className="label">Bill To</div>
                  <div className="name">Acme Corp</div>
                  <div className="text">456 Corporate Way</div>
                  <div className="text">Mountain View, CA 94043</div>
                </div>
              </div>

              {/* Product Details */}
              <div className="products">
                <div className="label">Product Details</div>

                <div className="row product-head">
                  <div className="col-5">Product</div>
                  <div className="col-2 center">Qty</div>
                  <div className="col-2 right">Rate</div>
                  <div className="col-3 right">Total</div>
                </div>

                <div className="row product-row">
                  <div className="col-5">Bhasmathi Rice 26 Kg</div>
                  <div className="col-2 center">1</div>
                  <div className="col-2 right">1,999</div>
                  <div className="col-3 right">1,999</div>
                </div>

                <div className="row product-row">
                  <div className="col-5">Briyani Rice 5 Kg</div>
                  <div className="col-2 center">2</div>
                  <div className="col-2 right">45</div>
                  <div className="col-3 right">90</div>
                </div>
              </div>

              {/* Amounts */}
              <div className="amounts">
                <div className="row">
                  <div className="col-6">
                    <p className="amount-text">Subtotal</p>
                  </div>
                  <div className="col-6 right">
                    <p className="amount-text">$2,089.00</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6">
                    <p className="amount-text">Tax (GST 18%)</p>
                  </div>
                  <div className="col-6 right">
                    <p className="amount-text">$376.02</p>
                  </div>
                </div>

                <div className="row grand">
                  <div className="col-6">
                    <p className="amount-text">Grand Total</p>
                  </div>
                  <div className="col-6 right">
                    <p className="amount-text">$2,465.02</p>
                  </div>
                </div>
              </div>

              {/* Payment Values */}
              <div className="row payment-values">
                <div className="col-6">
                  <div className="label">Advance Paid</div>
                  <input value="$0.00" type="text" />
                </div>
                <div className="col-6">
                  <div className="label">Balance Due</div>
                  <input value="$2,465.02" className="danger" readOnly />
                </div>
              </div>

              {/* Payment Mode (Radio Card Style) */}
              <div className="payment-mode">
                <div className="label mb-2">Payment Mode</div>

                <div className="row">
                  <div className="col-4">
                    <label className={`radio-card ${paymentMode === "cash" ? "active" : ""}`}>
                      <input type="radio" name="payment" value="cash" checked={paymentMode === "cash"} onChange={() => setPaymentMode("cash")} />
                      <div className="icon">
                        <i class="bi bi-cash-coin"></i>
                      </div>
                      <span>CASH</span>
                    </label>
                  </div>

                  <div className="col-4">
                    <label className={`radio-card ${paymentMode === "upi" ? "active" : ""}`}>
                      <input type="radio" name="payment" value="upi" checked={paymentMode === "upi"} onChange={() => setPaymentMode("upi")} />
                      <div className="icon">
                        <i class="bi bi-qr-code-scan"></i>
                      </div>
                      <span>UPI / QR</span>
                    </label>
                  </div>

                  <div className="col-4">
                    <label className={`radio-card ${paymentMode === "card" ? "active" : ""}`}>
                      <input type="radio" name="payment" value="card" checked={paymentMode === "card"} onChange={() => setPaymentMode("card")} />
                      <div className="icon">
                        <i class="bi bi-credit-card-fill"></i>
                      </div>
                      <span>CARD</span>
                    </label>
                  </div>
                </div>
              </div>

              {/* Action */}
              <button className="main-btn w-100 text-center d-block">
                <i class="fi fi-tr-print me-2"></i>Save & Print
              </button>

              <div className="invoice-footer">
                <Link><i class="bi bi-save me-2"></i>Save Draft</Link>
                <Link><i class="bi bi-x-circle-fill me-2"></i>Discard</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
