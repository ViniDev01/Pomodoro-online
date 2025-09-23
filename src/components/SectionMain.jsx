
export function Input({ visiblePausa, tempo, atual, formatarTempo, valor }) {
    return (
        visiblePausa === tempo && (
            <input type="text" className={`text-[3rem] text-center bg-transparent border-none outline-none ${atual ? "text-black" : "text-white"}`} readOnly value={formatarTempo(valor)}/>
        )
        
    )
}

export default function SectionMain({ atual, timing, setTiming, formatarTempo, setRodando, time, pausaCurta, pausaLonga, visiblePausa, setVisiblePausa }) {

    return (
        <section className="flex items-center flex-col">
            {visiblePausa === "foco" && (
                <h2 className={`block mt-[70px] ${atual ? "text-black" : "text-white"}`}>foco</h2>
            )}

            {visiblePausa === "pausaCurta" && (
                <h2 className={`block mt-[70px] ${atual ? "text-black" : "text-white"}`}>pausa curta</h2>
            )}

            {visiblePausa === "pausaLonga" && (
                <h2 className={`block mt-[70px] ${atual ? "text-black" : "text-white"}`}>pausa longa</h2>
            )}

            <div className={`mt-3 w-[400px] h-[400px] flex justify-center items-center border rounded-full ${atual ? "border-black" : "border-white"}`}>

                <Input visiblePausa={visiblePausa} tempo="foco" atual={atual} formatarTempo={formatarTempo} valor={timing} />
                <Input visiblePausa={visiblePausa} tempo="pausaCurta" atual={atual} formatarTempo={formatarTempo} valor={pausaCurta} />
                <Input visiblePausa={visiblePausa} tempo="pausaLonga" atual={atual} formatarTempo={formatarTempo} valor={pausaLonga} />
                
            </div>

            <div className="mt-[30px] flex gap-[20px]">
                <button className={`py-2.5 px-10 rounded-lg hover:scale-110 transition-transform duration-300 ${atual ? "bg-gray-950 text-white" : "bg-sky-50 text-black"}`} onClick={() => setRodando(true)}>Iniciar</button>
                <button className={`py-2.5 px-10 rounded-lg hover:scale-110 transition-transform duration-300 ${atual ? "bg-gray-950 text-white" : "bg-sky-50 text-black"}`} onClick={() => setRodando(false)}>Pausar</button>
                <button className={`py-2.5 px-10 rounded-lg hover:scale-110 transition-transform duration-300 ${atual ? "bg-gray-950 text-white" : "bg-sky-50 text-black"}`} onClick={() => {setRodando(false); setTiming(time * 60); setVisiblePausa("foco")}}>Resetar</button>
            </div>
        </section>
    )
}