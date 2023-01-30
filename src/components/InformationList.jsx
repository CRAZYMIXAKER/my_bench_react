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
            <div className="filter-panel">
                {/*Filter*/}
                {/*Search*/}
            </div>
            <div className="filter-list">
                {/*<InformationListItem*/}
                {/*    value={"assa"}*/}
                {/*    number={2}*/}
                {/*    item={{title: 0, text: "asdadss", obs: {option: 'asdasd', osd: "asdasdf"}}}*/}
                {/*/>*/}

                {vacancies.map(vacancy =>
                    <InformationListItem post={vacancy} key={vacancy.id}/>
                )}
            </div>
        </main>
    );
};

export default InformationList;

