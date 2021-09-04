import React from 'react'
let array1=
    [
        {
            name:"Education & Prevention",
            val:86
        },
        {
            name:"Trauma Care for Children",
            val:57
        },
        {
            name:"Research and Advocacy",
            val:65
        },
        {
            name:"Fundraising",
            val:34
        },
        {
            name:"Cluture and Community",
            val:92
        }
    ]
export default function chart() {
    return (
        <div className="row custom-chart">
        <div className="col-4 mx-4">
          <div className="chart-heading">
            <h1 className="display-4 text-success px-5 text-uppercase">
              Where the money goes
            </h1>
          </div>
          <div className="chart-para px-5 pt-2">
            <p className="text-primary">
              Current operation and program spending breakdown
            </p>
          </div>
  
          <div className="chart-list px-4 mx-1">
            <ul className="">
              <li>Education & Prevention</li>
              <li>Trauma Care for Children</li>
              <li>Research and Advocacy</li>
              <li>Fundraising</li>
              <li>Cluture and Community</li>
            </ul>
          </div>
          <div className="chart-btn px-5">
            <button className="btn btn-warning custom-chart-btn">
              Donate Now
            </button>
          </div>
        </div>
        <div className="col-7">
  
            
          <div className="main-container d-flex justify-content-around">
              {
                  array1.map((data)=>{
                      return(
                          <div className="chart-container">
                          <div className="chart" style={{height:`${data.val}%`}}>
                              <div className="andarKaSpan">{data.name}</div>
                          </div>
                          <span className="span-per">{data.val}%</span>
                          </div>
                      );
                  })
              }
          </div>
        </div>
      </div>
    )
}
