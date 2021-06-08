
import path from "path";
import { fileURLToPath } from 'url';

const packageDir = path.dirname(fileURLToPath(import.meta.url));

export default {
  entry: './src/browser.tsx',
  target: 'web',
  output: {
    filename: 'browser.bundle.js',
    path: path.join(packageDir, 'dist'),
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.mjs'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.(jpg|jpeg|gif|png)$/,
        type: 'asset/resource'
      }
    ]
  }
}

