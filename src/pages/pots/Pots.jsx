import { useCollection } from "../../hooks/useCollection";
import "./Pots.scss";

function Pots() {
  const { data } = useCollection("pots");
  console.log(data);
  return <div>Pots</div>;
}

export default Pots;
