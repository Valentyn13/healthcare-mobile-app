const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

// eslint-disable-next-line no-undef
const defaultConfig = getDefaultConfig(__dirname);
const { assetExts, sourceExts } = defaultConfig.resolver;

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
    transformer: {
        babelTransformerPath: require.resolve('react-native-svg-transformer'),
        unstable_allowRequireContext: true, // Enable require.context feature
    },
    resolver: {
        assetExts: assetExts.filter((ext) => ext !== 'svg'),
        sourceExts: [...sourceExts, 'svg'],
    },
};

module.exports = mergeConfig(defaultConfig, config);
