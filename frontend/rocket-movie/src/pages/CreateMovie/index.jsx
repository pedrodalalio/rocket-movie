import { Container } from "./style";
import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi"

export function CreateMovie(){
    return (
        <Container>
            <Header/>

            <main>
                <Link to="/">
                    <div className="linkContent">
                        <FiArrowLeft/> Voltar
                    </div>
                </Link>

                <h1>Novo Filme</h1>
                
                <div className="mainContent">
                    <div className="sideBySideInputs">
                        <Input placeholder="Título"/>
                        <Input placeholder="Sua nota (de 0 a 5)"/>
                    </div>
                    <Input placeholder="Observações"/>
                </div>

                <div className="">
                    <h3>Marcadores</h3>
                    
                </div>

                <div className="">
                    <Button title="Excluir Filme"/>
                    <Button title="Salvar alterações"/>
                </div>
            </main>
        </Container>
    )
}