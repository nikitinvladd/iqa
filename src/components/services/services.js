import './services.css';
import { motion } from "framer-motion";

const textAnimationOpacity = {
    hidden: {
        opacity: 0,
    },  
    visible: custom => ({
        opacity: 1,
        transition: { delay: custom * 1},
    }),
}
const Services = () => {
return(
    <motion.div viewport={{amount: 0.2 ,once: true}} initial="hidden" whileInView="visible" className="our-services">
        <div className="maintext-services"><h1>Our services</h1></div>
        <div className="services-card">
            <motion.div custom={0.4} variants={textAnimationOpacity} className="card">
                <div className="content"><a href="/webapp"><h1>Application Development</h1><p>Uwolnij potencjał swojego biznesu! Tworzymy Aplikacji Internetowe, nasz zespół programistów i designerów przedstawi przed tobą najliepszą aplikacje, z indywidualnym designem.</p></a></div>
                </motion.div>
            <motion.div custom={0.8} variants={textAnimationOpacity} className="card">
                <div className="content"><a href="/websites"><h1>Websites</h1><p>Przedstaw sobie lub swoj biznes swiatu, za pomocą indywidualnego design i tajny klucz sprzedaży od naszych reklamodawców.</p></a></div>
                </motion.div>
            <motion.div custom={1.2} variants={textAnimationOpacity} className="card">
                <div className="content"><a href="/bots"><h1>Software Enginnering</h1><p>Potrzebujesz specjalistów w sfierze Software Enginnering? Nasz zespól przedstawi tobie najliepsze rozwiązanie twoich pomysłów.</p></a></div>
                </motion.div>
            <motion.div custom={1.6} variants={textAnimationOpacity} className="card">
                <div className="content"><a href="/ads"><h1>Advertising</h1><p>Mamy tajną formułę lejka sprzedażowego, która pomoże Ci nie tylko uwolnić potencjał Twojego biznesu, ale także eksplodować sprzedaż i wzbić się na najwyższy poziom!</p></a></div>
                </motion.div>
        </div>
        </motion.div>
)
}

export default Services