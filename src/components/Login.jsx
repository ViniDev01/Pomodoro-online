import React from "react";
import { X } from "lucide-react";




export default function Login({ setVerLogin, verLogin}) {
    const [open, setOpen] = React.useState(false);
    return (
        <div onClick={() => setVerLogin(false)}>
            {!open ? (
                <form action="" onClick={(e) => e.stopPropagation()} className="max-w-[550px] w-full bg-white p-10 rounded-lg flex flex-col fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-50">
                    <h1 className="text-center uppercase font-bold text-2xl">Login</h1>
                    <X className="absolute top-2 right-2 cursor-pointer" onClick={() => setVerLogin(false)}/>
                    <label htmlFor="usuario" className="flex flex-col gap-2 mt-8">
                        Usuário
                        <input type="text" id="usuario" autoComplete="username" className="h-10 p-2 border" />
                    </label>
                    <label htmlFor="senha" className="flex flex-col gap-2 mt-8">
                        Senha
                        <input type="password" id="senha" autoComplete="current-password" className="h-10 p-2 border" />
                    </label>
                    <div className="flex justify-between items-center my-6">
                        <a href="#" className="decoration-1">Esqueci minha senha</a>
                        <label htmlFor="lembre-me" className="flex items-center gap-2">
                            Lembre-me
                            <input type="checkbox" name="" id="lembre-me" /> 
                        </label>
                    </div>
                    <button type="submit" className="bg-sky-400 w-[100px] h-10 my-0 mx-auto ">Entrar</button>
                    <button type="button" className="bg-yellow-400 w-[100px] h-10 my-2 mx-auto" onClick={() => setOpen(true)}>Registra-se</button>
                </form>
            ) : (
                <form action="" onClick={(e) => e.stopPropagation()} className="max-w-[550px] w-full bg-white p-10 rounded-lg flex flex-col fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-50">
                    <h1 className="text-center uppercase font-bold text-2xl">Login</h1>
                    <X className="absolute top-2 right-2 cursor-pointer" onClick={() => setVerLogin(false)}/>
                    <label htmlFor="usuario" className="flex flex-col gap-2 mt-8">
                        Usuário
                        <input type="text" id="usuario" autoComplete="username" className="h-10 p-2 border" />
                    </label>
                    <label htmlFor="email" className="flex flex-col gap-2 mt-8">
                        Email
                        <input type="email" id="email" autoComplete="username" className="h-10 p-2 border" />
                    </label>
                    <label htmlFor="senha" className="flex flex-col gap-2 mt-8">
                        Senha
                        <input type="password" id="senha" autoComplete="current-password" className="h-10 p-2 border" />
                    </label>
                    <div className="flex justify-between items-center my-6">
                        <a href="#" className="decoration-1">Esqueci minha senha</a>
                        <label htmlFor="lembre-me" className="flex items-center gap-2">
                            Lembre-me
                            <input type="checkbox" name="" id="lembre-me" /> 
                        </label>
                    </div>
                    <button type="submit" className="bg-sky-400 w-[100px] h-10 my-2 mx-auto">Registra-se</button>
                </form>
            )}
            <div className="fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.5)] flex justify-center items-center cursor-pointer"></div>
        </div>
    )
}