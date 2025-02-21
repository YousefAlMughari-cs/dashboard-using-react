import "./Financial.css";
import { iconsImgs } from "../../utils/images";

export default function Financial() {
  return (
    <div className="subgrid-two-item grid-common grid-c8">
      <div className="grid-c-title">
        <h3 className="grid-c-title-text">Financial Advice</h3>
        <button className="grid-c-title-icon" type="button">
          <img src={iconsImgs.plus} />
        </button>
      </div>
      <div className="grid-c8-content">
        <p className="text text-silver-v1">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit!
        </p>
      </div>
    </div>
  );
}
