#!/usr/bin/env node
/**
 * Netlify production-only IndexNow hook.
 *
 * IMPORTANT: This script MUST NOT crash the build.
 * IndexNow submission is best-effort — a failure here should never
 * prevent a production deploy from going live.
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

main()
  .then(() => {
    console.log('[IndexNow] Submission complete.')
  })
  .catch((err) => {
    // Log the error but DO NOT exit with code 1 — never block a deploy
    console.error('[IndexNow] Submission failed (non-fatal):', err?.message || err)
    console.log('[IndexNow] Continuing deploy despite IndexNow failure.')
    process.exit(0)
  })
