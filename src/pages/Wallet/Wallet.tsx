import WalletItem from "../../components/WalletItem/WalletItem";
import "./Wallet.css";

function Wallet() {
  // const data = [
  //   { id: 1, name: "Abcd", isEnterable: false },
  //   { id: 2, name: "asdasd", isEnterable: false },
  //   { id: 3, name: "asdasd", isEnterable: false },
  //   { id: 4, name: "asdasd", isEnterable: false },
  //   { id: 5, name: "asdasd", isEnterable: false },
  //   { id: 6, name: "asdasd", isEnterable: false },
  //   { id: 7, name: "asdasd", isEnterable: false },
  //   { id: 8, name: "asdasd", isEnterable: false },
  //   { id: 9, name: "asdasd", isEnterable: true },
  //   { id: 10, name: "asdasd", isEnterable: false },
  //   { id: 11, name: "asdasd", isEnterable: false },
  //   { id: 12, name: "asdasd", isEnterable: false },
  //   { id: 13, name: "asdasd", isEnterable: false },
  //   { id: 14, name: "asdasd", isEnterable: false },
  //   { id: 15, name: "asdasd", isEnterable: false },
  //   { id: 16, name: "asdasd", isEnterable: false },
  // ];

  // let SecretPhrase: string = data.reduce(
  //   (_: any, x: any) => _ + "" + x.name,
  //   ""
  // );
  // const handleChange = (word: string) => {
  //   SecretPhrase = word;
  // };

  // const handleCopy = () => {
  //   navigator.clipboard
  //     .writeText(SecretPhrase)
  //     .then(() => console.log("copied"));
  //   console.log();
  // };

  return (
    <div className="wallet">
      <div className="wallet-header">
        <h3> Wallet </h3>
        <a>Add Wallet</a>
      </div>
      <div className="wallet-body">
        <WalletItem />
        <WalletItem />
      </div>
    </div>
  );
}

export default Wallet;
