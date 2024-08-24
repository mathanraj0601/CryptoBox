import WalletItem from "../../components/WalletItem/WalletItem";
import "./Wallet.css";
// import { migrateDb } from "../../Data/Db";
// import { CheckIndexedDb } from "../../Data/IndexedDb";
// import {
//   AddAccount,
//   getByAccountId,
//   getNextAccountId,
//   updateAccountName,
// } from "../../Data/Account";
// import { getAllKeyByAccountId } from "../../Data/Keys";

function Wallet() {
  // migrateDb();
  // CheckIndexedDb();

  // const account = {
  //   acc: {
  //     name: "account 1",
  //   },
  //   keys: [
  //     { privateKey: "1nsdwsd", publicKey: "sdjfaej" },
  //     { privateKey: "1nsdwsd", publicKey: "sdjfaej" },
  //     { privateKey: "1nsdwsd", publicKey: "sdjfaej" },
  //   ],
  //   network: {
  //     name: "main",
  //   },
  // };
  // console.log(
  //   getByAccountId(20),
  //   getAllKeyByAccountId(20),
  //   getNextAccountId(),
  //   updateAccountName(92, 92)
  // );
  // AddAccount(account);
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
        <div className="main-wallet">
          <WalletItem />
        </div>
        <div className="other-wallet">
          <WalletItem />
          <WalletItem /> <WalletItem /> <WalletItem />
        </div>
      </div>
    </div>
  );
}

export default Wallet;
