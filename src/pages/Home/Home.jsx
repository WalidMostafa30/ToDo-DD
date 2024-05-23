import { Container } from "react-bootstrap";
import Inputs from "../../components/inputs/Inputs";
import "./Home.css";
import Boxs from "../../components/boxs/Boxs";

const Home = () => {
  return (
    <section className="Home">
      <Container className="Home__container">
        <Inputs />
        <Boxs />
      </Container>
    </section>
  );
};

export default Home;
