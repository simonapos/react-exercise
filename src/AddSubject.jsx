import React, { useState } from "react";
import { DisplaySubject } from "./DisplaySubject";

export const AddSubject = () => {
  const [clicked, setClicked] = useState(false);

  if (clicked) {
    return <DisplaySubject />;
  }

  return (
    <div className="subject-item-wrapper py-5">
      <div className="container-fluid">
        <div className="subject">
          <div className="row">
            <div className="col-sm-4">
              <div className="subject-time h-100 d-flex py-3 justify-content-center justify-content-sm-start align-items-center ps-4 ">
                <h4 className="subject-hour mb-0">7:00 - 8:30</h4>
                <h6 className="subject-gap mb-0 fw-light">2h 45m gap</h6>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="subject-button d-flex justify-content-center align-items-center py-3 h-100">
                <button
                  className="text-decoration-none fw-bold text-center btn py-0"
                  onClick={() => setClicked(true)}
                >
                  <i className="ri-add-line me-2"></i>Add a subject here
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
