import './Library.css'
import Header from "../../components/header/Header.jsx";
function Library() {
    return (
        <div>
            {Header}
            <section>
                <h2>Library</h2>
                <div>
                    10 cards
                </div>
            </section>
        </div>
    );
}

export default Library;