import { createConnection, getConnection } from "typeorm"
import * as path from "path"

const root = path.resolve(__dirname, "..");

export async function getOrCreateConnection() {
  try {
    const conn = getConnection();
    return conn;
  } catch (e) {
    return createConnection({
      type: "sqlite",
      database: `${root}/data/inventory.sqlite`,
      entities: [ ],
      logging: true
    });
  }
}
