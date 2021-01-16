import React from "react";

function ProgressBar(props) {
    const { label, min, max, percent, classAdd } = props;
    return (
        <div className="el-progress">
            {label && (
                <h5 className={"el-icon " + ( classAdd ? classAdd: '' ) }>
                    <span className="el-icon-label">{label}</span>
                </h5>
            )}
            {percent && <span className="el-progress-count">{`% ${percent}`}</span>}
            <div className="el-progress-line">
                <div className="el-progress-bar" min={min || 0} max={max || 100} style={{ width: `${percent}%` }} />
            </div>
        </div>
    );
}

export default ProgressBar;
