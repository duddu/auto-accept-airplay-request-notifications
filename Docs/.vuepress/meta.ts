import pkg from '../package.json'

const xcodeConfigKeys = [
  'AAR_VERSION',
  'AAR_BUILD_NUMBER'
] as const
const packageConfigKeys = [
  'REPO_URL',
  'DOCS_URL',
  'DOCS_DIR',
  'AUTHOR_NAME',
  'AUTHOR_URL',
  'APP_NAME',
  'APP_TITLE'
] as const

type XcodeConfigKey = typeof xcodeConfigKeys[number]
type PackageConfigKey = typeof packageConfigKeys[number]
type XcodeConfig = Readonly<Record<XcodeConfigKey, string>>
type PackageConfig = Readonly<Record<PackageConfigKey, string>>

declare global {
  namespace NodeJS {
    interface ProcessEnv extends XcodeConfig {}
  }
}

const getXcodeConfig = (): XcodeConfig => (
  Object.fromEntries(xcodeConfigKeys.map(key => {
    const value = process.env[key]
    if (!value) {
      throw new TypeError(
        `Invalid Xcode config value for ${key}: ${JSON.stringify(value)}`
      )
    }
    return [key, value]
  })) as XcodeConfig
)

const getPackageConfig = (): PackageConfig => ({
  REPO_URL: pkg.repository.url,
  DOCS_URL: pkg.homepage,
  DOCS_DIR: pkg.repository.directory,
  AUTHOR_NAME: pkg.author.name,
  AUTHOR_URL: pkg.author.url,
  APP_NAME: pkg.config.appName,
  APP_TITLE: pkg.config.appTitle,
})

export default {
  ...getXcodeConfig(),
  ...getPackageConfig(),
}
