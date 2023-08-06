import React, { useState } from "react";

const Inquiry = () => {
    const [contactInfo, setContactInfo] = useState(
        {
            "name": "",
            "email": "",
            "remarks": "",
        }
    )
    const onChange = ({target})=>{
        setContactInfo({...contactInfo, [target.name]: target.value})
    }
    const onSubmimt = (e)=>{
        e.preventDefault()
        console.log(contactInfo)
    }
  return (
    <div>
      <form onSubmit={onSubmimt}>
        <div className="form-group mt-2">
            <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" className="form-control" placeholder="Enter your Name" value={contactInfo.name} onChange={onChange} required/>
        </div>
        <div className="form-group mt-2">
            <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" className="form-control" placeholder="Enter your Email" value={contactInfo.email} onChange={onChange} required/>
        </div>
        <div className="form-group mt-2">
            <label htmlFor="remarks">Remarks</label>
          <input type="text" name="remarks" id="remarks" className="form-control" placeholder="Comments..." value={contactInfo.remarks} onChange={onChange}/>
        </div>
        <button className="btn btn-primary mt-2">
            Submit
        </button>
      </form>
    </div>
  );
};

export default Inquiry;
