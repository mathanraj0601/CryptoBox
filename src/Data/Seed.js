import { openDB } from "idb";
import { SeedTable, dbName } from "./Db";

export const getAll = async () => {
  const dbPromise = await openDB(dbName, 1);
  return await dbPromise.getAll(SeedTable);
};

export const getBySeedId = async (id) => {
  const dbPromise = await openDB(dbName, 1);
  return await dbPromise.getAll(SeedTable, id);
};

export const AddSeed = async (seed) => {
  const dbPromise = await openDB(dbName, 1);
  const tx = dbPromise.transaction(SeedTable, "readwrite");
  tx.store.add(seed);
  tx.done();
};

export const deleteSeed = async (id) => {
  const dbPromise = await openDB(dbName, 1);
  await dbPromise.delete(SeedTable, id);
};

export const clearAccount = async () => {
  const dbPromise = await openDB(dbName, 1);
  await dbPromise.clear(SeedTable);
};
