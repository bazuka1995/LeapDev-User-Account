import ReactRoundedImage from "react-rounded-image";
import AccountImg from "../Assets/myyaccountpic.jpg";
import useInput from "../hooks/use-input";

import "./AccountDetails.css";

const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.includes("@");
const isPostCode = (value) => value.trim().length === 4;
const isPhone = (value) => value.trim().length === 10;
const notRequired = (value) => true;
const isNumber = (value) => value.match(/\d/);

const AccountDetails = (props) => {
  const {
    value: fName,
    isValid: validFname,
    hasError: fnameError,
    inputChangedHandler: fnameChangedHandler,
    inputUnfocusHandler: fnameUnfocusHandler,
  } = useInput(isNotEmpty);

  const {
    value: lName,
    isValid: validLname,
    hasError: lnameError,
    inputChangedHandler: lnameChangedHandler,
    inputUnfocusHandler: lnameUnfocusHandler,
  } = useInput(isNotEmpty);

  const {
    value: email,
    isValid: validEmail,
    hasError: emailError,
    inputChangedHandler: emailChangedHandler,
    inputUnfocusHandler: emailUnfocusHandler,
  } = useInput(isEmail);

  const {
    value: phone,
    isValid: validPhone,
    hasError: phoneError,
    inputChangedHandler: phoneChangedHandler,
    inputUnfocusHandler: phoneUnfocusHandler,
  } = useInput(isPhone);

  const {
    value: post,
    isValid: validPost,
    hasError: postError,
    inputChangedHandler: postChangedHandler,
    inputUnfocusHandler: postUnfocusHandler,
  } = useInput(isPostCode);

  const { value: company, inputChangedHandler: companyChangedHandler } =
    useInput(notRequired);

  const { value: abn, inputChangedHandler: abnChangedHandler } =
    useInput(notRequired);

  const {
    value: rate,
    isValid: validRate,
    hasError: rateError,
    inputChangedHandler: rateChangedHandler,
    inputUnfocusHandler: rateUnfocusHandler,
  } = useInput(isNumber);

  const {
    value: bday,
    isValid: validBday,
    hasError: bdayError,
    inputChangedHandler: bdayChangedHandler,
    inputUnfocusHandler: bdayUnfocusHandler,
  } = useInput(isNotEmpty);

  let formIsValid = false;

  if (
    validFname &&
    validLname &&
    validEmail &&
    validPhone &&
    validPost &&
    validRate &&
    validBday
  ) {
    formIsValid = true;
  }

  const firstNameClasses = fnameError ? "form-control invalid" : "form-control";

  const lastNameClasses = lnameError ? "form-control invalid" : "form-control";

  const emailClasses = emailError ? "form-control invalid" : "form-control";

  const phoneClasses = phoneError ? "form-control invalid" : "form-control";

  const postClasses = postError ? "form-control invalid" : "form-control";

  const rateClasses = rateError ? "form-control invalid" : "form-control";

  const bdayClasses = bdayError ? "form-control invalid" : "form-control";

  const submitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    let select = document.getElementById("state");
    let state = select.options[select.selectedIndex].value;

    console.log(fName, lName, email, phone, post, state, company, abn, rate, bday);
  };

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

      <form className="form" onSubmit={submitHandler}>
        <div className="control-group">
          <div className={firstNameClasses}>
            <label htmlFor="name">
              First Name<span>*</span>
            </label>
            <input
              required
              type="text"
              id="name"
              value={fName}
              onChange={fnameChangedHandler}
              onBlur={fnameUnfocusHandler}
              disabled={props.disabled}
            />
            {fnameError && (
              <p className="error-text">Please enter your first name</p>
            )}
          </div>

          <div className={lastNameClasses}>
            <label htmlFor="name">
              Last Name<span>*</span>
            </label>
            <input
              required
              type="text"
              id="name"
              value={lName}
              onChange={lnameChangedHandler}
              onBlur={lnameUnfocusHandler}
              disabled={props.disabled}
            />
            {lnameError && (
              <p className="error-text">Please enter your last name</p>
            )}
          </div>

          <div className={emailClasses}>
            <label htmlFor="email">
              Email<span>*</span>
            </label>
            <input
              required
              type="email"
              id="email"
              value={email}
              onChange={emailChangedHandler}
              onBlur={emailUnfocusHandler}
              disabled={props.disabled}
            />
            {emailError && (
              <p className="error-text">Please enter a valid email</p>
            )}
          </div>

          <div className={phoneClasses}>
            <label htmlFor="phone">
              Phone Number<span>*</span>
            </label>
            <input
              required
              type="text"
              id="phone"
              value={phone}
              onChange={phoneChangedHandler}
              onBlur={phoneUnfocusHandler}
              disabled={props.disabled}
            />
            {phoneError && (
              <p className="error-text">Please enter a valid phone number</p>
            )}
          </div>

          <div className={postClasses}>
            <label htmlFor="post">
              Postcode<span>*</span>
            </label>
            <input
              required
              type="text"
              id="post"
              value={post}
              onChange={postChangedHandler}
              onBlur={postUnfocusHandler}
              disabled={props.disabled}
            />
            {postError && (
              <p className="error-text">Please enter a valid postcode</p>
            )}
          </div>

          <div className="form-control">
            <label htmlFor="state">
              State<span>*</span>
            </label>
            <select required id="state" name="state" disabled={props.disabled}>
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
            <input
              type="text"
              id="company"
              value={company}
              onChange={companyChangedHandler}
              disabled={props.disabled}
            />
          </div>

          <div className="form-control">
            <label htmlFor="abn">ABN</label>
            <input
              type="text"
              id="abn"
              value={abn}
              onChange={abnChangedHandler}
              disabled={props.disabled}
            />
          </div>

          <div className={rateClasses}>
            <label htmlFor="rate">
              Hourly rate<span>*</span>
            </label>
            <input
              required
              type="text"
              id="rate"
              value={rate}
              onChange={rateChangedHandler}
              onBlur={rateUnfocusHandler}
              disabled={props.disabled}
            />
            {rateError && (
              <p className="error-text">Please enter a valid hourly rate</p>
            )}
          </div>

          <div className={bdayClasses}>
            <label htmlFor="bday">
              Date of Birth<span>*</span>
            </label>
            <input
              required
              type="date"
              id="bday"
              value={bday}
              onChange={bdayChangedHandler}
              onBlur={bdayUnfocusHandler}
              disabled={props.disabled}
            />
            {bdayError && (
              <p className="error-text">Please enter a valid date</p>
            )}
          </div>
        </div>
        
      </form>
    </div>
  );
};

export default AccountDetails;
