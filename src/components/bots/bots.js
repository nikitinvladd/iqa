import './bots.css';
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
const Bots = () => {
    return(
        <motion.div viewport={{once: true}} initial="hidden" whileInView="visible" className="bots">
            <motion.div custom={1} variants={textAnimationOpacity} className="bots-information">
                <p className='p-red-bots'>B O T S</p>
                <h1>BOTY</h1>
                <p className='p-gray'>Potrzebujesz specjalistów w sfierze Software Enginnering? Nasz zespól przedstawi tobie najliepsze rozwiązanie twoich pomysłów.</p>
            </motion.div>
            <motion.div custom={3} variants={textAnimationOpacity} className="bots-img"><img src="/img/bot.png" alt="" /></motion.div>
        </motion.div>
    )
}
export default Bots