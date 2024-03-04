import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/product");
  }
  return <button onClick={handleClick}>Go to Product</button>;
}
export default App;
