import { useState } from "react";
import "./WalletKey.css";
import CopyAllIcon from "@mui/icons-material/CopyAll";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

interface WalletKeyProps {
  isProtected: boolean;
  isCopyable: boolean;
  title: string;
  value: string;
}

function WalletKey({ title, value, isProtected, isCopyable }: WalletKeyProps) {
  const [isShow, setIsShow] = useState(false);
  const text =
    "* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * ";
  return (
    <div className="wallet-key">
      <h4 className="wallet-key-title">{title}</h4>
      <div className="wallet-key-body">
        <div className="wallet-key-value">
          <p>{isShow ? value : text}</p>
        </div>
        <div className="wallet-key-options">
          {isCopyable && isShow && (
            <div className="wallet-key-option">
              <CopyAllIcon />
            </div>
          )}
          {isProtected && (
            <div
              className="wallet-key-option"
              onClick={() => setIsShow(!isShow)}
            >
              {isShow ? <VisibilityIcon /> : <VisibilityOffIcon />}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default WalletKey;
