const { withNativeWind } = require('nativewind/metro')
const { getSentryExpoConfig } = require('@sentry/react-native/metro')

const config = getSentryExpoConfig(__dirname)

config.resolver = {
  ...config.resolver,
  sourceExts: [...config.resolver.sourceExts, 'svg'],
  assetExts: config.resolver.assetExts.filter(ext => ext !== 'svg'),
  resetCache: true
}

module.exports = withNativeWind(config, { input: './global.css' })
