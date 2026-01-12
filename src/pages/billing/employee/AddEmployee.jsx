import React from "react";

export const AddEmployee = () => {
  return (
    <>
      <div className="row gy-4 align-items-center justify-content-center">
        <div className="col-lg-12">
          <div className="form_element">
            <div className="form_title">
              <h5 className="title">Add Employee</h5>
            </div>
            <div className="form_content">
              <form action="" className="row gy-3 align-items-center justify-content-between">
                <div className="col-md-4">
                  <label htmlFor="" className="form-label">
                    Employee ID
                  </label>
                  <input type="text" className="form-control" name="" id="" placeholder="Employee ID" />
                </div>
                <div className="col-md-4">
                  <label htmlFor="" className="form-label">
                    Employee Name
                  </label>
                  <input type="text" className="form-control" name="" id="" placeholder="Employee Name" />
                </div>
                <div className="col-md-4">
                  <label htmlFor="" className="form-label">
                    Email
                  </label>
                  <input type="text" className="form-control" name="" id="" placeholder="Email" />
                </div>
                <div className="col-md-4">
                  <label htmlFor="" className="form-label">
                    Phone
                  </label>
                  <input type="number" className="form-control" name="" id="" placeholder="Phone" />
                </div>
                <div className="col-md-4">
                  <label htmlFor="" className="form-label">
                    Date Of Birth
                  </label>
                  <input type="date" className="form-control" name="" id="" placeholder="" />
                </div>
                <div className="col-md-4">
                  <label htmlFor="" className="form-label d-block">
                    Gender
                  </label>
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                    <label class="form-check-label" for="inlineRadio1">
                      Male
                    </label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                    <label class="form-check-label" for="inlineRadio2">
                      Female
                    </label>
                  </div>
                </div>
                <div className="col-md-4">
                  <label htmlFor="" className="form-label">
                    Address
                  </label>
                  <input type="text" className="form-control" name="" id="" placeholder="Address" />
                </div>

                <div className="col-md-4">
                  <label htmlFor="" className="form-label">
                    Aadhaar Number
                  </label>
                  <input type="text" className="form-control" name="" id="" placeholder="Aadhaar Number" />
                </div>

                <div className="col-md-4">
                  <label htmlFor="" className="form-label">
                    Account Number
                  </label>
                  <input type="text" className="form-control" name="" id="" placeholder=" Account Number" />
                </div>
                <div className="col-md-4">
                  <label htmlFor="" className="form-label">
                    Pan Number
                  </label>
                  <input type="text" className="form-control" name="" id="" placeholder=" Pan Number" />
                </div>

                <div className="col-md-4 align-self-end text-end">
                  <button type="submit" className="btn main-btn">
                    Add Employee
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
