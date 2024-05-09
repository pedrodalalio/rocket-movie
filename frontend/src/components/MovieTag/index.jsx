import { Container } from "./style";

export function MovieTag({ title, ...rest }){
    return(
        <Container {...rest}>
            {title}
        </Container>
    )
}