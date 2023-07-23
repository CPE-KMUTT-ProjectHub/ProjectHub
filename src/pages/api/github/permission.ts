import { GITHUB_ORGS, octokit } from '@/app/api/octokit'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { username } = req.query

  if (username === undefined) return res.status(404).json({ message: 'Not Found' })
  else {
    try {
      const { data: userData } = await octokit.request('GET /orgs/{org}/memberships/{username}', {
        username: username as string,
        org: GITHUB_ORGS,
      })

      return res.status(200).json({ userData })
    } catch {
      return res.send('Forbidden')
    }
  }
}
