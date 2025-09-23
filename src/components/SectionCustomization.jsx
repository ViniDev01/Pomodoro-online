import { useState } from "react";
import { ArrowRightLeft } from "lucide-react";



export default function SectionCustomization({ atual, time, setTime, setTimeCurto, timeCurto, timeLonga, setTimeLonga, maxCiclos, setMaxCiclos }) {
    const [inputValue, setInputValue] = useState(() => {
        const saved = localStorage.getItem("pomodoroConfig");
        return saved ? JSON.parse(saved).inputValue : time;
    });

    const [valueCurta, setValueCurta] = useState(() => {
        const saved = localStorage.getItem("pomodoroConfig");
        return saved ? JSON.parse(saved).valueCurta : timeCurto;
    });

    const [valueLonga, setValueLonga] = useState(() => {
        const saved = localStorage.getItem("pomodoroConfig");
        return saved ? JSON.parse(saved).valueLonga : timeLonga;
    });

    const [valueCiclos, setValueCiclos] = useState(() => {
        const saved = localStorage.getItem("pomodoroConfig");
        return saved ? JSON.parse(saved).valueCiclos : maxCiclos;
    });

    const [visibleCust, setVisibleCust] = useState(false);



    function handleChange(e) {
        const {name, value} = e.target;

        if(name === "foco") {
            setInputValue(Number(value));
        } else if(name === "pausaCurta"){
            setValueCurta(Number(value));
        }else if(name === "pausaLonga") {
            setValueLonga(Number(value));
        }else if (name === "maxCiclos") {
            setValueCiclos(Number(value));
        }
    }

    function handleOk() {
        setTime(inputValue);
        setTimeCurto(valueCurta);
        setTimeLonga(valueLonga);
        setMaxCiclos(valueCiclos);

        // Salva tudo no localStorage
        const config = {
            inputValue,
            valueCurta,
            valueLonga,
            valueCiclos
        };
        localStorage.setItem("pomodoroConfig", JSON.stringify(config));
    }

    const handleKeyDown = (e) => {
        if(e.key !== "ArrowUp" && e.key !== "ArrowDown") {
            e.preventDefault();
        }
    }
    
    


    return (
        <section className="max-w-[1000px] my-0 mx-auto">
            <h2 className={`cursor-pointer my-10 text-2xl text-center flex justify-center items-center gap-2 ${atual ? "text-black" : "text-white"}`} onClick={() => setVisibleCust(!visibleCust)}>Customizar aqui <ArrowRightLeft className="text-yellow-400"/></h2>

            {visibleCust && (
                <div className={`flex gap-8 justify-center py-11 ${atual ? "bg-[rgba(0,0,0,0.2)]" : "bg-[rgba(255,255,255,0.2)]"}`}>
                    <div className="flex gap-2">
                        <h2 className={`${atual ? "text-black" : "text-white"}`}>Foco: </h2>
                        <input type="number" className="w-11 h-6 outline-none" name="foco" value={inputValue} onChange={handleChange} min={1} onKeyDown={handleKeyDown} onCut={(e) => e.preventDefault()} onDragStart={(e) => e.preventDefault()} />
                    </div>
                    <div className="flex gap-2">
                        <h2 className={`${atual ? "text-black" : "text-white"}`}>Pausa Curta: </h2>
                        <input type="number" className="w-11 h-6 outline-none" name="pausaCurta" value={valueCurta} onChange={handleChange} min={1} onKeyDown={handleKeyDown} onCut={(e) => e.preventDefault()} onDragStart={(e) => e.preventDefault()} />
                    </div>
                    <div className="flex gap-2">
                        <h2 className={`${atual ? "text-black" : "text-white"}`}>Pausa Longa: </h2> 
                        <input type="number" className="w-11 h-6 outline-none" name="pausaLonga" value={valueLonga} onChange={handleChange} min={1} onKeyDown={handleKeyDown} onCut={(e) => e.preventDefault()} onDragStart={(e) => e.preventDefault()} />
                    </div>
                    <div className="flex gap-2">
                        <h2 className={`${atual ? "text-black" : "text-white"}`}>Ciclos até pausa longa: </h2>
                        <input type="number" className="w-11 h-6 outline-none" name="maxCiclos" value={valueCiclos} onChange={handleChange} min={2} onKeyDown={handleKeyDown} onCut={(e) => e.preventDefault()} onDragStart={(e) => e.preventDefault()}  />
                    </div>

                    <button className="bg-blue-600 py-0 px-3 active:bg-blue-700 transition-colors duration-200 " onClick={handleOk}>OK</button>
                </div>
            )}
        
        </section>
    )
}