import { useState } from "react";
import { Container, Form, Background, GoToLogin } from "./style";
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { FiLock, FiMail, FiUser, FiArrowLeft } from "react-icons/fi"
import { api } from "../../services/api";

import { useNavigate } from "react-router-dom"

export function SignUp(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    function handleSubmit(){
        if(!name || !email || !password){
            return alert("Preencha todos os campos");
        }

        api.post("/users", { name, email, password })
        .then(() => {
            alert("Usuário cadastrado com sucesso!");
            navigate(-1);
        })
        .catch(error => {
            if(error.response){
                return alert(error.response.data.message);
            }

            return alert("Não foi possível cadastrar usúario");
        });
    }

    return(
        <Container>
            <Form>
                <h1>Rocket Movies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>

                <h2>Crie sua conta</h2>

                <Input
                    placeholder="Nome"
                    type="text"
                    icon={FiUser}
                    onChange={(e) => setName(e.target.value)}
                />

                <Input
                    placeholder="E-mail"
                    type="text"
                    icon={FiMail}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <Input
                    placeholder="Senha"
                    type="password"
                    icon={FiLock}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <Button title="Cadastrar" onClick={handleSubmit}/>

                <GoToLogin to="/">
                    <FiArrowLeft className="arrowSVG"/> Voltar para o login
                </GoToLogin>
            </Form>

            <Background/>
        </Container>
    )
}