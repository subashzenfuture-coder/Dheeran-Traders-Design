import React from "react";
import qr from "../../assets/images/qr.png";
import { Link } from "react-router-dom";

export const BankDetailsList = () => {
  return (
    <>
      <div className="row gy-4">
        <div className="col-lg-10">
          <div className="add-btn text-end">
            <Link to="add-bank" className="btn main-btn">
              Add Bank Details +
            </Link>
          </div>
        </div>
        <div className="col-lg-10">
          <div className="bank-details-card ">
            <div className="row gy-4">
              {/* LEFT : QR CODE */}
              <div className="col-md-4 col-lg-3">
                <div className="bank-qr">
                  <img
                    src={qr} // replace with your QR image
                    alt="Bank QR Code"
                  />
                </div>
              </div>

              {/* RIGHT : BANK INFO */}
              <div className="col-md-8 col-lg-9">
                <div className="bank-info">
                  <div className="info-row">
                    <span>Account Number</span>
                    <strong>1234 5678 9012</strong>
                  </div>

                  <div className="info-row">
                    <span>Bank Name</span>
                    <strong>State Bank of India</strong>
                  </div>

                  <div className="info-row">
                    <span>Branch</span>
                    <strong>Chennai Main Branch</strong>
                  </div>

                  <div className="info-row">
                    <span>IFSC Code</span>
                    <strong>SBIN0000456</strong>
                  </div>

                  <div className="info-row">
                    <span>Location</span>
                    <strong>Chennai, Tamil Nadu</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-10">
          <div className="bank-details-card ">
            <div className="row gy-4">
              {/* LEFT : QR CODE */}
              <div className="col-md-4 col-lg-3">
                <div className="bank-qr">
                  <img
                    src={qr} // replace with your QR image
                    alt="Bank QR Code"
                  />
                </div>
              </div>

              {/* RIGHT : BANK INFO */}
              <div className="col-md-8 col-lg-9">
                <div className="bank-info">
                  <div className="info-row">
                    <span>Account Number</span>
                    <strong>1234 5678 9012</strong>
                  </div>

                  <div className="info-row">
                    <span>Bank Name</span>
                    <strong>State Bank of India</strong>
                  </div>

                  <div className="info-row">
                    <span>Branch</span>
                    <strong>Chennai Main Branch</strong>
                  </div>

                  <div className="info-row">
                    <span>IFSC Code</span>
                    <strong>SBIN0000456</strong>
                  </div>

                  <div className="info-row">
                    <span>Location</span>
                    <strong>Chennai, Tamil Nadu</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-10">
          <div className="bank-details-card ">
            <div className="row gy-4">
              {/* LEFT : QR CODE */}
              <div className="col-md-4 col-lg-3">
                <div className="bank-qr">
                  <img
                    src={qr} // replace with your QR image
                    alt="Bank QR Code"
                  />
                </div>
              </div>

              {/* RIGHT : BANK INFO */}
              <div className="col-md-8 col-lg-9">
                <div className="bank-info">
                  <div className="info-row">
                    <span>Account Number</span>
                    <strong>1234 5678 9012</strong>
                  </div>

                  <div className="info-row">
                    <span>Bank Name</span>
                    <strong>State Bank of India</strong>
                  </div>

                  <div className="info-row">
                    <span>Branch</span>
                    <strong>Chennai Main Branch</strong>
                  </div>

                  <div className="info-row">
                    <span>IFSC Code</span>
                    <strong>SBIN0000456</strong>
                  </div>

                  <div className="info-row">
                    <span>Location</span>
                    <strong>Chennai, Tamil Nadu</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-10">
          <div className="bank-details-card ">
            <div className="row gy-4">
              {/* LEFT : QR CODE */}
              <div className="col-md-4 col-lg-3">
                <div className="bank-qr">
                  <img
                    src={qr} // replace with your QR image
                    alt="Bank QR Code"
                  />
                </div>
              </div>

              {/* RIGHT : BANK INFO */}
              <div className="col-md-8 col-lg-9">
                <div className="bank-info">
                  <div className="info-row">
                    <span>Account Number</span>
                    <strong>1234 5678 9012</strong>
                  </div>

                  <div className="info-row">
                    <span>Bank Name</span>
                    <strong>State Bank of India</strong>
                  </div>

                  <div className="info-row">
                    <span>Branch</span>
                    <strong>Chennai Main Branch</strong>
                  </div>

                  <div className="info-row">
                    <span>IFSC Code</span>
                    <strong>SBIN0000456</strong>
                  </div>

                  <div className="info-row">
                    <span>Location</span>
                    <strong>Chennai, Tamil Nadu</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
