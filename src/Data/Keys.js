import { openDB } from "idb";
import { KeyTable, dbName } from "./Db";

export const getAllKeyByAccountId = async (accountId) => {
  const dbPromise = await openDB(dbName, 1);
  return await dbPromise.getAll(KeyTable, accountId);
};

export const deleteKey = async (id) => {
  const dbPromise = await openDB(dbName, 1);
  await dbPromise.delete(KeyTable, id);
};

export const clearKey = async () => {
  const dbPromise = await openDB(dbName, 1);
  await dbPromise.clear(KeyTable);
};
