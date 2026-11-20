import {defineConfig, loadEnv} from 'vite'
import react from '@vitejs/plugin-react'
import {seoPlugin} from "./plugins/seo.ts";

const ENV_DIR = ".";
const SOCIAL_LINK_KEYS = ["VITE_GITHUB_LINK", "VITE_LINKEDIN_LINK", "VITE_TELEGRAM_LINK"];

// https://vitejs.dev/config/
export default defineConfig(({mode}) => {
    const env = loadEnv(mode, ENV_DIR);
    const sameAs = SOCIAL_LINK_KEYS.map((key) => env[key]).filter(Boolean);

    return {
        plugins: [react(), seoPlugin({sameAs})],
    };
})
