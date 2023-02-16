import React from 'react';
import {MdOutlineFilterList, MdClose} from "react-icons/md";
import './FilterChecked.scss';

const FilterChecked = ({filter, setFilter}) => {
    const deleteCheckedFilter = (filterName, checkedName) => {
        console.log('Delete');
        // setFilterChecked(
        //     Object.entries(filterChecked).map(prevState => ({
        //             ...prevState,
        //             [filterName]: prevState[filterName].filter(p => p.name !== checkedName)
        //         })
        //     )
        // )
    }

    const clearCheckedFilter = () => {
        console.log('CLEAR');
        setFilter({...filter, filters: {}});
    }

    return (
        <div className="filter-checked">
            <div className="filter-checked-wrapper">
                <div className="filter-checked-svg">
                    <MdOutlineFilterList/>
                </div>
                <div className="filter-checked-items">
                    {Object.entries(filter.filters).map(filter => {
                        return (
                            filter[1].map(checked => {
                                return (
                                    <button
                                        className="item"
                                        onClick={(e) => deleteCheckedFilter(filter[0], checked.name)}>
                                        <span className="item-title">{checked.name}</span>
                                        <span className="item-close">
                                        <MdClose/>
                                    </span>
                                    </button>
                                )
                            }))
                    })}
                </div>
            </div>
            <button className="filter-checked-clear" onClick={clearCheckedFilter}>
                <div>Clear Filters</div>
            </button>
        </div>
    );
};

export default FilterChecked;