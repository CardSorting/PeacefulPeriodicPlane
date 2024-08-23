import { BlitzConfig, sessionMiddleware, simpleRolesIsAuthorized } from "blitz"
import { withSentryConfig } from "@sentry/nextjs"

const config: BlitzConfig = {
  middleware: [
    sessionMiddleware({
      cookiePrefix: "mtg-deck-marketplace",
      isAuthorized: simpleRolesIsAuthorized,
    }),
  ],
  images: {
    domains: ["cdn.mtgdeckmarketplace.com", "gatherer.wizards.com"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  serverRuntimeConfig: {
    stripeSecretKey: process.env.STRIPE_SECRET_KEY,
    mtgApiKey: process.env.MTG_API_KEY,
    databaseUrl: process.env.DATABASE_URL,
    redisUrl: process.env.REDIS_URL,
  },
  publicRuntimeConfig: {
    stripePublishableKey: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
    googleAnalyticsId: process.env.NEXT_PUBLIC_GA_ID,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  experimental: {
    optimizeFonts: true,
    modern: true,
  },
  reactStrictMode: true,
  poweredByHeader: false,
}

// Sentry configuration
const sentryWebpackPluginOptions = {
  silent: true,
  release: process.env.VERCEL_GIT_COMMIT_SHA,
}

export default withSentryConfig(config, sentryWebpackPluginOptions)