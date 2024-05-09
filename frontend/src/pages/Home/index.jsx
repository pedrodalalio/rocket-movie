import { Container, Content } from "./style"

import { Header } from "../../components/Header"
import { Button } from "../../components/Button"
import { Movie } from "../../components/Movie"
import { FiPlus } from "react-icons/fi"

export function Home(){
    return(

        <Container>
            <Header/>

            <div className="contentTitle">
                <h3>Meus Filmes</h3>
                <Button title={<><FiPlus/> Adicionar filme</>} />
            </div>

            <Content>
                <Movie rating={4}/>
                <Movie rating={3}/>
                <Movie rating={4}/>
                <Movie rating={3}/>
                <Movie rating={4}/>
                <Movie rating={3}/>
                <Movie rating={4}/>
                <Movie rating={3}/>
            </Content>

        </Container>

    )
}