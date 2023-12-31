import './webapp.css';
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
const WebApp = () => {
    return(
        <motion.div viewport={{once: true}} initial="hidden" whileInView="visible" className="webapp">
            <motion.div custom={1} variants={textAnimationOpacity} className="web-information">
            <p className="p-red-webapp">A P P</p>
                <h1>Tworzenie aplikacji internetowych</h1>
                <p className="p-gray"><b>Aplikacje internetowe</b> to transformacyjne narzędzia, które mogą zrewolucjonizować Twoją obecność w Internecie. Te dynamiczne i interaktywne aplikacje, dostępne za pośrednictwem przeglądarek internetowych, oferują szeroki zakres funkcji, które usprawniają operacje biznesowe. Odkryj, w jaki sposób nasza usługa Web App może przynieść korzyści Twojej firmie:<br></br>
                <b>Przedsiębiorstwa poszukujące rozwiązań dostosowanych do ich potrzeb:</b> Nasze aplikacje internetowe są tworzone na zamówienie, aby spełnić unikalne wymagania biznesowe, zapewniając idealne dopasowanie aplikacji do konkretnych potrzeb i celów.<br></br>
                <b>Firmy rozwijające się dzięki technologii:</b> Wykorzystaj moc Web Apps, aby popchnąć swoją firmę do przodu. Dzięki naszemu doświadczeniu możesz wykorzystać najnowocześniejsze technologie, aby zwiększyć produktywność, poprawić doświadczenia klientów i napędzać zrównoważony wzrost.<br></br>
                <b>Przedsiębiorcy i startupy tworzące cyfrowy ślad:</b> Zapewnij swojej firmie cyfrową przewagę, której potrzebuje. Nasze aplikacje internetowe mogą pomóc w zbudowaniu silnej obecności w Internecie, umożliwiając skuteczne dotarcie do docelowych odbiorców i nawiązanie z nimi kontaktu.</p>
                </motion.div>
                <motion.div custom={3} variants={textAnimationOpacity} className="webapp-img"><img src="/img/webapp.png" alt="IQA - Web Application" /></motion.div>
        </motion.div>
    )
}

export default WebApp