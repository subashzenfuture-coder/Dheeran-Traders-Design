import qrImg from "../../assets/images/qr.png";

export const AddBankDetails = () => {
  return (
    <div className="row gy-4 align-items-center justify-content-center">
      <div className="col-lg-12">
        <div className="form_element">
          <div className="form_title">
            <h5 className="title">Add Bank Details</h5>
          </div>
          <div className="form_content">
            <form action="" className="row gy-3 align-items-center ">
              <div className="col-md-4">
                <label htmlFor="" className="form-label">
                  Upload a Qr Code
                </label>

                <input type="file" className="form-control" />
              </div>
              <div className="col-md-4">
                <label htmlFor="" className="form-label">
                  Bank Name
                </label>
                <input type="text" className="form-control" name="" id="" placeholder="Bank Name" />
              </div>
              <div className="col-md-4">
                <label htmlFor="" className="form-label">
                  Account Number
                </label>
                <input type="text" className="form-control" name="" id="" placeholder="Account Number" />
              </div>
              <div className="col-md-4">
                <label htmlFor="" className="form-label">
                  Branch
                </label>
                <input type="text" className="form-control" name="" id="" placeholder="Branch" />
              </div>
              <div className="col-md-4">
                <label htmlFor="" className="form-label">
                  IFSC Code
                </label>
                <input type="text" className="form-control" name="" id="" placeholder="IFSC Code" />
              </div>
              <div className="col-md-4">
                <label htmlFor="" className="form-label">
                  Location
                </label>
                <input type="text" className="form-control" name="" id="" placeholder="Location" />
              </div>
              <div className="col-md-12 align-self-end text-end">
                <button type="submit" className="btn main-btn">
                  Add Bank
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
