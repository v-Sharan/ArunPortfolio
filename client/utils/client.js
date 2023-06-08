import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "25ann58w",
  dataset: "production",
  apiVersion: "2022-02-01",
  useCdn: true,
  token:
    "skWtpwzumEBdMLlpwNnJMcWgDlBev2LTK8lgF7nAWtKbBjll9c4bXvCdnIOAQxQYcLuPKT98kHfKOLu20A9ycegSHel2VcksYdq5czguLnjyWcqfTnFP7HAX228GgMXLjf7RBzkWIyzQMQYPvuMXIgO6foHW8XZzFBtUrHZPboJt79Km55K6",
});
