import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

// 自动导入element-plus
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@core': path.resolve(__dirname, 'src/core'),
      '@ui-service': path.resolve(__dirname, 'src/ui-service'),
      '@api': path.resolve(__dirname, 'src/api'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@views': path.resolve(__dirname, 'src/views'),
      '@page': path.resolve(__dirname, 'src/page'),
      '@widgets': path.resolve(__dirname, 'src/widgets'),
      '@static': path.resolve(__dirname, 'public'),
      '@': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [
    vue(),
    // 自动导入
    AutoImport({
      imports: ['vue'],
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      dts: true,
      resolvers: [ElementPlusResolver()],
    }),
  ],
});
