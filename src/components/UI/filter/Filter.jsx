import React, {useState} from 'react';
import {MdOutlineArrowDropDown} from "react-icons/md";
import DropdownCheckbox from "../dropDown/DropdownCheckbox";
import MyButton from "../button/MyButton";
import './Filter.scss';

const Filter = ({filter, filters, setFilters, saveFilters}) => {
    const [dropFilter, setDropdownFilter] = useState('');
    const showHideDropdownFilter = (filterName) => {
        if (dropFilter === filterName) {
            return setDropdownFilter('');
        }
        return setDropdownFilter(filterName);
    }

    const clearFilter = (filterName) => {
        console.log('Clear Filter');
        console.log(filterName);
        setFilters(prevState => ({
            ...prevState,
            [filterName]: prevState[filterName].map(checkbox => checkbox.checked === true ? {
                    ...checkbox,
                    checked: false
                } : checkbox
            )
        }))
    }

    return (
        <div className="filter-panel-wrapper">
            {Object.entries(filters).map(filtersItem => {
                const count = filter[filtersItem[0]] && Object.values(filter[filtersItem[0]]).filter((filter) => filter.checked).length;
                const clearDisableStatus = ((Object.values(filtersItem[1]).filter((filter) => filter.checked).length) <= 0);
                return (
                    <div key={filtersItem[0]} className="filter">
                        <MyButton type="button"
                                  onClick={() => showHideDropdownFilter(filtersItem[0])}
                                  className={'filter-header ' + ((count > 0) ? '_checked' : '')}>
                            <span className="filter-header-title"> {filtersItem[0].toUpperCase()} </span>
                            {count && <span className="filter-header-count"> {count} </span>}
                            <MdOutlineArrowDropDown/>
                        </MyButton>

                        {(dropFilter === filtersItem[0]) &&
                            (<div className="filter-dropdown">
                                <DropdownCheckbox
                                    items={filtersItem[1]}
                                    filterName={filtersItem[0]}
                                    filters={filters}
                                    setFilters={setFilters}
                                />

                                <div className="filter-dropdown-buttons">
                                    <MyButton
                                        className="filter-dropdown-button _save"
                                        name="save"
                                        type="button"
                                        onClick={saveFilters}
                                    >Save
                                    </MyButton>
                                    <MyButton
                                        disabled={clearDisableStatus}
                                        className="filter-dropdown-button _clear"
                                        name="clear"
                                        type="button"
                                        onClick={() => clearFilter(filtersItem[0])}
                                    >
                                        Clear
                                    </MyButton>
                                </div>
                            </div>)
                        }
                    </div>
                );
            })}
        </div>
    );
};

export default Filter;