import React, {useState} from 'react';
import MyInput from "../input/MyInput";

const DropdownItemCheckbox = ({items, filterName, filters, setFilters}) => {
    // console.log(filters[filterName])
    const changeCheckboxStatus = (checkboxName, checkboxStatus) => {
        setFilters(filters.map(filter => {
            if (filter === filterName) {
                console.log('filterName' + filterName + ' ' + filter);
                return filter.map(checkbox => {
                    console.log(checkbox['name']);
                    console.log('edit');
                    if (checkbox.name === checkbox && checkbox.checked !== checkboxStatus) {
                        return {
                            ...checkbox,
                            name: checkbox,
                            checked: checkboxStatus
                        }
                    } else {
                        return checkbox
                    }
                })
            } else {
                return filter;
            }
        }))
    }

    // console.log(filters)
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
                                        changeCheckboxStatus(item.name, item.checked);
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

export default DropdownItemCheckbox;