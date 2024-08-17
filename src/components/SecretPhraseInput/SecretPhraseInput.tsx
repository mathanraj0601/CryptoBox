import "./SecretPhraseInput.css";

interface SecretPhraseInputProps {
  value: string;
  onChange: any;
  isEnterable: any;
  className: any;
}

function SecretPhraseInput({
  value,
  isEnterable,
  onChange,
  className,
}: SecretPhraseInputProps) {
  return (
    <input
      className={"secret-phrase-input " + className}
      type="text"
      value={value}
      onChange={onChange}
      disabled={!isEnterable}
    />
  );
}

export default SecretPhraseInput;
