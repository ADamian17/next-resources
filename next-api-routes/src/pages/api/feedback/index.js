// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { generatePath, getFeedbackData, setFeedbackData } from '@/utils';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const newFeedback = {
      id: new Date().toISOString(),
      ...req.body,
    };

    const filePath = generatePath();
    const feedbackData = getFeedbackData(filePath);
    const feedback = setFeedbackData(feedbackData, newFeedback);

    res.status(201).json({ msg: 'success', feedback });
  } else {
    const filePath = generatePath();
    const feedbackData = getFeedbackData(filePath);

    res.status(200).json(Object.values(feedbackData));
  }
}
