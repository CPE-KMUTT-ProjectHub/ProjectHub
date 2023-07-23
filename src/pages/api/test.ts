import { prisma } from '@/app/api/prismaClient'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function test(req: NextApiRequest, res: NextApiResponse) {
  await prisma.$connect()
  switch (req.method) {
    case 'GET': {
      const response = await prisma.test.findMany()

      return res.status(200).json({ response })
    }

    case 'POST': {
      const { text } = req.body

      try {
        const { id } = await prisma.test.create({ data: { text } })

        return res.status(200).json({ id })
      } catch (err: Error | unknown) {
        await prisma.$disconnect()

        if (err instanceof Error) return res.status(500)
      }
    }
  }
}
