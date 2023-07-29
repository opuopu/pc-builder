/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXTAUTH_SECRET: "opuvai",
    NEXTAUTH_URL: "http://localhost:3000",
    DB_URL: "mongodb+srv://pcbuilder:T3c3LOMXut8IdWr9@cluster0.dgoei.mongodb.net/pc-builder?retryWrites=true&w=majority",
    API_URL: "http://localhost:3000",
    GITHUB_ID: "ad799b3f84153ed7ac9f",
    GITHUB_SECRET: "04f4f1a51185442c0a97e6f151c38d4c5824aaf8",
    GOOGLE_CLIENT_ID:"387072395688-o0vqek713h4k7bg5ri367rl334afajv9.apps.googleusercontent.com",
    GOOGLE_CLIENT_SECRET:"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"

  },
  images: {
    domains: [
      "images.pexels.com",
      "www.cloud.ryanscomputers.com",
      "techbd.com.bd",
      "computerimporter.com",
      "images.evga.com",
      "www.lg.com",
      "www.trustedreviews.com",
      "upload.wikimedia.org",
      "www.startech.com.bd",
      "asset.msi.com",
      "www.skyland.com.bd",
      "www.gskill.com",
      "m.media-amazon.com",
      "www.techlandbd.com",
      "www.elnekhelytechnology.com",
    ],
  },
};
module.exports = nextConfig;
