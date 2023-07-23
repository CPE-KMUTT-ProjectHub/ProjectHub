import { Octokit } from 'octokit'

export const GITHUB_ORGS = 'CPE-KMUTT-ProjectHub'

export const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN })
