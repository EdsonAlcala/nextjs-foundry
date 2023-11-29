import { defineConfig } from '@wagmi/cli'
import { foundry, react } from '@wagmi/cli/plugins'

import { deployments } from '../foundry/deployments'

export default defineConfig({
  out: 'src/generated.ts',
  plugins: [
    foundry({
      project: '../foundry',
      deployments: deployments
    }),
    react()
  ],
})