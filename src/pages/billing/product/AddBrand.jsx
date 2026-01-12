

export const AddBrand = () => {
  return (
    <>
      <div className="row gy-4">
        <div className="col-lg-8">
          <div className="form_element">
            <div className="form_title">
              <h5 className="title">Add Brand</h5>
            </div>
            <div className="form_content">
              <form action="" className="row gy-3">
                <div className="col-md-9">
                  <input type="text" placeholder="Brand Name" className="form-control" />
                </div>
                <div className="col-md-3">
                  <button type="submit" className="btn main-btn">
                    Add Brand
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="col-lg-8">
          <div className="common-table-wrapper ">
            <table className="common-table table-striped">
              <thead>
                <tr>
                  <th>Brand Name</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="time-cell">Bullet</td>
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
