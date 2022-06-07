import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getAppeal } from '../../../actions/appeal';
import { withRouter } from 'react-router-dom';
import { forwardToRegistrar } from '../../../actions/appeal';

const AppealShow = ({
    getAppeal,
    match,
    appeal: { appeal },
    forwardToRegistrar,
    history,
}) => {
    useEffect(() => {
        const { id } = match.params;
        getAppeal(id);
    }, [getAppeal]);

    const onForward = () => {
        const { id } = appeal;
        forwardToRegistrar(id, history);
    };

    return !appeal ? (
        <div>loading</div>
    ) : (
        <div className="container-fluid">
            <h1 className="h3 mb-2 text-gray-800">All Details</h1>
            <p className="mb-4">All the details</p>
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">
                        Details of the Appeal
                    </h6>
                </div>
                <div className="card-body">
                    <div className="container mt-5">
                        <div className="row g-3">
                            <h5>1. Particulars of the Appellant</h5>
                            <div className="col-md-6 mb-3">
                                <h6>Name of the appellant: </h6>
                            </div>
                            <div className="col-md-6 mb-3">
                                <p>{`${appeal.first_name} ${appeal.last_name}`}</p>
                            </div>

                            <div className="col-md-6 mb-3">
                                <h6>
                                    Address of the Existing Office/ Residence of
                                    the Appellant
                                </h6>
                            </div>
                            <div className="col-md-6 mb-3">
                                <p>{`${appeal.ar_line1} ${appeal.ar_line2}`}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-3">
                    <button
                        onClick={onForward}
                        className="btn btn-success btn-icon-split"
                    >
                        <span className="icon text-white-50">
                            <i className="fas fa-check"></i>
                        </span>
                        <span className="text">Forward to Registrar</span>
                    </button>
                    <div className="my-2"></div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        appeal: state.appeal,
    };
};

export default connect(mapStateToProps, { getAppeal, forwardToRegistrar })(
    withRouter(AppealShow)
);
