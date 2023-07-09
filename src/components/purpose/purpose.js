import './purpose.css';

function Purpose(){
    return(
        <div id="purpose-nav" className="purpose">
            <div className="purpose-text"><p className="filozofia-p">F I L O Z O F I A</p><h1>Jaka jest filozofia naszej firmy?</h1><p>Filozofia naszej firmy koncentruje się na sukcesie klienta. Naszym celem jest zapewnienie, że twój biznes osiąga sukces. W sferze rozwoju Frontend stawiamy na szybkość i jakość. Dążymy do tego, aby nasze rozwiązania były najszybsze i zapewniały doskonałą jakość. Twój sukces jest dla nas najważniejszy.</p></div>
            <div className="purpose-img">
                <div className="elem">
                    <img src="/img/user-solid.svg" alt="" />
                <h1>Sukces klienta</h1>
                <p>To jest esencja twojego biznesu, Twój sukces jest naszym celem</p>
                </div>
                <div className="elem">
                <img src="/img/signal-solid.svg" alt="" />
                <h1>Osiągi</h1>
                <p>W sferze rozwoju Frontend zwycięstwo należy do tego, który wyłania się jako najszybszy.</p>
                </div>
                <div className="elem">
                <img src="/img/gauge-solid.svg" alt="" />
                <h1>Jakość i Szybkość</h1>
                <p>To jest esencja twojego biznesu, Twój sukces jest naszym celem</p>
                </div>
            </div>
        </div>
    )
}

export default Purpose;