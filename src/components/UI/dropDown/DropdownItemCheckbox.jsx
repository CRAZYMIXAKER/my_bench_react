import React, {useState} from 'react';
import MyInput from "../input/MyInput";

const DropdownItemCheckbox = ({items, filterName, filters, setFilters}) => {
    const [checkbox, useCheckbox] = useState({});
    // useCheckbox(items);
    // console.log(checkbox);
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
                                    onChange={
                                        // e => filters[filterName][index][item.name] = e.target.checked

                                        e => setFilters(
                                            {
                                                ...filters,
                                                [filterName]: [{name: item.name, checked: e.target.checked}]
                                            }
                                        )
                                    }
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