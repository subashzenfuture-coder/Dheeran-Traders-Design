
import { Link, Outlet } from "react-router-dom";
import { EmployeeData } from "../data/EmployeeData";

export const EmployeeTable = () => {
  return (
    <>
      <div className="common-table-wrapper mt-4">
        <table className="common-table table-striped">
          <thead>
            <tr>
              <th>Employee ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Date Of Birth</th>
              <th>Gender</th>
              {/* <th>Address</th> */}
              <th>Aadhaar Number</th>
              <th>Account Number</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {EmployeeData.map((emp, index) => (
              <tr key={index}>
                <td className="time-cell">{emp.emp_code}</td>
                <td className="time-cell">{emp.name}</td>
                <td className="time-cell">{emp.email}</td>
                <td className="time-cell">{emp.phone_number}</td>
                <td className="time-cell">{emp.date_of_birth}</td>
                <td className="hours-cell">{emp.gender}</td>
                {/* <td className="hours-cell">{emp.address}</td> */}
                <td className="hours-cell">{emp.aadhar_number}</td>
                <td className="hours-cell">{emp.account_number}</td>
                {/* <td className="hours-cell">{emp.pan_number}</td> */}
                <td className="action-buttons d-flex justify-content-end">
                  <Link to="employee-detail" className="btn btn-sm btn-dark me-2">
                    <i class="bi bi-box-arrow-up-right"></i>
                  </Link>
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
      <Outlet />
    </>
  );
};
