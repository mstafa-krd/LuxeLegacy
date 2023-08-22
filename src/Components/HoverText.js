import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./css/HoverText.css";
import {
  faCubesStacked,
  faHourglass,
  faPaperclip,
  faSection,
  faShapes,
  faSnowflake,
  faSquareCaretUp,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import { setGlobalState, useGlobalState } from "../State/State";
export default function HoverText() {
  const [components] = useGlobalState("components");
  function handllePruductType(type) {
    components
    ? setGlobalState("components", false)
    : setGlobalState("components", true);
    setGlobalState("pruductType", type);
  }
  return (
    <div className="hover-text-div">
      <h1 className="hover-text">
        <div>
          <span className="hover-text-span">
            FIGMA'S <FontAwesomeIcon color="#C7BAFF" icon={faSnowflake} />
          </span>
          <span className="hover-text-span">
            COLLECTION <FontAwesomeIcon color="#F24E1E" icon={faHourglass} />
          </span>
          <span className="hover-text-span">OF</span>
        </div>
        <div>
          <span
            onClick={() => handllePruductType("LAYERS")}
            className="hover-text-spical"
          >
            LAYERS <span className="empty">ㅤ</span>
            <FontAwesomeIcon color="#F24E1E" icon={faCubesStacked} />
          </span>

          <span className="hover-text-span">
            AND <FontAwesomeIcon color="#0FA958" icon={faShapes} />
          </span>
          <span
            onClick={() => handllePruductType("COMPONENTS")}
            className="hover-text-spical"
          >
            COMPONENTS<p className="empty"> ㅤㅤ </p>
            <FontAwesomeIcon color="#FFC700" icon={faSun} />
          </span>
        </div>
        <div>
          <span className="hover-text-span">FOR</span>
          <span className="hover-text-span">
            YOU <FontAwesomeIcon color="#C7B9FF" icon={faPaperclip} />
          </span>
          <span className="hover-text-span">
            AND <FontAwesomeIcon color="#FFC700" icon={faSection} />
          </span>
          <span className="hover-text-span">
            YOUR <FontAwesomeIcon color="#0FA958" icon={faSquareCaretUp} />
          </span>
        </div>
        <div>
          <span className="hover-text-span">FRIENDS</span>
        </div>
      </h1>
    </div>
  );
}
