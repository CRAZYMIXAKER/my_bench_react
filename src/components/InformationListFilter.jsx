import React, {useMemo, useState} from 'react';
import MyInput from "./UI/input/MyInput";
import Filter from "./UI/filter/Filter";

const InformationListFilter = ({filter, setFilter}) => {
    const [filteredArray, setFilteredArray] = useState({});
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

    useMemo(() => {
        const newArray = Object.entries(filters).map(dropdown => {
            const result = dropdown[1].filter(item => item['checked'] === true);
            if (result.length > 0) {
                return [dropdown[0], dropdown[1].filter(item => item['checked'] === true)];
            }
        }).filter(nnn => (nnn !== undefined));

        if (newArray.length > 0) {
            for (let i = 0; i < newArray.length; i++) {
                setFilteredArray({...filteredArray, [newArray[i][0]]: newArray[i][1]});
            }
            setFilter({...filter, filters: filteredArray});
        } else {
            setFilter({...filter, filters: {}});
        }
    }, [filters]);

    return (
        <div>
            <Filter
                filters={filters}
                setFilters={setFilters}
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