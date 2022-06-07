import React, { useState, Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';
import { createAppeal } from '../../actions/appeal';

const FormC = ({ logout, createAppeal, history }) => {
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        ar_line1: '',
        ar_line2: '',
        ar_landmark: '',
        ar_city: '',
        ar_district: '',
        ar_pin: '',
        ar_state: '',
        ar_country: '',
        as_line1: '',
        as_line2: '',
        as_landmark: '',
        as_city: '',
        as_district: '',
        as_pin: '',
        as_state: '',
        as_country: '',
        appellant_mobile_no: '',
        appellant_email_id: '',
        res_first_name: '',
        res_last_name: '',
        res_ao_line1: '',
        res_ao_line2: '',
        res_ao_landmark: '',
        res_ao_city: '',
        res_ao_district: '',
        res_ao_pin: '',
        res_ao_state: '',
        res_ao_country: '',
        res_as_line1: '',
        res_as_line2: '',
        res_as_landmark: '',
        res_as_city: '',
        res_as_district: '',
        res_as_pin: '',
        res_as_state: '',
        res_as_country: '',
        res_mobile_no: '',
        res_email_id: '',
        reg_num: '',
        is_limitation_specified: true,
        reason_for_delay: '',
        facts_of_case: '',
        ground_of_appeal: '',
        reliefs_sought: '',
        interim_order: '',
        is_matter_pending: true,
    });

    const {
        first_name,
        last_name,
        ar_line1,
        ar_line2,
        ar_landmark,
        ar_city,
        ar_district,
        ar_pin,
        ar_state,
        ar_country,
        as_line1,
        as_line2,
        as_landmark,
        as_city,
        as_district,
        as_pin,
        as_state,
        as_country,
        appellant_mobile_no,
        appellant_email_id,
        res_first_name,
        res_last_name,
        res_ao_line1,
        res_ao_line2,
        res_ao_landmark,
        res_ao_city,
        res_ao_district,
        res_ao_pin,
        res_ao_state,
        res_ao_country,
        res_as_line1,
        res_as_line2,
        res_as_landmark,
        res_as_city,
        res_as_district,
        res_as_pin,
        res_as_state,
        res_as_country,
        res_mobile_no,
        res_email_id,
        reg_num,
        is_limitation_specified,
        reason_for_delay,
        facts_of_case,
        ground_of_appeal,
        reliefs_sought,
        interim_order,
        is_matter_pending,
    } = formData;

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleCheck = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.checked });
    };

    const onSubmit = (e) => {
        e.preventDefault();

        createAppeal(formData, history);
    };

    return (
        <Fragment>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        REAT - REAL ESTATE APPELLATE TRIBUNAL
                    </a>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a
                                    className="nav-link active"
                                    aria-current="page"
                                    href="#"
                                >
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Appellants
                                </a>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="nav-link"
                                    to="/appellant/login"
                                    onClick={logout}
                                >
                                    Logout
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <section className="section-form mb-5">
                <div className="container mt-5">
                    <form className="row g-3" onSubmit={(e) => onSubmit(e)}>
                        <h5>1. Particulars of the Appellant</h5>
                        <h6>Name of the Appellant</h6>
                        <div className="col-md-6 mb-3">
                            <label htmlFor="firstName" className="form-label">
                                First Name
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="firstName"
                                name="first_name"
                                value={first_name}
                                onChange={(e) => onChange(e)}
                            />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label htmlFor="lastName" className="form-label">
                                Last Name
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="lastName"
                                name="last_name"
                                value={last_name}
                                onChange={(e) => onChange(e)}
                            />
                        </div>
                        <h6>
                            Address of the Existing Office/ Residence of the
                            Appellant
                        </h6>
                        <div className="mb-3">
                            <label htmlFor="AddLine1" className="form-label">
                                Address Line 1
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="AddLine1"
                                name="ar_line1"
                                value={ar_line1}
                                onChange={(e) => onChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="AddLine2" className="form-label">
                                Address Line 2
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="AddLine2"
                                name="ar_line2"
                                value={ar_line2}
                                onChange={(e) => onChange(e)}
                            />
                        </div>
                        <div class="col-md-4 mb-3">
                            <label for="country" class="form-label">
                                Country
                            </label>
                            <input
                                type="text"
                                class="form-control"
                                id="country"
                                name="ar_country"
                                value={ar_country}
                                onChange={(e) => onChange(e)}
                            />
                        </div>
                        <div class="col-md-4 mb-3">
                            <label for="state" class="form-label">
                                State
                            </label>
                            <input
                                type="text"
                                class="form-control"
                                id="state"
                                name="ar_state"
                                value={ar_state}
                                onChange={(e) => onChange(e)}
                            />
                        </div>
                        <div class="col-md-4 mb-3">
                            <label for="landmark" class="form-label">
                                Landmark
                            </label>
                            <input
                                type="text"
                                class="form-control"
                                id="landmark"
                                name="ar_landmark"
                                value={ar_landmark}
                                onChange={(e) => onChange(e)}
                            />
                        </div>
                        <div class="col-md-4 mb-3">
                            <label for="city" class="form-label">
                                City
                            </label>
                            <input
                                type="text"
                                class="form-control"
                                id="city"
                                name="ar_city"
                                value={ar_city}
                                onChange={(e) => onChange(e)}
                            />
                        </div>
                        <div class="col-md-4 mb-3">
                            <label for="district" class="form-label">
                                District
                            </label>
                            <input
                                type="text"
                                class="form-control"
                                id="district"
                                name="ar_district"
                                value={ar_district}
                                onChange={(e) => onChange(e)}
                            />
                        </div>
                        <div class="col-md-4 mb-3">
                            <label for="pin" class="form-label">
                                Pin
                            </label>
                            <input
                                type="text"
                                class="form-control"
                                id="pin"
                                name="ar_pin"
                                value={ar_pin}
                                onChange={(e) => onChange(e)}
                            />
                        </div>
                        <h6>Address for Service of all Notices</h6>
                        <div class="mb-3">
                            <label for="serAddLine1" class="form-label">
                                Address Line 1
                            </label>
                            <input
                                type="text"
                                class="form-control"
                                id="serAddLine1"
                                name="as_line1"
                                value={as_line1}
                                onChange={(e) => onChange(e)}
                            />
                        </div>
                        <div class="mb-3">
                            <label for="serAddLine2" class="form-label">
                                Address Line 2
                            </label>
                            <input
                                type="text"
                                class="form-control"
                                id="serAddLine2"
                                name="as_line2"
                                value={as_line2}
                                onChange={(e) => onChange(e)}
                            />
                        </div>
                        <div class="col-md-4 mb-3">
                            <label for="serAddCountry" class="form-label">
                                Country
                            </label>
                            <input
                                type="text"
                                class="form-control"
                                id="country"
                                name="as_country"
                                value={as_country}
                                onChange={(e) => onChange(e)}
                            />
                        </div>
                        <div class="col-md-4 mb-3">
                            <label for="serAddState" class="form-label">
                                State
                            </label>
                            <input
                                type="text"
                                class="form-control"
                                id="state"
                                name="as_state"
                                value={as_state}
                                onChange={(e) => onChange(e)}
                            />
                        </div>
                        <div class="col-md-4 mb-3">
                            <label for="serLandMark" class="form-label">
                                Landmark
                            </label>
                            <input
                                type="text"
                                class="form-control"
                                id="serLandMark"
                                name="as_landmark"
                                value={as_landmark}
                                onChange={(e) => onChange(e)}
                            />
                        </div>
                        <div class="col-md-4 mb-3">
                            <label for="SerAddCity" class="form-label">
                                City
                            </label>
                            <input
                                type="text"
                                class="form-control"
                                id="SerAddCity"
                                name="as_city"
                                value={as_city}
                                onChange={(e) => onChange(e)}
                            />
                        </div>
                        <div class="col-md-4 mb-3">
                            <label for="SerAddDistrict" class="form-label">
                                District
                            </label>
                            <input
                                type="text"
                                class="form-control"
                                id="SerAddDistrict"
                                name="as_district"
                                value={as_district}
                                onChange={(e) => onChange(e)}
                            />
                        </div>
                        <div class="col-md-4 mb-3">
                            <label for="serAddPin" class="form-label">
                                Pin
                            </label>
                            <input
                                type="text"
                                class="form-control"
                                id="serAddPin"
                                name="as_pin"
                                value={as_pin}
                                onChange={(e) => onChange(e)}
                            />
                        </div>
                        <h6>Contact Details</h6>
                        <div class="col-md-6 mb-3">
                            <label for="mobileNumber" class="form-label">
                                Mobile Number
                            </label>
                            <input
                                type="text"
                                class="form-control"
                                id="mobileNumber"
                                name="appellant_mobile_no"
                                value={appellant_mobile_no}
                                onChange={(e) => onChange(e)}
                            />
                        </div>
                        <div class="col-md-6 mb-3">
                            <label for="emailAdd" class="form-label">
                                Email Address
                            </label>
                            <input
                                type="email"
                                class="form-control"
                                id="emailAdd"
                                name="appellant_email_id"
                                value={appellant_email_id}
                                onChange={(e) => onChange(e)}
                            />
                        </div>
                        <h5>2. Particulars of the Respondent</h5>
                        <h6>Name of the Respondent</h6>
                        <div class="col-md-6 mb-3">
                            <label for="resfirstName" class="form-label">
                                First Name
                            </label>
                            <input
                                type="text"
                                class="form-control"
                                id="resfirstName"
                                name="res_first_name"
                                value={res_first_name}
                                onChange={(e) => onChange(e)}
                            />
                        </div>
                        <div class="col-md-6 mb-3">
                            <label for="reslastName" class="form-label">
                                Last Name
                            </label>
                            <input
                                type="text"
                                class="form-control"
                                id="reslastName"
                                name="res_last_name"
                                value={res_last_name}
                                onChange={(e) => onChange(e)}
                            />
                        </div>
                        <h6>Office Address of the Respondent</h6>
                        <div class="mb-3">
                            <label for="resAddLine1" class="form-label">
                                Address Line 1
                            </label>
                            <input
                                type="text"
                                class="form-control"
                                id="resAddLine1"
                                name="res_ao_line1"
                                value={res_ao_line1}
                                onChange={(e) => onChange(e)}
                            />
                        </div>
                        <div class="mb-3">
                            <label for="resAddLine2" class="form-label">
                                Address Line 2
                            </label>
                            <input
                                type="text"
                                class="form-control"
                                id="resAddLine2"
                                name="res_ao_line2"
                                value={res_ao_line2}
                                onChange={(e) => onChange(e)}
                            />
                        </div>
                        <div class="col-md-4 mb-3">
                            <label for="resCountry" class="form-label">
                                Country
                            </label>
                            <input
                                type="text"
                                class="form-control"
                                id="country"
                                name="res_ao_country"
                                value={res_ao_country}
                                onChange={(e) => onChange(e)}
                            />
                        </div>
                        <div class="col-md-4 mb-3">
                            <label for="resState" class="form-label">
                                State
                            </label>
                            <input
                                type="text"
                                class="form-control"
                                id="state"
                                name="res_ao_state"
                                value={res_ao_state}
                                onChange={(e) => onChange(e)}
                            />
                        </div>
                        <div class="col-md-4 mb-3">
                            <label for="resLandmark" class="form-label">
                                Landmark
                            </label>
                            <input
                                type="text"
                                class="form-control"
                                id="resLandmark"
                                name="res_ao_landmark"
                                value={res_ao_landmark}
                                onChange={(e) => onChange(e)}
                            />
                        </div>
                        <div class="col-md-4 mb-3">
                            <label for="resCity" class="form-label">
                                City
                            </label>
                            <input
                                type="text"
                                class="form-control"
                                id="resCity"
                                name="res_ao_city"
                                value={res_ao_city}
                                onChange={(e) => onChange(e)}
                            />
                        </div>
                        <div class="col-md-4 mb-3">
                            <label for="resDistrict" class="form-label">
                                District
                            </label>
                            <input
                                type="text"
                                class="form-control"
                                id="resDistrict"
                                name="res_ao_district"
                                value={res_ao_district}
                                onChange={(e) => onChange(e)}
                            />
                        </div>
                        <div class="col-md-4 mb-3">
                            <label for="resPin" class="form-label">
                                Pin
                            </label>
                            <input
                                type="text"
                                class="form-control"
                                id="resPin"
                                name="res_ao_pin"
                                value={res_ao_pin}
                                onChange={(e) => onChange(e)}
                            />
                        </div>
                        <h6>Address for Service of all Notices</h6>
                        <div class="mb-3">
                            <label for="ResSerAddLine1" class="form-label">
                                Address Line 1
                            </label>
                            <input
                                type="text"
                                class="form-control"
                                id="ResSerAddLine1"
                                name="res_as_line1"
                                value={res_as_line1}
                                onChange={(e) => onChange(e)}
                            />
                        </div>
                        <div class="mb-3">
                            <label for="ResSerAddLine2" class="form-label">
                                Address Line 2
                            </label>
                            <input
                                type="text"
                                class="form-control"
                                id="ResSerAddLine2"
                                name="res_as_line2"
                                value={res_as_line2}
                                onChange={(e) => onChange(e)}
                            />
                        </div>
                        <div class="col-md-4 mb-3">
                            <label for="ResSerCountry" class="form-label">
                                Country
                            </label>
                            <input
                                type="text"
                                class="form-control"
                                id="country"
                                name="res_as_country"
                                value={res_as_country}
                                onChange={(e) => onChange(e)}
                            />
                        </div>
                        <div class="col-md-4 mb-3">
                            <label for="ResSerState" class="form-label">
                                State
                            </label>
                            <input
                                type="text"
                                class="form-control"
                                id="state"
                                name="res_as_state"
                                value={res_as_state}
                                onChange={(e) => onChange(e)}
                            />
                        </div>
                        <div class="col-md-4 mb-3">
                            <label for="ResSerLandmark" class="form-label">
                                Landmark
                            </label>
                            <input
                                type="text"
                                class="form-control"
                                id="ResSerLandmark"
                                name="res_as_landmark"
                                value={res_as_landmark}
                                onChange={(e) => onChange(e)}
                            />
                        </div>
                        <div class="col-md-4 mb-3">
                            <label for="ResSerCity" class="form-label">
                                City
                            </label>
                            <input
                                type="text"
                                class="form-control"
                                id="ResSerCity"
                                name="res_as_city"
                                value={res_as_city}
                                onChange={(e) => onChange(e)}
                            />
                        </div>
                        <div class="col-md-4 mb-3">
                            <label for="ResSerDistrict" class="form-label">
                                District
                            </label>
                            <input
                                type="text"
                                class="form-control"
                                id="ResSerDistrict"
                                name="res_as_district"
                                value={res_as_district}
                                onChange={(e) => onChange(e)}
                            />
                        </div>
                        <div class="col-md-4 mb-3">
                            <label for="ResSerPin" class="form-label">
                                Pin
                            </label>
                            <input
                                type="text"
                                class="form-control"
                                id="ResSerPin"
                                name="res_as_pin"
                                value={res_as_pin}
                                onChange={(e) => onChange(e)}
                            />
                        </div>
                        <h6>Contact Details</h6>
                        <div class="col-md-6 mb-3">
                            <label for="resMobileNumber" class="form-label">
                                Mobile Number
                            </label>
                            <input
                                type="text"
                                class="form-control"
                                id="resMobileNumber"
                                name="res_mobile_no"
                                value={res_mobile_no}
                                onChange={(e) => onChange(e)}
                            />
                        </div>
                        <div class="col-md-6 mb-3">
                            <label for="resEmail" class="form-label">
                                Email Address
                            </label>
                            <input
                                type="email"
                                class="form-control"
                                id="resEmail"
                                name="res_email_id"
                                value={res_email_id}
                                onChange={(e) => onChange(e)}
                            />
                        </div>
                        <h5>3. Jurisdiction of the Appellant Tribunal :</h5>
                        <div class="mb-3 form-check">
                            <input
                                type="checkbox"
                                class="form-check-input"
                                id="juridiction"
                                name="is_juridiction"
                                // value={is_juridiction}
                                onChange={(e) => onChange(e)}
                            />
                            <label class="form-check-label" for="juridiction">
                                The appellant declares that the subject matter
                                of the appeal falls within the jurisdiction of
                                the Appellate Tribunal
                            </label>
                        </div>
                        <div class="col-md-6 mb-3">
                            <label for="registrationNum" class="form-label">
                                Project Registration Number
                            </label>
                            <input
                                type="text"
                                class="form-control"
                                id="registrationNum"
                                name="reg_num"
                                value={reg_num}
                                onChange={(e) => onChange(e)}
                            />
                        </div>
                        <h5>4. Limitation :</h5>
                        <div class="mb-3 form-check">
                            <input
                                type="checkbox"
                                class="form-check-input"
                                id="limitationCheck"
                                name="is_limitation_specified"
                                value={is_limitation_specified}
                                checked={is_limitation_specified}
                                onChange={(e) => {
                                    handleCheck(e);
                                    if (!is_limitation_specified) {
                                        setFormData({
                                            ...formData,
                                            is_limitation_specified:
                                                e.target.checked,
                                            reason_for_delay: '',
                                        });
                                    }
                                }}
                            />
                            <label
                                class="form-check-label"
                                for="limitationCheck"
                            >
                                The appellant declares that the appeal is within
                                the limitation specified in sub-section (2) of
                                section 44
                            </label>
                        </div>
                        <p style={{ textAlign: 'center' }}>OR</p>
                        <div class="col-md-6 mb-3">
                            <label for="limitationReason" class="form-label">
                                If the appeal is filed after the expiry of the
                                limitation period specified under sub-section
                                (2) of section 44 specify reasons for delay:
                            </label>
                        </div>
                        <div class="col-md-6 mb-3">
                            <textarea
                                rows="10"
                                class="form-control"
                                id="limitationReason"
                                name="reason_for_delay"
                                disabled={is_limitation_specified}
                                value={reason_for_delay}
                                onChange={(e) => onChange(e)}
                            />
                        </div>
                        <h5>5. Facts of the case:</h5>
                        <div class="col-md-6 mb-3">
                            <label for="facts" class="form-label">
                                Give concise statement of facts and grounds of
                                appeal against the specific order of the
                                Authority of the Adjudicating Officer, as the
                                case may be passed under :
                            </label>
                        </div>
                        <div class="col-md-6 mb-3">
                            <textarea
                                rows="10"
                                class="form-control"
                                id="facts"
                                name="facts_of_case"
                                value={facts_of_case}
                                onChange={(e) => onChange(e)}
                            />
                        </div>
                        <h5>6. Grounds of Appeal</h5>
                        <div class="col-md-6 mb-3">
                            <label for="groundsOfAppeal" class="form-label">
                                Please Specify the grounds of the Appeal:
                            </label>
                        </div>
                        <div class="col-md-6 mb-3">
                            <textarea
                                rows="10"
                                class="form-control"
                                id="groundsOfAppeal"
                                name="ground_of_appeal"
                                value={ground_of_appeal}
                                onChange={(e) => onChange(e)}
                            />
                        </div>
                        <h5>7. Relief(s) sought</h5>
                        <div class="col-md-6 mb-3">
                            <label for="reliefSought" class="form-label">
                                Specify the relief(s) sought explaining the
                                grounds of relief(s) and the legal provisions(if
                                any) relied upon:
                            </label>
                        </div>
                        <div class="col-md-6 mb-3">
                            <textarea
                                rows="10"
                                class="form-control"
                                id="reliefSought"
                                name="reliefs_sought"
                                value={reliefs_sought}
                                onChange={(e) => onChange(e)}
                            />
                        </div>
                        <h5>8. Interim order, if prayed for</h5>
                        <div class="col-md-6 mb-3">
                            <label for="interimOrder" class="form-label">
                                Pending final decision on the appeal, the
                                appellant seeks issue of the following interim
                                order: [Give here the nature of the interim
                                order prayed for with reasons]
                            </label>
                        </div>
                        <div class="col-md-6 mb-3">
                            <textarea
                                rows="10"
                                class="form-control"
                                id="interimOrder"
                                name="interim_order"
                                value={interim_order}
                                onChange={(e) => onChange(e)}
                            />
                        </div>
                        <h5>
                            9. Matter not pending with any other court, etc:
                        </h5>
                        <div class="mb-3 form-check">
                            <input
                                type="checkbox"
                                class="form-check-input"
                                id="matterPendingCheck"
                                name="is_matter_pending"
                                value={is_matter_pending}
                                checked={is_matter_pending}
                                onChange={(e) => handleCheck(e)}
                            />
                            <label
                                class="form-check-label"
                                for="matterPendingCheck"
                            >
                                The appellant further declares that the matter
                                regarding which this appeal has been made, is
                                not pending before any court of law or any other
                                authority or any other Tribunal(s).{' '}
                            </label>
                        </div>{' '}
                        <div className="col-md-12 mb-3 ">
                            <button type="submit" className="btn btn-primary">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </Fragment>
    );
};

export default connect(null, { logout, createAppeal })(withRouter(FormC));
