import React, {useState} from 'react';
import {MdOutlineArrowDropDown} from "react-icons/md";
import DropdownCheckbox from "../dropDown/DropdownCheckbox";
import MyButton from "../button/MyButton";
import './Filter.scss';

const Filter = ({filters, setFilters, saveFilters}) => {
    const [dropFilter, setDropFilter] = useState('');
    const showHideDropFilter = (filterName) => {
        if (dropFilter === filterName) {
            return setDropFilter('');
        }
        return setDropFilter(filterName);
    }
    return (
        <div className="filter-panel-wrapper">
            {Object.entries(filters).map(filtersItem => {
                const count = Object.values(filtersItem[1]).filter((filter) => filter.checked).length;
                return (
                    <div key={filtersItem[0]} className="filter">
                        <MyButton type="button"
                                  onClick={() => showHideDropFilter(filtersItem[0])}
                                  className={'filter-header ' + ((count > 0) ? '_checked' : '')}>
                            <span className="filter-header-title"> {filtersItem[0].toUpperCase()} </span>
                            <span className={'filter-header-count ' + ((count === 0) ? '_hide' : '')}>
                                {count > 0 ? count : 0}
                            </span>
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

                                <div className="buttons">
                                    <MyButton
                                        name="save"
                                        type="submit"
                                        onClick={saveFilters}
                                    >Save
                                    </MyButton>
                                    <MyButton
                                        name="clear"
                                        type="button"
                                        // onClick={() => clearFilter(form[0])}
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