import "./Overview.scss";
import { useCollectionsData } from "../../hooks/useCollectionsData";

function Overview() {
  const { data, isPending } = useCollectionsData();
  console.log(data);
  return (
    <div style={{ backgroundColor: "orange" }}>
      {isPending && <h2>Loading...</h2>}
    </div>
  );
}

export default Overview;
