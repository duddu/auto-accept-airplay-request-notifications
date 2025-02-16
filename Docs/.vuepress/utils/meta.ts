import { createRequire } from 'node:module'
import { fs } from 'vuepress/utils'

const require = createRequire(import.meta.url)

const xcodeConfigKeys = ['AAR_VERSION', 'AAR_BUILD_NUMBER'] as const

type XcodeConfig = Readonly<Record<(typeof xcodeConfigKeys)[number], string>>

const getXcodeConfig = (): XcodeConfig => {
  const file = fs.readFileSync(require.resolve('../../../Config.xcconfig'))
  const lines = file.toString().split('\n')
  const map = lines.reduce((map, line) => {
    const [key, value] = line.split('=').map(substr => substr.trim())
    return {
      ...map,
      [key]: value
    }
  }, {} as XcodeConfig)
  if (xcodeConfigKeys.map(key => map[key]).some(value => !value)) {
    throw new TypeError(
      `Failed to retrieve Xcode config values for ${xcodeConfigKeys} from ${JSON.stringify(map)}`
    )
  }
  return map
}

export const { AAR_VERSION, AAR_BUILD_NUMBER } = getXcodeConfig()
