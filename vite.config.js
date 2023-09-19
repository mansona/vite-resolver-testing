import { defineConfig } from "vite";
import { mkdirSync, writeFileSync } from 'fs';

function requireShim() {
  return {
    name: 'require-shim',
    resolveId(imported, importer) {
      if (imported === 'my-example-name') {
        mkdirSync('./node_modules/.cache/tmp/', {recursive: true});
        writeFileSync('./node_modules/.cache/tmp/face.js', `import superstuff from 'lodash.assign';
        
        export default superstuff`)
        return '/Users/mansona/temp/vite-project/node_modules/.cache/tmp/face.js';
      }
    },
    load(id) {
      throw new Error('face');
      if (id === '\0require-shim-the-changer') {
        return `import superstuff from 'lodash.assign';
        
      export default superstuff`;
      }
    },
  };
}

export default defineConfig({
  optimizeDeps: {
    exclude: ['ember-cli-mirage']
  },
  plugins: [
    requireShim(),
  ],
});
