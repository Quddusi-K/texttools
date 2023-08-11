import React from "react";

export default function Alert(props) {
  return (
    props.alert && <div
      className={`alert alert-${props.alert.clr} alert-dismissible fade show`}
      role="alert"
    >
      <strong>{props.alert.type}</strong> {props.alert.message}
      {/* <button
        type="button"
        className="close"
        data-dismiss="alert"
        aria-label="Close"
      >
        <span aria-hidden="true">×</span>
      </button> */}
    </div>
  );
}
