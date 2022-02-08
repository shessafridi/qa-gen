import type { NextApiRequest, NextApiResponse } from 'next';
import { allFaqs } from '../../data/qa';
import { Faq } from './../../models/faq';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Faq[]>
) {
  res.status(200).json(allFaqs);
}
