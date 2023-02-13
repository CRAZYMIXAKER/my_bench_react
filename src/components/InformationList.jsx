import InformationListItem from "./InformationListItem";
import '../styles/components/InformationList.scss'

const InformationList = ({vacancies}) => {

    if (!vacancies.length) {
        return (
            <h1 style={{textAlign: 'center'}}>
                Посты не найдены
            </h1>
        )
    }

    return (
        <main className="information-wrapper">
            {vacancies.map(vacancy => <InformationListItem post={vacancy} key={vacancy.id}/>)}
        </main>
    );
};

export default InformationList;

