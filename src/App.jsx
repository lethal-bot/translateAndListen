import Header from "./components/Header";
import Form from "./components/Form";
import Container from "./components/Container";
import Audio from "./components/Audio";
function App() {
  return (
    <>
      <Header />
      <Container>
        <Form />
      </Container>
      <Audio languageCode="hi" text="नमस्ते, मैं आदित्य केशरी हूं" />
    </>
  );
}

export default App;
