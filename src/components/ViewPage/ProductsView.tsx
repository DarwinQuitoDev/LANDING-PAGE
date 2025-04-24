import Footer from "../common/FooterCom"
import Header from "../common/HeaderCom"
import CategoryFilter from "../common/CategoryFilters"
import LogoClouds from '../common/LogoClouds'
import ContactSections from '../common/ContactSections'

function App() {

    return (
        <div>
            <section>
                <Header />
            </section>
            <main>
                <section id="tienda">
                    <CategoryFilter />
                </section>
                <section>
                    <LogoClouds />
                </section>
                <section id="contactos">
                    <ContactSections />
                </section>
            </main>
            <section >
                <Footer />
            </section>
        </div>
    )
}

export default App
