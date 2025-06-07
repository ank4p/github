import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({ plugins: [tailwindcss(),], })

const repsonse = fetch("https://nwiszrnyyocnkvzgyrsl.supabase.co/rest/v1/article?select=*", {
    headers
};
