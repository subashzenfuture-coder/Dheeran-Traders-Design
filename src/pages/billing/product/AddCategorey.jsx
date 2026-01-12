import React from "react";

export const AddCategorey = () => {
  return (
    <>
      <div className="row gy-4">
        <div className="col-lg-10">
          <div className="form_element">
            <div className="form_title">
              <h5 className="title">Add Categorey</h5>
            </div>
            <div className="form_content">
              <form action="" className="row gy-3">
                <div className="col-md-4">
                  <select name="" id="" className="form-select">
                    <option value="">Select</option>
                    <option value="Bullet">Bullet</option>
                    <option value="Surya">Surya</option>
                    <option value="Ponni">Ponni</option>
                  </select>
                </div>
                <div className="col-md-4">
                  <input type="text" placeholder="Categorey Name" className="form-control" />
                </div>
                <div className="col-md-3">
                  <button type="submit" className="btn main-btn">
                    Add categorey
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="col-lg-10">
          <div className="common-table-wrapper ">
            <table className="common-table table-striped">
              <thead>
                <tr>
                  <th>Brand Name</th>
                  <th>Categorey</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="time-cell">Bullet</td>
                  <td>Half Boil</td>
                  <td className="action-buttons d-flex justify-content-end">
                    <button className="btn btn-sm btn-warning me-2">
                      <i className="bi bi-pencil"></i>
                    </button>

                    <button className="btn btn-sm btn-danger">
                      <i className="bi bi-trash"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="time-cell">Surya</td>
                   <td>Half Boil</td>
                  <td className="action-buttons d-flex justify-content-end">
                    <button className="btn btn-sm btn-warning me-2">
                      <i className="bi bi-pencil"></i>
                    </button>

                    <button className="btn btn-sm btn-danger">
                      <i className="bi bi-trash"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="time-cell">Ponni</td>
                   <td>Full Boil</td>
                  <td className="action-buttons d-flex justify-content-end">
                    <button className="btn btn-sm btn-warning me-2">
                      <i className="bi bi-pencil"></i>
                    </button>

                    <button className="btn btn-sm btn-danger">
                      <i className="bi bi-trash"></i>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
