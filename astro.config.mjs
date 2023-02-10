import { defineConfig } from "astro/config";
import image from "@astrojs/image";
// import vercel from "@astrojs/vercel/serverless";
import netlify from '@astrojs/netlify/functions';

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: netlify(),
  integrations: [image({
    serviceEntryPoint: "@astrojs/image/sharp"
  })]
});