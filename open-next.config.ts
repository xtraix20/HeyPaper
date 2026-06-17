import { defineCloudflareConfig } from "@opennextjs/cloudflare";

const config = defineCloudflareConfig();

// Turbopack production builds aren't yet supported by the Cloudflare
// adapter (route handlers fail with "ComponentMod.handler is not a
// function" at runtime), so force a webpack build for this target.
config.buildCommand = "npx next build --webpack";

export default config;
