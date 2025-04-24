import Footer from "../common/FooterCom"
import Header from "../common/HeaderCom"
import Item from "../common/ItemCom"
import StartCom from "../common/StartCom"
import FeatureSections from '../common/FeatureSections'
import LogoClouds from '../common/LogoClouds'
import ContactSections from '../common/ContactSections'

function App() {

  return (
    <div>
      <section>
        <Header />
      </section>
      <main>
        <section id="principal">
          <StartCom />
        </section>
        <section>
          <FeatureSections />
        </section>
        <section>
          <LogoClouds />
        </section>
        <section id="ofertas">
          <Item />
        </section>
        <section>
          <LogoClouds />
        </section>
        <section id="contactos">
          <ContactSections/>
        </section>
      </main>
      <section >
        <Footer />
      </section>
    </div>
  )
}

export default App
