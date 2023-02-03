import React, {useState} from 'react';
import MyInput from "./UI/input/MyInput";
import Filter from "./UI/filter/Filter";

const InformationListFilter = ({filter, setFilter}) => {
    const [filters, setFilters] = useState({
            "role": [
                {
                    name: "Frontend",
                    checked: false
                },
                {
                    name: "Backend",
                    checked: false
                },
                {
                    name: "Full Stack",
                    checked: false
                },
                {
                    name: "BA",
                    checked: false
                }, {
                    name: "PM",
                    checked: false
                }, {
                    name: "QA",
                    checked: false
                }, {
                    name: "Designer",
                    checked: false
                }, {
                    name: "Mobile",
                    checked: false
                }, {
                    name: "Devops",
                    checked: false
                },
            ]
        }
    )

    return (
        <div>
            <Filter
                // key={arrayFilterRole[0]}
                filters={filters}
                setFilters={setFilters}
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