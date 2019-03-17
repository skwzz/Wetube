import app from "./app";
import testApp from "./testApp";
const PORT = 4040;
const PORT2 = 4041;
const handleListening = () =>
  console.log(`Listening on : http://localhost:${PORT}`);

const handleListening2 = () =>
  console.log(`Listening on : http://localhost:${PORT2}`);

app.listen(PORT, handleListening);
//testApp.listen(PORT2, handleListening2);
