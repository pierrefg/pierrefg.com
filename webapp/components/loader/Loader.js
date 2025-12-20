import "./style.css";

import LoaderElement from "./LoaderElement";

export default function Loader() {
    return (
      <div className="loader-div">
        <LoaderElement size={50} />
      </div>
    );
}