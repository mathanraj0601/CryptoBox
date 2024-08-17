import WalletKey from "../WalletKey/WalletKey";
import WalletPharse from "../WalletPhrase/WalletPhrase";
import "./WalletItem.css";

// interface WalletItemProps {
//   className?: string;
// }

function WalletItem() {
  const wallets = [
    {
      id: 1,
      title: "Private Key",
      value:
        "nfkbfksdbfkshbfnbkjsbdfsnbdfksjdbfskjdfbkjnfkbfksdbfkshbfnbkjsbdfsnbdfksjdbfskjdfbkjnfkbfksdbfkshbfnbkjsbdfsnbdfksjdbfskjdfbkjnfkbfksdbfkshbfnbkjsbdfsnbdfksjdbfskjdfbkj",
      isProtected: true,
      isCopyable: true,
    },

    {
      id: 2,
      title: "Private Key",
      value: "nfkbfksdbfkshbfnbkjsbdfsnbdfksjdbfskjdfbkj",
      isProtected: true,
      isCopyable: true,
    },

    // {
    //   id: 3,
    //   title: "Public Key",
    //   value: "nfkbfksdbfkshbfnbkjsbdfsnbdfksjdbfskjdfbkj",
    //   isProtected: true,
    //   isCopyable: true,
    // },
  ];
  return (
    <div className="wallet-item">
      <div className="wallet-item-header">
        <h4>Main Wallet</h4>
        <span>Primary</span>
      </div>
      <div className="waller-item-body">
        {wallets.map((wallet) => (
          <WalletKey
            title={wallet.title}
            value={wallet.value}
            key={wallet.id}
            isCopyable={wallet.isCopyable}
            isProtected={wallet.isProtected}
          />
        ))}
        <WalletPharse />
      </div>
    </div>
  );
}

export default WalletItem;
