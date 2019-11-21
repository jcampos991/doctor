import React from 'react'

const Feature2 = ({
    title
}) => {
    return (
        <div className="py-4 d-inline-block">
            <h1 className="mb-0 text-center">{title}</h1>
            <div className="w-100">
                <div 
                    style={{backgroundColor: "#17a4d6", height: "4px", width: "40%"}}
                    className="d-inline-block" />
                <div 
                    style={{backgroundColor: "#71ffd2", height: "4px", width: "60%"}}
                    className="d-inline-block" />
            </div>
        </div>
    )
}

export default Feature2;