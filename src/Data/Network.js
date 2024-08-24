import { openDB } from "idb";
import { NetworkTable, dbName } from "./Db";

export const getAllNetworkByAccountId = async (accountId) => {
  const dbPromise = await openDB(dbName, 1);
  return await dbPromise.getAll(NetworkTable, { accountId: accountId });
};

export const deleteNetwork = async (id) => {
  const dbPromise = await openDB(dbName, 1);
  await dbPromise.delete(NetworkTable, id);
};

export const clearNetwork = async () => {
  const dbPromise = await openDB(dbName, 1);
  await dbPromise.clear(NetworkTable);
};
