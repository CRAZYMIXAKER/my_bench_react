import {useMemo} from "react";

export const useVacancies = (vacancies, query) => {
    //more filters

    const filteredAndSearchedVacancies = useMemo(() => {
        return vacancies.filter(vacancy => vacancy.description.toLowerCase().includes(query.toLowerCase()))
    }, [query, vacancies])

    return filteredAndSearchedVacancies;
}