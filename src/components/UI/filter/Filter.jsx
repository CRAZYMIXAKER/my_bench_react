import React from 'react';
import {MdOutlineArrowDropDown} from "react-icons/md";
import Dropdown from "../dropDown/Dropdown";

const Filter = ({arrayFilters}) => {
    return (
        <div>
            {Object.entries(arrayFilters).map(form => {
                return (
                    <div className="filter">
                        <button type="button" className="filter-header">
                            <span className="filter-header-title"> {form} </span>
                            <span className="filter-header-count"> 4 </span>
                            <MdOutlineArrowDropDown/>
                        </button>

                        <Dropdown form={form}/>
                    </div>
                );
            })}
        </div>
    );
};

export default Filter;