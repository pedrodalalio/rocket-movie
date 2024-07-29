import { useState } from "react";
import { Container, Form, Background, CreateAccount } from "./style";
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { FiLock, FiMail } from "react-icons/fi"
import { useAuth } from "../../hooks/auth";

export function SignIn(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { signIn } = useAuth();

    function handleSignIn(){
        signIn({ email, password })
    }

    return(
        <Container>
            <Form>
                <h1>Rocket Movies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>

                <h2>Faça seu login</h2>

                <Input
                    placeholder="E-mail"
                    type="text"
                    icon={FiMail}
                    onChange={e => setEmail(e.target.value)}
                />

                <Input
                    placeholder="Senha"
                    type="password"
                    icon={FiLock}
                    onChange={e => setPassword(e.target.value)}
                />

                <Button title="Entrar" onClick={handleSignIn}/>

                <CreateAccount to="/register">
                    Criar Conta
                </CreateAccount>
            </Form>
            
            <Background/>

        </Container>
    )
}