import React from "react";


function Alert(props) {
  return (
    <div>
      {props.alert && <div className="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>{props.alert.type}</strong> : {props.alert.message}
      </div>}
    </div>
  );
}

export default Alert;
