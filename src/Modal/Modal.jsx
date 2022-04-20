import React from "react";

const Modal = (props) => {

    if(!props.show) {
        return null;
    }
    return (
        <div className="modal">
            <div className="modal-content">
                <div className="header">
                    <h4 className="modal-title">Witty title</h4>
                </div>
                <div className="modal-body">
                  {props.children} 
                </div>
                <div className="modal-footer">
                    <button>Clear screen</button>
                </div>
            </div>
        </div>
    )
}

export default Modal;