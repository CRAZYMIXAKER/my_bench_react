import React from 'react';
import MyInput from "./UI/input/MyInput";
import {MdOutlineArrowDropDown} from "react-icons/md";

const InformationListFilter = ({filter, setFilter}) => {
    const arrayOfFilters = {
        'role': [
            "Frontend",
            "Backend",
            "Backend",
            "Full Stack",
            "BA",
            "PM",
            "QA",
            "Designer",
            "Mobile",
            "Devops"
        ],
    }
    const updateFilterValues = (e) => {
        e.preventDefault();
        let formName = e.target.name;
        let formValues = [];

        Object.values(e.target).map(item => {
            item.checked && formValues.push(item.name);
        });
        setFilter({...filter, filters: {[formName]: formValues}})
    }

    return (
        <div>
            <MyInput
                value={filter.query}
                onChange={e => setFilter({...filter, query: e.target.value})}
                placeholder="Поиск"
            />
            {Object.entries(arrayOfFilters).map(form => {
                <div className="filter">
                    <button type="button" className="filter-header">
                        <span className="filter-header-title"> {form} </span>
                        <span className="filter-header-count"> 4 </span>
                        <MdOutlineArrowDropDown/>
                    </button>

                    <div className="filter-dropdown">
                        <form name={form[0]} onSubmit={updateFilterValues}>
                            <div className="dropdown">

                                {Object.values(form[1]).map(item => {
                                    <div className="dropdown-item">
                                        <div className="dropdown-item-wrapper">
                                            <label className="dropdown-item-label">
                                                <input type="checkbox" name={item} className="dropdown-item-checkbox"/>
                                                <span className="dropdown-item-checked"></span>
                                                {item}
                                            </label>
                                        </div>
                                    </div>
                                })}

                            </div>
                            <div className="buttons">
                                <button> Save</button>
                                <button disabled="">Clear</button>
                            </div>
                        </form>
                    </div>
                </div>
            })}
        </div>
    );
};

export default InformationListFilter;