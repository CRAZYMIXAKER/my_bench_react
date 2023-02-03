import React from 'react';
import MyInput from "./UI/input/MyInput";
import Filter from "./UI/filter/Filter";

const InformationListFilter = ({filter, setFilter}) => {
    const arrayFilters = {
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

    return (
        <div>
            <Filter
                arrayFilters={arrayFilters}
                filter={filter}
                setFilter={setFilter}
            />
            <MyInput
                value={filter.query}
                onChange={e => setFilter({...filter, query: e.target.value})}
                placeholder="Поиск"
            />
        </div>
    );
};

export default InformationListFilter;