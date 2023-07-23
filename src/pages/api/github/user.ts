import { octokit } from '@/app/api/octokit'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { email } = req.query

  if (email === undefined) return res.json({ message: 'No query found' })
  else {
    try {
      const { data: ghUserData } = await octokit.request('GET /search/users?q={email}', {
        email: email,
      })
      return res.status(200).json({ username: ghUserData.items[0].login })
    } catch {
      return res.status(404).json({ message: 'Not Found' })
    }
  }
}
