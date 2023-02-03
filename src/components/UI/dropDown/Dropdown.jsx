import React from 'react';
import DropdownItemCheckbox from "./DropdownItemCheckbox";

const Dropdown = ({form, filter, setFilter, filterRole, setFilterRole}) => {
    // const clearFilter = (formName) => {
    //     // item.checked = false;
    //     return setFilter({...filter, filters: {[formName]: []}})
    // }

    // const saveFilter = (e) => {
    //     e.preventDefault();
    //     let formName = e.target.name;
    //     let formValues = [];
    //
    //     Object.values(e.target).map(item => {
    //         item.checked && formValues.push(item.name);
    //     });
    //     return setFilter({...filter, filters: {[formName]: formValues}})
    // }

    return (
        <div className="filter-dropdown">
            <form key={form[0]}
                  name={form[0]}
                // onSubmit={saveFilter}
            >

                <DropdownItemCheckbox
                    items={form[1]}
                    filterName={form[0]}
                    filterRole={filterRole}
                    setFilterRole={setFilterRole}
                />

                <div className="buttons">
                    <button name="save" type="submit">Save</button>
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
    );
};

export default Dropdown;