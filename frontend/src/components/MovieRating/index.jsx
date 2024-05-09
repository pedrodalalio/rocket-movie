import { Container } from "./style";
import { FaStar, FaRegStar } from "react-icons/fa";

export function MovieRating({ quantity }) {
    const stars = Array.from({ length: 5 }, (_, index) => (
        quantity > index ? <FaStar key={index} /> : <FaRegStar key={index} />
    ));
    
    return <Container>{stars}</Container>;
}
