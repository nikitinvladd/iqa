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
                <h1>Strony Internetowe</h1>
                <p className='p-gray'>Przedstaw sobie lub swoj biznes swiatu, za pomocą indywidualnego design i tajny klucz sprzedaży od naszych reklamodawców.</p>
            </motion.div>
            <motion.div custom={3.2} variants={textAnimationOpacity} className="websites-img"><img src="/img/webapp.png" alt="" /></motion.div>
        </motion.div>
    )
}

export default Websites