import './whoweare.css'
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
const textAnimationTranslateX = {
    hidden: {
        x: -100,
        opacity: 0,
    },  
    visible: custom => ({
        x: 0,
        opacity: 1,
        transition: { delay: custom * 1},
    }),
}

const WhoWeAre = () => {
    return(
        <motion.div id='whoweare' viewport={{amount: 0.2 , once: true}} initial="hidden" whileInView="visible"  className="who-we-are">
            <div className="maincard-img">
                <div className="whoweare-about">
                    <motion.h1 variants={textAnimationTranslateX}>Software Development Company</motion.h1>
                    <motion.p variants={textAnimationTranslateX} className='p-gray'>Ujawnimy potencjalność Twojej firmy</motion.p>
                </div>
                <div className="whoweare-philosophy">
                    <div className="block">
                    <motion.p custom={0.4} variants={textAnimationOpacity} className='p-white'>Jesteśmy doświadczonym zespołem startupowym, którego celem jest wprowadzanie innowacji na ten świat oraz promowanie i rozwój wraz z Tobą. <a href="/konsultation">Uzyskaj bezpłatną konsultację, wspólnie z naszymi ekspertamiю</a></motion.p>
                    </div>
                    <div className="block">
                    <motion.p custom={0.8} variants={textAnimationOpacity} className='p-white'>Nasz zespół aktywny, celowy, zdyscyplinowany, młody i profesjonalnym, który wierzy, że wyjątkowość we wszystkim jest naszą główną bronią.</motion.p>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default WhoWeAre