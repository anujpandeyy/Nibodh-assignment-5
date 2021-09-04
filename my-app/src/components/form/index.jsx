import React from 'react'

export default function index() {
    return (
        <div>
            <div>
            <div class="container mb-5 formDiv">
      <div className="row">

      </div>
      <div className="row">
          <div className="col-6 mt-5">
              <h1 className="display-4 bold text-primary">Find Us</h1>
              <div className="line5">
              <span></span>
          </div>
          </div>
          
      </div>
      <div className="row">
        <div className="col-6">
          <div className="row mt-4 mb-2">
            <div className="col-6 form-group">
            
              <input
                type="text"
                class="form-control"
                id="fullName"
                placeholder="Name"
          
              />
            </div>
            <div className="col-6 form-group">
              <input
                type="email"
                class="form-control"
                id="email"
                placeholder="Email"
              />
            </div>
          </div>
          <div className="row my-2">
            <div className="col-6">
              <input
                type="text"
                class="form-control"
                id="address"
                placeholder="Address"
              />
            </div>
            <div className="col-6">
              <input
                type="tel"
                class="form-control"
                id="tel"
                placeholder="Phone"
              />
            </div>
          </div>
          <div className="col-12">
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="5"
              placeholder="Details"
            ></textarea>
          </div>
          <button className="btn btn-primary py-2 my-3">SEND NOW</button>
        </div>
        <div className="col-6">
            <img className="formImg" src="data:image/jpeg;base64,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" alt="" />
        </div>
      </div>
    </div>
   </div>
        </div>
    )
}
