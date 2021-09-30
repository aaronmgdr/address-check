// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import addressInfo from '../../../src/address'

// type Data = {
//   name: string
// }

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const info = await addressInfo(req.query.address as string, "celo")
  res.status(200).json({ info })
}
