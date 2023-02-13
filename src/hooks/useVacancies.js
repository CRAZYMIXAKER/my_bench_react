import {useMemo, useState} from "react";

export const useVacancies = (vacancies, query, filters) => {
    const [result, setResult] = useState(vacancies);
    const [filtered, setFiltered] = useState([]);

    const searchedVacancies = useMemo(() => {
        const sorted = vacancies.filter(vacancy => vacancy.description.toLowerCase().includes(query.toLowerCase()));
        setResult(sorted);
        return sorted;
    }, [vacancies, query]);

    const filteredVacancies = useMemo(() => {
        if (Object.keys(filters).length > 0) {
            console.log('useVacancies - filter');
            // const sorted = searchedVacancies.filter(vacancy => vacancy.role.includes('PM'));
            Object.entries(filters).forEach((filter) => {
                console.log('Name: ' + filter[0]);
                filter[1].forEach((item) => {
                    console.log("Item: " + item.name);
                    // console.log(searchedVacancies.filter(vacancy => vacancy[filter[0]].includes(item.name)));
                    setFiltered([...filtered, searchedVacancies.filter(vacancy => vacancy[filter[0]].includes(item.name))]);
                    console.log(filtered)
                })
                console.log('____________');
            })

            setResult(filtered);
            console.log('____________->!');
        }

        return filtered;
    }, [filters, vacancies]);

    return result;
}
