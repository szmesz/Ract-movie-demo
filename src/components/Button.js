import React from "react";
import PropTypes from 'prop-types';

function Button(props) {
    return (
        <button className={props.cssStyle} onClick={props.onClick} placeholder={props.placeholder}>
            {props.label}
        </button>
    );
}

Button.propTypes = {
    cssStype: PropTypes.string,
    onClick: PropTypes.func,
    placeholder: PropTypes.string
}

export default Button;
