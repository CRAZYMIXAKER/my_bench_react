import InformationListItem from "./InformationListItem";
import '../styles/components/InformationList.scss'

const InformationList = ({posts}) => {

    if (!posts.length) {
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

                {posts.map(post =>
                    <InformationListItem post={post} key={post.id}/>
                )}
            </div>
        </main>
    );
};

export default InformationList;

