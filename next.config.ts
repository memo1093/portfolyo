import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains" },
];

const nextConfig: NextConfig = {
  reactCompiler: true,
  poweredByHeader: false,
  // PDF üretimi (CV) Node tarafında çalışır; paketlenmeden doğrudan kullanılır.
  serverExternalPackages: ["@react-pdf/renderer"],
  experimental: {
    // Kök layout `app/[lang]` altında olduğu için eşleşmeyen URL'ler
    // `app/global-not-found.tsx` ile karşılanır.
    globalNotFound: true,
  },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
