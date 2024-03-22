import { Container } from "./style";
import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi"

export function CreateMovie(){
    return (
        <Container>
            <Header/>

            <Link to="/">
                <div className="linkContent">
                    <FiArrowLeft/> Voltar
                </div>
            </Link>

            <h1>Novo Filme</h1>
            
            <div className="mainContent">
                <Input placeholder="Título"/>
                <Input placeholder="Sua nota (de 0 a 5)"/>
                <Input placeholder="Observações"/>
            </div>

            <h3>Marcadores</h3>

        </Container>
    )
}