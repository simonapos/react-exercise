export const Navbar = () => {
  return (
    <div className="navigation d-flex justify-content-center">
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a className="nav-link disabled">Analytics</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Overview
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            Schedule
          </a>
        </li>
      </ul>
    </div>
  );
};
