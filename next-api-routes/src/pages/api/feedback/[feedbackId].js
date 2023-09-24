// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { generatePath, getFeedbackData } from '@/utils';

export default function handler(req, res) {
  const filePath = generatePath();
  const feedbackData = getFeedbackData(filePath);
  const feedback = feedbackData[req.query.feedbackId];

  res.status(200).json(feedback);
}
