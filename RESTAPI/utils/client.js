import { createClient } from "@sanity/client";
import * as dotenv from "dotenv";

dotenv.config();

export const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2022-02-01",
  useCdn: true,
  token: process.env.SANITY_TOKEN,
});
