import React from 'react';

const DropdownItemCheckbox = ({items}) => {
    return (
        <div className="dropdown">
            {Object.values(items).map(item => {
                return (
                    <div className="dropdown-item">
                        <div className="dropdown-item-wrapper">
                            <label className="dropdown-item-label">
                                <input
                                    type="checkbox"
                                    name={item}
                                    key={item}
                                    className="dropdown-item-checkbox"/>
                                <span className="dropdown-item-checked"></span>
                                {item}
                            </label>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default DropdownItemCheckbox;