import React from 'react';
import {MdOutlineArrowDropDown} from "react-icons/md";
import DropdownItemCheckbox from "../dropDown/DropdownItemCheckbox";

const Filter = ({filters, setFilters, saveFilters}) => {
    return (
        <div>
            {Object.entries(filters).map(filtersItem => {
                return (
                    <div key={filtersItem[0]} className="filter">
                        <button type="button" className="filter-header">
                            <span className="filter-header-title"> {filtersItem[0]} </span>
                            <span className="filter-header-count"> 4 </span>
                            <MdOutlineArrowDropDown/>
                        </button>

                        <div className="filter-dropdown">
                            <form key={filtersItem[0]}
                                  name={filtersItem[0]}
                                // onSubmit={saveFilter}
                            >
                                <DropdownItemCheckbox
                                    items={filtersItem[1]}
                                    filterName={filtersItem[0]}
                                    filters={filters}
                                    setFilters={setFilters}
                                />

                                <div className="buttons">
                                    <button
                                        name="save"
                                        type="submit"
                                        onClick={saveFilters}
                                    >Save
                                    </button>
                                    <button
                                        name="clear"
                                        type="button"
                                        // onClick={() => clearFilter(form[0])}
                                    >
                                        Clear
                                    </button>
                                </div>
                            </form>
                        </div>

                    </div>
                );
            })}
        </div>
    );
};

export default Filter;