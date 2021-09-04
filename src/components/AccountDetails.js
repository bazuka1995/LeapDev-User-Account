import ReactRoundedImage from "react-rounded-image";
import AccountImg from "../Assets/myyaccountpic.jpg";

import "./AccountDetails.css";

const AccountDetails = () => {
  return (
    <div className="account-details">

      <div className="form-header">
        <div className="control-group">
          <ReactRoundedImage
            image={AccountImg}
            roundedSize="0"
            imageWidth="110"
            imageHeight="110"
          />
          <h3>Dwayne Johnson</h3>
        </div>

        <button className="resume-button">Upload Resume</button>
      </div>

      <form className="form">
        <div className="control-group">

          <div className="form-control">
            <label htmlFor="name">First Name</label>
            <input required type="text" id="name" />
          </div>

          <div className="form-control">
            <label htmlFor="name">Last Name</label>
            <input required type="text" id="name" />
          </div>

          <div className="form-control">
            <label htmlFor="email">Email</label>
            <input required type="text" id="email" />
          </div>

          <div className="form-control">
            <label htmlFor="phone">Phone Number</label>
            <input required type="text" id="phone" />
          </div>

          <div className="form-control">
            <label htmlFor="postcode">Postcode</label>
            <input required type="text" id="postcode" />
          </div>

          <div className="form-control">
            <label htmlFor="state">State</label>
            <select required id="state" name="state">
              <option value="NSW">NSW</option>
              <option value="ACT">ACT</option>
              <option value="Queensland">Queensland</option>
              <option value="Victoria">Victoria</option>
              <option value="Tasmania">Tasmania</option>
              <option value="NT">NT</option>
              <option value="South Austalia">South Australia</option>
              <option value="Western Australia">Western Australia</option>
            </select>
          </div>

          <div className="form-control">
            <label htmlFor="company">Company Name</label>
            <input required type="text" id="company" />
          </div>

          <div className="form-control">
            <label htmlFor="abn">ABN</label>
            <input required type="text" id="abn" />
          </div>

          <div className="form-control">
            <label htmlFor="rate">Hourly Rate</label>
            <input required type="number" id="rate" />
          </div>

          <div className="form-control">
            <label htmlFor="birthday">Date of Birth</label>
            <input required type="date" id="birthday" />
          </div>

        </div>
      </form>
    </div>
  );
};

export default AccountDetails;
