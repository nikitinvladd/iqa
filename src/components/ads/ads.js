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
                <p className="p-gray">Mamy tajną formułę lejka sprzedażowego, która pomoże Ci nie tylko uwolnić potencjał Twojego biznesu, ale także eksplodować sprzedaż i wzbić się na najwyższy poziom!</p>
            </motion.div>
            <motion.div custom={3} variants={textAnimationOpacity} className="ads-img"><img src="/img/ads.png" alt="" /></motion.div>
        </motion.div>
    )
}

export default Ads