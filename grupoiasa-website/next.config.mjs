import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  // Fija el root del trace al directorio del proyecto. Si no se setea,
  // Next.js puede inferir el root incorrectamente cuando hay múltiples
  // lockfiles en la cadena de directorios padre.
  outputFileTracingRoot: __dirname,
};

export default nextConfig;
