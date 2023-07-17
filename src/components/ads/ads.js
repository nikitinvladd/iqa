import './ads.css';
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
const Ads = () => {
    return(
        <motion.div viewport={{once: true}} initial="hidden" whileInView="visible" className="ads">
            <motion.div custom={1} variants={textAnimationOpacity} className="ads-information">
                <p className="p-red-ads">A D S</p>
                <h1>Reklama</h1>
                <p className="p-gray"><b>Internetowa reklama</b> to rewolucyjne narzędzia, które sprawią, że Twoja obecność w świecie reklamy będzie silniejsza i bardziej wpływowa. Odkryj korzyści płynące z naszego zindywidualizowanego podejścia do rozwoju Twojej firmy i dowiedz się, jak może ono zmienić Twoją firmę w prawdziwego giganta reklamowego:<br></br>
                <b>Nasze rozwiązania reklamowe</b> są tworzone na zamówienie, aby w pełni spełnić Twoje unikalne wymagania reklamowe, zapewniając idealne połączenie funkcjonalności i celów Twojej firmy.<br></br>
                <b>Dla przedsiębiorców i startapów chcących podbić świat reklamy i zrobic wybuchową sprzedaz:</b> Wykorzystaj pełną moc Advertising Web Apps, aby przenieść swój startup na wyższy poziom. Nasza wiedza specjalistyczna wykorzystuje najnowocześniejsze technologie w celu zwiększenia produktywności, poprawy obsługi klienta i napędzania zrównoważonego wzrostu firm reklamowych.<br></br>
                <b>Dla firm, które chcą pozostawić cyfrowy ślad na świecie:</b> Daj swojej firmie cyfrową przewagę, na jaką zasługuje. Nasi eksperci mogą pomóc w stworzeniu silnej obecności online, zapewniając skuteczne zaangażowanie odbiorców docelowych i budowanie długoterminowych relacji.
                </p>
            </motion.div>
            <motion.div custom={3} variants={textAnimationOpacity} className="ads-img"><img src="/img/ads.png" alt="advertising" /></motion.div>
        </motion.div>
    )
}

export default Ads