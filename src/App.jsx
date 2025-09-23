import React, {useState, useEffect} from "react";

import Header from "./components/Header";
import SectionCustomization from "./components/SectionCustomization";
import SectionHistorico from "./components/SectionHistorico";
import SectionMain from "./components/SectionMain";
import Login from "./components/Login";


export default function App() {
    const [atual, setAtual] = useState(false);
    const [verLogin, setVerLogin] = useState(false);
    const [time, setTime] = useState(1);
    const [timing, setTiming] = useState(() => {
        const saved = localStorage.getItem("pomodoroConfig");
        return saved ? JSON.parse(saved).inputValue * 60 : time * 60;
    });
    const [rodando, setRodando] = useState(false);
    const [timeCurto, setTimeCurto] = useState(5);
    const [pausaCurta, setPausaCurta] = useState(() => {
        const saved = localStorage.getItem("pomodoroConfig");
        return saved ? JSON.parse(saved).valueCurta * 60 : timeCurto * 60;
    });
    const [timeLonga, setTimeLonga] = useState(15);
    const [pausaLonga, setPausaLonga] = useState(() => {
        const saved = localStorage.getItem("pomodoroConfig");
        return saved ? JSON.parse(saved).valueLonga * 60 : timeLonga * 60;
    });
    const [ciclos, setCiclos] = useState(0);
    const [maxCiclos, setMaxCiclos] = useState(() => {
        const saved = localStorage.getItem("pomodoroConfig");
        return saved ? JSON.parse(saved).valueCiclos : 3;
    });
    const [visiblePausa, setVisiblePausa] = useState("foco");

    useEffect(() => {
        function salvoTiming(key, fallback) {
            const saved = localStorage.getItem("pomodoroConfig");
            if (saved) {
                return JSON.parse(saved)[key] * 60; // pega a chave certa
            }
            return fallback * 60;
        }
        setTiming(salvoTiming("inputValue", time));
        setPausaCurta(salvoTiming("valueCurta", timeCurto));
        setPausaLonga(salvoTiming("valueLonga", timeLonga));
    }, [time, timeCurto, timeLonga]);

    useEffect(() => {
        if(atual) {
            document.body.classList.add("theme-light")
        }else {
            document.body.classList.remove("theme-light")
        }
    }, [atual]);

    useEffect(() => {
        let timer;
        
        if(rodando) {
            timer = setInterval(() => {
            if (visiblePausa === "foco" && timing > 0) {
                setTiming(prev => prev - 1);
            } else if (visiblePausa === "pausaCurta" && pausaCurta > 0) {
                setPausaCurta(prev => prev - 1);
            } else if (visiblePausa === "pausaLonga" && pausaLonga > 0) {
                setPausaLonga(prev => prev - 1);
            } else {
                // Quando o tempo chega a 0, muda para a próxima pausa
                if (visiblePausa === "foco") {
                    if(ciclos < maxCiclos) {
                        setCiclos(prev => prev + 1);
                        setVisiblePausa("pausaCurta");
                        setPausaCurta(timeCurto * 60);
                    }else {
                        setCiclos(0);
                        setVisiblePausa("pausaLonga");
                        setPausaLonga(timeLonga * 60);
                    }
                } else if (visiblePausa === "pausaCurta") {
                    setVisiblePausa("foco");
                    setTiming(time * 60);
                } else if (visiblePausa === "pausaLonga") {
                    setVisiblePausa("foco");
                    setTiming(time * 60);
                }
                setRodando(false); // pausa automática após trocar
            }
        }, 50);
            
            
        }

        return () => clearInterval(timer);
    }, [rodando, visiblePausa, timing, pausaCurta, pausaLonga]);

    const formatarTempo = (segundos) => {
        const h = String(Math.floor(segundos / 3600)).padStart(2, "0");
        const m = String(Math.floor((segundos % 3600) / 60)).padStart(2, "0");
        const s = String(segundos % 60).padStart(2, "0");
        return `${h}:${m}:${s}`;
    }
    return (
        <>
            <Header setAtual={setAtual} atual={atual} setVerLogin={setVerLogin} verLogin={verLogin} />
            <SectionMain atual={atual} timing={timing} setTiming={setTiming} formatarTempo={formatarTempo} setRodando={setRodando} time={time} pausaCurta={pausaCurta} pausaLonga={pausaLonga} visiblePausa={visiblePausa} setVisiblePausa={setVisiblePausa} />
            <SectionCustomization atual={atual} time={time} setTime={setTime} setTimeCurto={setTimeCurto} timeCurto={timeCurto} timeLonga={timeLonga} setTimeLonga={setTimeLonga} maxCiclos={maxCiclos} setMaxCiclos={setMaxCiclos} />
            <SectionHistorico atual={atual} />
            {verLogin && (
                <Login setVerLogin={setVerLogin} verLogin={verLogin} />
            )}
        </>
    )
}