import './wecanhelp.css'
// import Typed from 'typed.js'
// import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const textAnimation = {
    hidden: {
        x: -100,
        opacity: 0,
    },  
    visible: custom => ({
        x:0,
        opacity: 1,
        transition: { delay: custom * 0.2},
    }),
}

const WeCanHelp = () => {
    // const el = useRef(null);
    // useEffect(() => {
    //     const typed = new Typed(el.current, {
    //       strings: ["We can help you reimagine your business through a digital lens."],
    //       typeSpeed: 30,
    //       backSpeed: 30,
    //       backDelay: 500,
    //       startDelay: 1000,
    //       loop: false,
    //     });
    

    //     return () => {
    //       typed.destroy();
    //     };
    //   }, []);
    
    return(
        <motion.div viewport={{amount: 0.2 ,once: true}} initial="hidden" whileInView="visible" className="wecanhelp">
            <motion.h1 custom={2.5} variants={textAnimation}>
Odblokuj potencjał swojego biznesu, przyjmując cyfrowe podejście pod naszym przewodnictwem.</motion.h1>
        </motion.div>
    )
}

export default WeCanHelp