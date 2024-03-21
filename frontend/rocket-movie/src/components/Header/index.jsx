import { Container, Profile, Logout, Search } from "./style";
import { Input } from "../../components/Input"

export function Header(){
    return(
        <Container>
            <h2>RocketMovies</h2>

            <Search>
                <Input placeholder="Pesquisar pelo título"/>
            </Search>

            <Profile to="/profile">
                <div>
                    <strong>Pedro Dalalio</strong>
                    <Logout>
                        Sair
                    </Logout>
                </div>
                <img src="https://github.com/pedrodalalio.png" alt="Foto do usuário" />
            </Profile>
        </Container>
    );
}