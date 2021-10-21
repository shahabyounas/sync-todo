import React from 'react';
import './popup.scss'


const Popup = (props) => {

    const { isOpen, children } = props;
    return isOpen ? (
    <div className="popup__bg">
        <div className="popup__body">
            <div>{children}</div>
        </div>
    </div>) : null;
}

export default Popup;