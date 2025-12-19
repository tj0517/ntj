/** @type {import('next').NextConfig} */
const nextConfig = {
  // Dodaj tę linię:
  transpilePackages: ['recharts', 'react-is'],
}
export default nextConfig;