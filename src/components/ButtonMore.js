import React from 'react'
import { Link } from 'gatsby';

const ButtonMore = ({
    style,
    className,
    label,
    icon,
    to
}) => {
    return (
        <Link 
            style={style}
            to={to}
            className={className}>
            {label}
            <span
                style={{
                    width: "18px", 
                    height: "18px", 
                    border: "solid 1px white"
                }} 
                className="d-inline-flex align-items-center justify-content-center rounded-circle ml-2">+</span>
        </Link>
    )
}

ButtonMore.defaultProps = {
    style: {backgroundColor: "#17a4d6"},
    label: "Ver mas",
    className: "btn btn-info px-4"
}

export default ButtonMore;