import { Link } from "react-router-dom";



export default function Footer() {
    return (
        <footer>
            <span>Feito por Vinicius Santos</span>
            <Link to="/Pomodoro-online/politica-de-privacidade" className="underline" target="_blank" rel="noopener noreferrer">Politica De Privacidade</Link>
        </footer>
    )
}