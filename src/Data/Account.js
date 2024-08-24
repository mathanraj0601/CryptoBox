import { openDB } from "idb";
import { AccountTable, dbName, KeyTable, NetworkTable } from "./Db";

export const getAll = async () => {
  const dbPromise = await openDB(dbName, 1);
  return await dbPromise.getAll(AccountTable);
};

export const getByAccountId = async (id) => {
  const dbPromise = await openDB(dbName, 1);
  return await dbPromise.get(AccountTable, id);
};

export const getNextAccountId = async () => {
  const dbPromise = await openDB(dbName, 1);
  const accounts = await dbPromise.getAll(AccountTable);
  return (
    accounts.reduce((_, account) => {
      return Math.max(_, account.id);
    }, -1) + 1
  );
};

export const updateAccountName = async (id, name) => {
  const dbPromise = await openDB(dbName, 1);
  const account = await dbPromise.get(AccountTable, id);
  account.name = name;
  return await dbPromise.put(AccountTable, account);
};

export const AddAccount = async (account) => {
  const dbPromise = await openDB(dbName, 1);
  const { acc, keys, network } = account;
  const tx = await dbPromise.transaction(
    [AccountTable, NetworkTable, KeyTable],
    "readwrite"
  );

  const accountId = await tx.objectStore(AccountTable).add(acc);

  network.accountId = accountId;

  await tx.objectStore(NetworkTable).add(network);

  const updatedKeys = keys.map((key) => ({ ...key, accountId }));

  for (const key of updatedKeys) {
    await tx.objectStore(KeyTable).add(key);
  }

  await tx.done;
};

export const deleteAccount = async (id) => {
  const dbPromise = await openDB(dbName, 1);
  await dbPromise.delete(AccountTable, id);
};

export const clearAccount = async () => {
  const dbPromise = await openDB(dbName, 1);
  await dbPromise.clear(AccountTable);
};

const blockChains = {
  solana: {
    derivePath: {
      cryptoBox: (path, accountNumber) => `m/400/${path}/${accountNumber}`,
    },
  },
  ethereum: {
    derivePath: {
      cryptoBox: (path, accountNumber) => `m/401/${path}/${accountNumber}`,
    },
  },
};
