import { useState } from "react";
import SecretPhraseInput from "../SecretPhraseInput/SecretPhraseInput";
import "./SecretPhraseGrid.css";

interface SecretPhraseGridProps {
  onChange?: any;
  data: any;
}

function SecretPhraseGrid({ onChange, data }: SecretPhraseGridProps) {
  const [dataGrid, setDataGrid] = useState(data);

  function handleChange(e: any, id: number) {
    setDataGrid((x: any) =>
      x.map((x: any) => (x.id == id ? { ...x, name: e.target.value } : x))
    );
    const finalWord = data.reduce((_: any, x: any) => _ + "" + x.name, "");
    console.log(finalWord.toString(), "finalWord");
    onChange(finalWord);
  }

  return (
    <div className="secret-phrase-grid-container">
      {dataGrid.map((x: any) => (
        <SecretPhraseInput
          className="secret-phrase-input"
          key={x.id}
          value={x.name}
          onChange={(e: any) => handleChange(e, x.id)}
          isEnterable={x.isEnterable}
        />
      ))}
    </div>
  );
}

export default SecretPhraseGrid;
