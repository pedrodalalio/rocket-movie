import { Container, Form, Background, CreateAccount } from "./style";
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { FiLock, FiMail } from "react-icons/fi"

export function SignIn(){
    return(
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>

                <h2>Faça seu login</h2>

                <Input
                    placeholder="E-mail"
                    type="text"
                    icon={FiMail}
                />

                <Input
                    placeholder="Senha"
                    type="password"
                    icon={FiLock}
                />

                <Button title="Entrar"/>

                <CreateAccount to="/register">
                    Criar Conta
                </CreateAccount>
            </Form>
            
            <Background/>

            
        </Container>
    )
}