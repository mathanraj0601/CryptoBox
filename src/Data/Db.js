import { openDB } from "idb";

export const migrateDb = async () => {
  await openDB(dbName, 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(SeedTable))
        db.createObjectStore(SeedTable, {
          keyPath: "id",
          autoIncrement: true,
        });

      if (!db.objectStoreNames.contains(AccountTable))
        db.createObjectStore(AccountTable, {
          keyPath: "id",
          autoIncrement: true,
        });

      if (!db.objectStoreNames.contains(NetworkTable))
        db.createObjectStore(NetworkTable, {
          keyPath: "id",
          autoIncrement: true,
        });

      if (!db.objectStoreNames.contains(KeyTable))
        db.createObjectStore(KeyTable, {
          keyPath: "id",
          autoIncrement: true,
        });
    },
  });
};

export const dbName = "cryptoBox";
export const SeedTable = "seed";
export const AccountTable = "account";
export const NetworkTable = "network";
export const KeyTable = "keys";
