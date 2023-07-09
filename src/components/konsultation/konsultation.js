import React from "react";
import { InlineWidget } from "react-calendly";
import './konsultation.css';

const Konsultation = () => {
    return(
        <div className="konsultation">
             <InlineWidget className="inlinewidgetcalendly" url="https://calendly.com/vladnikitin/iqa-free-democall"
             styles={{height: '450px', width: '400px', borderRadius: '20px'}}
             />
            <div className="konsultation-form">
                <p className='p-red'>C O N T A C T</p>
                <h1>Skontaktuj się z nami</h1>
                <p className='p-gray'>Jeśli masz jakieś pytania lub potrzebujesz pomocy w tworzeniu, pozycjonowaniu lub promowaniu swojej strony internetowej, zapraszamy do kontaktu z nami.<br/><br/>
                    Możesz do nas zadzwonić, napisać e-mail lub wypełnić formularz kontaktowy.<br/><br/>
                    Odpowiemy najszybciej jak to możliwe i zaproponujemy najlepsze rozwiązania dla Twoich potrzeb. Nie zwlekaj i skontaktuj się z nami już dziś!</p>
                </div>
        </div>
    )
}

export default Konsultation;