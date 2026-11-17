import { spawnSync } from 'node:child_process'
import { mkdtempSync, readFileSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const fixtureDir = dirname(fileURLToPath(import.meta.url))
const repoDir = resolve(fixtureDir, '../..')
const tempDir = mkdtempSync(join(tmpdir(), 'pss-consumer-'))
const npmCache = join(tempDir, 'npm-cache')
const npm = process.platform === 'win32' ? 'npm.cmd' : 'npm'

function run(command, args, cwd) {
  const result = spawnSync(command, args, {
    cwd,
    encoding: 'utf8',
    stdio: 'inherit',
    env: { ...process.env, npm_config_cache: npmCache },
  })

  if (result.error) throw result.error
  if (result.status !== 0)
    throw new Error(`${command} exited with status ${result.status}`)
}

function packageArchive(packageDir) {
  const { name, version } = JSON.parse(
    readFileSync(join(packageDir, 'package.json'), 'utf8')
  )
  return join(tempDir, `${name.replace('/', '-')}-${version}.tgz`)
}

try {
  run(
    npm,
    ['pack', '--workspace=pss', '--pack-destination', tempDir, '--cache', npmCache],
    repoDir
  )
  run(
    npm,
    [
      'pack',
      '--workspace=pss-react',
      '--pack-destination',
      tempDir,
      '--cache',
      npmCache,
    ],
    repoDir
  )

  const packages = [
    packageArchive(join(repoDir, 'packages/core')),
    packageArchive(join(repoDir, 'packages/react')),
  ]

  run(
    npm,
    [
      'install',
      '--no-save',
      '--package-lock=false',
      '--ignore-scripts',
      '--legacy-peer-deps',
      '--offline',
      '--cache',
      npmCache,
      ...packages,
    ],
    fixtureDir
  )
  run(process.execPath, [join(fixtureDir, 'consumer.mjs')], fixtureDir)
  run(
    process.execPath,
    [
      join(repoDir, 'node_modules/typescript/bin/tsc'),
      '--project',
      join(fixtureDir, 'tsconfig.json'),
    ],
    repoDir
  )
} finally {
  rmSync(join(fixtureDir, 'node_modules'), { recursive: true, force: true })
  rmSync(join(fixtureDir, 'package-lock.json'), { force: true })
  rmSync(tempDir, { recursive: true, force: true })
}
