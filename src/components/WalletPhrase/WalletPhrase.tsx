import { useState } from "react";
import "./WalletPhrase.css";
import SecretPhraseGrid from "../SecretPhraseGrid/SecretPhraseGrid";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import CopyAll from "@mui/icons-material/CopyAll";
import Theme from "../../Utility/Theme";

const data = [
  { id: 1, name: "Abcd", isEnterable: false },
  { id: 2, name: "asdasd", isEnterable: false },
  { id: 3, name: "asdasd", isEnterable: false },
  { id: 4, name: "asdasd", isEnterable: false },
  { id: 5, name: "asdasd", isEnterable: false },
  { id: 6, name: "asdasd", isEnterable: false },
  { id: 7, name: "asdasd", isEnterable: false },
  { id: 8, name: "asdasd", isEnterable: false },
  { id: 9, name: "asdasd", isEnterable: true },
  { id: 10, name: "asdasd", isEnterable: false },
  { id: 11, name: "asdasd", isEnterable: false },
  { id: 12, name: "asdasd", isEnterable: false },
  { id: 13, name: "asdasd", isEnterable: false },
  { id: 14, name: "asdasd", isEnterable: false },
  { id: 15, name: "asdasd", isEnterable: false },
  { id: 16, name: "asdasd", isEnterable: false },
];

function WalletPharse() {
  const [isShow, setIsShow] = useState(false);
  return (
    <div className="wallet-pharse">
      <div className="wallet-phrase-header" onClick={() => setIsShow(!isShow)}>
        <h4> Secret Phrase</h4>
        <div>{isShow ? <ExpandLessIcon /> : <ExpandMoreIcon />}</div>
      </div>
      <div className="wallet-phrase-body">
        {isShow && <SecretPhraseGrid data={data} />}
      </div>
      {isShow && (
        <div className="wallet-phrase-copy">
          <CopyAll
            sx={{
              height: "0.6rem",
              width: "0.6rem",
              color: Theme["text1100"],
              marginTop: "2px",
            }}
          />
          <div>Copy to clipboard</div>
        </div>
      )}
    </div>
  );
}

export default WalletPharse;
