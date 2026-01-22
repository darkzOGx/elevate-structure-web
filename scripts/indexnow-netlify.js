#!/usr/bin/env node
/**
 * Netlify production-only IndexNow hook.
 *
 * Why:
 * - Netlify runs the same build command for deploy-previews/branch deploys.
 * - We only want to ping IndexNow for the production site.
 */

const { main } = require('./submit-indexnow.js')

const context =
  process.env.CONTEXT ||
  process.env.NETLIFY_CONTEXT ||
  process.env.DEPLOY_CONTEXT ||
  'unknown'

if (context !== 'production') {
  console.log(`[IndexNow] Skipping (Netlify context: ${context})`)
  process.exit(0)
}

console.log('[IndexNow] Netlify production deploy detected — submitting URLs...')

main().catch((err) => {
  console.error('[IndexNow] Submission failed:', err?.message || err)
  process.exit(1)
})

