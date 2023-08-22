import "./css/pruducts.css";
import Pruduct from "./Pruduct.js";
import { useGlobalState } from "../State/State";

export default function Pruducts() {
  const [components] = useGlobalState("components");
  const [pruductType] = useGlobalState("pruductType");


  return (
    <div>
      {components ? (
        pruductType === "LAYERS" ? (
          <Pruduct type={"LAYERS"} />
        ) : pruductType === "COMPONENTS" ? (
          <Pruduct type={"COMPONENTS"} />
        ) : (
          <Pruduct type={""} />
        )
      ) : (
        <Pruduct type={""} />
      )}
    </div>
  );
}
