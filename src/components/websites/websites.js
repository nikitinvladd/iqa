import './websites.css';
import { motion } from "framer-motion";

const textAnimationOpacity = {
    hidden: {
        opacity: 0,
    },  
    visible: custom => ({
        opacity: 1,
        transition: { delay: custom * 0.2},
    }),
}

const Websites = () => {
    return(
        <motion.div viewport={{once: true}} initial="hidden" whileInView="visible" className="websites">
            <motion.div custom={1} variants={textAnimationOpacity} className="websites-information">
                <p className="p-red-websites">W E B S I T E S</p>
                <h1>Tworzenie stron internetowych</h1>
                <p className='p-gray'><b>Zaprezentuj swoje pomysły!</b> Strony internetowe to transformacyjne narzędzie, które może zrewolucjonizować Twoją obecność w Internecie. Te dynamiczne i interaktywne strony internetowe, dostępne za pośrednictwem przeglądarek internetowych, oferują szeroki zakres funkcji, które usprawniają operacje biznesowe. Dowiedz się, w jaki sposób nasza usługa tworzenia stron internetowych może przynieść korzyści Twojej firmie:<br></br>
                <b>Indywidualne rozwiązania dla firm:</b> Nasze niestandardowe strony internetowe są zaprojektowane tak, aby spełniały unikalne wymagania biznesowe, zapewniając idealne dopasowanie do konkretnych potrzeb i celów.<br></br>
                <b>Wspieranie rozwoju biznesu dzięki technologii:</b> Wykorzystaj moc tworzenia stron internetowych, aby popchnąć swoją firmę do przodu. Dzięki naszemu doświadczeniu możesz wykorzystać najnowocześniejsze technologie, aby zwiększyć produktywność, poprawić doświadczenia klientów i napędzać zrównoważony wzrost.<br></br>
                <b>Przedsiębiorcy i startupy budujące swój cyfrowy ślad:</b> Zapewnij swojej firmie cyfrową przewagę, której potrzebuje. Nasze usługi tworzenia stron internetowych mogą pomóc w budowaniu silnej obecności online, umożliwiając skuteczne angażowanie i łączenie się z docelowymi odbiorcami.
                </p>
            </motion.div>
            <motion.div custom={3.2} variants={textAnimationOpacity} className="websites-img"><img src="/img/webapp.png" alt="IQA - Websites" /></motion.div>
        </motion.div>
    )
}

export default Websites