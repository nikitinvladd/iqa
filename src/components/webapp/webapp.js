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
                <h1>Aplikacje internetowe</h1>
                <p className="p-gray">Uwolnij potencjał swojego biznesu! Tworzymy Aplikacji Internetowe, nasz zespół programistów i designerów przedstawi przed tobą najliepszą aplikacje, z indywidualnym designem. Zaufaj nam już dziś i otrzymaj wyniki, które przekroczą Twoje oczekiwania. </p>
                </motion.div>
                <motion.div custom={3} variants={textAnimationOpacity} className="webapp-img"><img src="/img/webapp.png" alt="web application" /></motion.div>
        </motion.div>
    )
}

export default WebApp