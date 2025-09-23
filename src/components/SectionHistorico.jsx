import React, { useState } from "react";
import { ArrowRightLeft } from "lucide-react";
import { eachDayOfInterval, startOfYear, endOfYear, format } from "date-fns";
import { ptBR } from "date-fns/locale";


export default function SectionHistorico({ atual }) {
    const [visibleHist, setVisibleHist] = useState(true);

    // gera todos os dias do ano atual
    const historico = eachDayOfInterval({
        start: startOfYear(new Date()),
        end: endOfYear(new Date()),
    }).map((date, index) => ({
        id: index,
        dia: format(date, "d 'de' MMMM", { locale: ptBR }),
    }));


    return (
        <section className="max-w-[1000px] my-0 mx-auto">
            <h1 className={`cursor-pointer my-10 text-2xl text-center flex justify-center items-center gap-2 ${atual ? "text-black" : "text-white"}`} onClick={() => setVisibleHist(!visibleHist)}>Historico aqui <ArrowRightLeft className="text-yellow-400" /></h1>
            <div className={`flex gap-4 justify-center flex-col py-5 px-5 ${atual ? "bg-[rgba(0,0,0,0.2)]" : "bg-[rgba(255,255,255,0.2)]"}`}>
                <div className="flex items-center gap-2">
                    <h2 className="text-white">Histórico Hoje:</h2>
                    <div className="w-3 h-3 bg-green-300 cursor-pointer" title="3 clicos concluido"></div>
                </div>
                <div className="flex flex-col">
                    <div className="flex justify-between">
                        <span>janeiro</span>
                        <span>fevereiro</span>
                        <span>março</span>
                        <span>abril</span>
                        <span>maio</span>
                        <span>junho</span>
                        <span>julho</span>
                        <span>agosto</span>
                        <span>setembro</span>
                        <span>outubro</span>
                        <span>novembro</span>
                        <span>Dezembro</span>
                    </div>
                    <div className={`p-1 grid grid-rows-7 grid-flow-col gap-1 mt-3 ${atual ? "bg-[rgba(0,0,0,0.1)]" : "bg-[rgba(255,255,255,0.1)]"}`}>
                        {historico.map((item) => (
                            <div key={item.id} className="w-3 h-3 bg-green-300 cursor-pointer" title={item.dia}></div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}