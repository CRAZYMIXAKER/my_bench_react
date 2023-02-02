import React from 'react';
import DropdownItemCheckbox from "./DropdownItemCheckbox";

const Dropdown = ({form}) => {
    return (
        <div className="filter-dropdown">
            <form key={form[0]}
                  name={form[0]}
                // onSubmit={saveFilter}
            >
                <DropdownItemCheckbox items={form[1]}/>

                <div className="buttons">
                    <button name="save" type="submit">Save</button>
                    <button
                        name="clear"
                        type="button"
                        // onClick={form[0] => clearFilter}
                    >
                        Clear
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Dropdown;