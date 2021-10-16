// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import addressInfo, { AddressInfo } from '../../../src/address'
import { ethers } from 'ethers'
// type Data = {
//   name: string
// }

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<AddressInfo>
) {
  if (req.method === 'GET') {
    const address = req.query.address.toString()
    if (ethers.utils.isAddress(address)) {
      const info = await addressInfo(address, "celo")
      res.status(200).json(info)
    } else {
      res.status(400).json({
        error: true,
        message: "This address is invalid",
        advice: "stop",
        meta: {}
      })
    }
  } else {
    res.status(405).json({
      error: true,
      message: "Wrong Method; use GET",
      advice: "info",
      meta: {}
    })
  }

}
