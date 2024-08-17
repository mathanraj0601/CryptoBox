import Theme from "../../Utility/Theme";
import "./Loader.css";
import { Bars } from "react-loader-spinner";

interface Loader {
  isLoading: boolean;
}

function Loader({ isLoading }: Loader) {
  return (
    isLoading && (
      <div className="loader">
        <Bars visible={isLoading} color={Theme["primary400"]} />
      </div>
    )
  );
}

export default Loader;
