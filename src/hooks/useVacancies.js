import {useMemo} from "react";

export const useVacancies = (vacancies, query, filters) => {
    const filteredAndSearchedVacancies = useMemo(() => {
        if (filters) {
            // console.log(filters);
        }
        return vacancies.filter(vacancy => vacancy.description.toLowerCase().includes(query.toLowerCase()))
    }, [query, filters, vacancies]);

    return filteredAndSearchedVacancies;
}
