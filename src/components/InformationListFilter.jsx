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
        // const newArray = filters.filter((n, i, a) => a.filter(m => m[0] === n[0]).length > 1);
        const newArray = Object.entries(filters).map(dropdown => {
            const result = dropdown[1].filter(item => item['checked'] === true);
            // console.log(result.length);
            if (result.length > 0) {
                console.log('asdasd');
                return [dropdown[0], dropdown[1].filter(item => item['checked'] === true)];
            }
            return ;
        });
        console.log(newArray);
        if (newArray.length > 0) {
            // console.log(newArray)
            for (let i = 0; i < newArray.length; i++) {
                // console.log(newArray[i][1]);
                // setFilteredArray({...filteredArray, [newArray[i][0]]: newArray[i][1]});
                // console.log(newArray[i][0]);
                // console.log(newArray[i][1]);
            }
            // console.log('sss');
            // console.log(sss);
            // setFilter({...filter, filters: newArray});
        }
    }, [filters]);
    // console.log(filters);

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