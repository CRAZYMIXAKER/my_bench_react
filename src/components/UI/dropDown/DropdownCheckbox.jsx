import React, {useEffect, useMemo, useState} from 'react';
import MyInput from "../input/MyInput";

const DropdownCheckbox = ({items, filterName, setFilters}) => {
    const updateCheckboxStatus = (checkboxName, checkboxStatus) => {
        setFilters(prevState => ({
            ...prevState,
            [filterName]: prevState[filterName].map(checkbox => checkbox.name === checkboxName ? {
                    ...checkbox,
                    checked: !checkboxStatus
                } : checkbox
            )
        }))
    }

    return (
        <div className="dropdown">
            {items.map((item, index) => {
                return (
                    <div key={item.name} className="dropdown-item">
                        <div className="dropdown-item-wrapper">
                            <label className="dropdown-item-label">
                                <MyInput
                                    type="checkbox"
                                    name={item.name}
                                    checked={item.checked}
                                    className="dropdown-item-checkbox"
                                    onChange={() => {
                                        updateCheckboxStatus(item.name, item.checked, index);
                                    }}
                                />
                                <span className="dropdown-item-checked"></span>
                                {item.name}
                            </label>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default DropdownCheckbox;