import vue from '@vitejs/plugin-vue'

//https://nitro.unjs.io/config
export default defineNitroConfig({
  srcDir: "server",
  rollupConfig: {
    plugins: [
      vue()
    ]
  },
  preset: 'vercel-edge',
});
