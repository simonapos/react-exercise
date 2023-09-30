import React, { useState, useRef, useEffect } from "react";

export const DisplaySubject = () => {
  const [requiredAttendance, setRequiredAttendance] = useState(false);

  return (
    <div className="container-fluid">
      <div className="subject-item py-4">
        <h4 className="mb-4">
          <i className="ri-circle-fill me-2"></i>8:30 - 10:15
        </h4>
        <div className="row ps-md-4">
          <div className="col-md-4">
            <div className="subject-item-image mb-4">
              <img
                src="https://images.unsplash.com/photo-1437603568260-1950d3ca6eab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt=""
              />
              <button className="btn btn-main">
                <i className="ri-loop-left-line me-2"></i> Change subject image
              </button>
            </div>
            <div className="subject-item-attendance mb-4 mb-md-0">
              <div className="d-flex align-items-center p-4">
                <label className="switch me-2">
                  <input
                    type="checkbox"
                    value={requiredAttendance}
                    onChange={() => setRequiredAttendance(!requiredAttendance)}
                  />
                  <span className="slider round"></span>
                </label>
                <h6 className="mb-0">Required attendance</h6>
              </div>
              {requiredAttendance && (
                <div className="d-flex justify-content-center p-4 border-top attendance-btn">
                  <a href="" className="text-decoration-none text-center">
                    Attendance tracking QR code{" "}
                    <i className="ri-external-link-line"></i>
                  </a>
                </div>
              )}
            </div>
          </div>
          <div className="col-md-8">
            <h6 className="ms-4">Subject title</h6>
            <div className="d-flex align-items-center justify-content-between mb-4">
              <div className="d-flex align-items-center">
                <div className="shape me-2"></div>
                  <h3 className="mb-0">Some subject title</h3>
                
                  <button
                    className="btn btn-edit ms-2"
                  >
                    <i className="ri-pencil-fill"></i>
                  </button>
              </div>
              <button className="btn btn-dots">...</button>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <div className="form-group mb-3 time-input">
                  <i className="ri-circle-fill me-2 circle me-3"></i>
                  <label for="exampleText">Subject start time</label>
                  <input
                    type="text"
                    value="12:00"
                    className="form-control"
                    id="exampleText"
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group mb-3 time-input">
                  <i className="ri-circle-fill me-2 circle me-3"></i>
                  <label for="exampleText">Subject end time</label>
                  <input
                    type="text"
                    value="14:00"
                    className="form-control"
                    id="exampleText"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="form-group mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">
                  Subject description
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
            </div>
            <h6>Speaker(s)</h6>
            <div className="row">
              <div className="col-sm-6">
                <div className="speaker d-flex justify-content-between align-items-center border rounded py-1 px-2 mb-3 mb-sm-0">
                  <div className="d-flex align-items-center">
                    <div className="speaker-image me-2">
                      <img
                        src="https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                        alt=""
                      />
                    </div>
                    <h6 className="mb-0">Anna Smith</h6>
                  </div>
                  <div className="d-flex align-items-center">
                    <i className="ri-circle-fill me-2 circle me-3"></i>
                    <button className="btn btn-edit">
                      <i className="ri-edit-box-line"></i>
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <a
                  href=""
                  className="speaker-btn fw-bold text-decoration-none rounded border h-100 w-100 d-flex align-items-center ps-4 py-3"
                >
                  <i className="ri-add-line"></i> Add speaker
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
