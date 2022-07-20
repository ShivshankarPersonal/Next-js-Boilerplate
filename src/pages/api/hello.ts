// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string;
};
/**
 * @swagger
 * /api/hello:
 *   get:
 *     description: Returns the hello worldiiiiiiii
 *     responses:
 *       200:
 *         description: hello worldiiiiiiii
 */
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'John Doe1iiiiiiis' });
}
