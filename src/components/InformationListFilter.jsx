import React, {useMemo, useState} from 'react';
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
            ],
            "seniority": [
                {
                    name: "Junior",
                    checked: false
                },
                {
                    name: "Middle",
                    checked: false
                },
                {
                    name: "Senior",
                    checked: false
                },
                {
                    name: "Tech Lead",
                    checked: false
                }
            ]
        }
    )

    const saveFilters = (e) => {
        e.preventDefault();
        const checkedArray = Object.entries(filters).map(dropdown => {
            const result = dropdown[1].filter(item => item['checked'] === true);
            if (result.length > 0) {
                return [dropdown[0], dropdown[1].filter(item => item['checked'] === true)];
            }
        }).filter(item => (item !== undefined)).reduce((previousValue, currentValue) => {
            previousValue[currentValue[0]] = currentValue[1];
            return previousValue;
        }, {});

        Object.keys(checkedArray).length > 0 ? setFilter({...filter, filters: checkedArray}) : setFilter({
            ...filter,
            filters: {}
        });

        console.log('All checked checkbox were added to filter');
    };

    return (
        <div>
            <Filter
                filters={filters}
                setFilters={setFilters}
                saveFilters={saveFilters}
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