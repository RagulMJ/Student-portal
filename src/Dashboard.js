import React from 'react'
import { Link } from 'react-router-dom'

function Dashboard() {

  let card = [
    {
      name: "Earnings (Monthly)",
      price: "$40,000",
      progressBar : false,
      borderColor1: true,
      font1: true,
      icon1: true
    },
    {
      name: "Earnings (Annual)",
      price: "$215,000",
      progressBar : false,
      borderColor2: true,
      font2: true,
      icon2: true
    },
    {
      name: "Tasks",
      price: "50%",
      progressBar: true,
      borderColor3: true,
      font3: true,
      icon3: true
    },
    {
      name: "Pending Requests",
      price: "18",
      progressBar : false,
      borderColor4: true,
      font4: true,
      icon4: true
    }
  ]

  return (
    <>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
        {/* to link dashboard */}
        <Link to={'./Dashboard'} className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
          className="fas fa-download fa-sm text-white-50"></i> Generate Report</Link>
      </div>
      <div className="row">
        {/* maping dashboard details */}
        {card.map((e) => {
          return (
            <div className="col-xl-3 col-md-6 mb-4">
              {/* styling card border */}
              <div className={
                e.borderColor1
                  ? "card border-left-primary shadow h-100 py-2"
                  : e.borderColor2
                    ? "card border-left-success shadow h-100 py-2"
                    : e.borderColor3
                      ? "card border-left-info shadow h-100 py-2"
                      : e.borderColor4
                        ? "card border-left-warning shadow h-100 py-2"
                        : ""
              }>
                <div className="card-body">
                  <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                      {/* styling font */}
                      <div className={
                        e.font1
                          ? "text-xs font-weight-bold text-primary text-uppercase mb-1"
                          : e.font2
                            ? "text-xs font-weight-bold text-success text-uppercase mb-1"
                            : e.font3
                              ? "text-xs font-weight-bold text-info text-uppercase mb-1"
                              : e.font4
                                ? "text-xs font-weight-bold text-warning text-uppercase mb-1"
                                : ""
                      }>
                        {e.name}
                      </div>
                      {/* for progressbar */}

                      <div className="h5 mb-0 font-weight-bold text-gray-800">{e.price}</div>
                      {e.progressBar ?
                        (<div className="col">
                          <div className="progress progress-sm mr-2">
                            <div className="progress-bar bg-info" role="progressbar"
                              style={{width: "50%" }} aria-valuenow="50" aria-valuemin="0"
                              aria-valuemax="100"></div>
                          </div>
                        </div>) : "" }
                    </div>
                    <div className="col-auto">
                      {/* for dashboard icon */}
                      <i className={
                        e.icon1
                          ? "fas fa-calendar fa-2x text-gray-300"
                          : e.icon2
                            ? "fas fa-dollar-sign fa-2x text-gray-300"
                            : e.icon3
                              ? "fas fa-clipboard-list fa-2x text-gray-300"
                              : e.icon4
                                ? "fas fa-comments fa-2x text-gray-300"
                                : ""
                      }></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })
        }
      </div>
    </>
  )
}

export default Dashboard