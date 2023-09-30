export const Heading = () => {
  return (
    <div className="d-flex flex-column flex-sm-row justify-content-between px-4 mb-4">
      <div className="heading mb-4 mb-sm-0">
        <h6 className="heading-title">Program title</h6>
        <div className="d-flex align-items-center">
          <h2 className="heading-name fw-normal me-3">NYC Conference</h2>
          <button className="btn btn-edit">
            <i className="ri-pencil-fill"></i>
          </button>
        </div>
      </div>
      <div className="status">
        <h6 className="text-uppercase text-sm-end">Status</h6>
        <div className="dropdown">
          <button
            className="btn dropdown-toggle pe-0"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Upcoming
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <a className="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Another action
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
