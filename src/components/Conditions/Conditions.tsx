import { Checkbox } from "@mui/material";
import Theme from "../../Utility/Theme";
import { useState } from "react";
import "./Conditions.css";

interface ConditionsProps {
  value: string;
  onChange: any;
}

function Conditions({ value, onChange }: ConditionsProps) {
  const [checked, setChecked] = useState(true);

  const handleChange = () => {
    setChecked(!checked);
    onChange(checked);
  };
  return (
    <div className="conditions">
      <Checkbox
        sx={{
          color: Theme["primary500"],
          "&.Mui-checked": {
            color: Theme["primary500"],
          },
          padding: 0,
        }}
        checked={checked}
        onChange={handleChange}
      />
      <p>{value}</p>
    </div>
  );
}

export default Conditions;
