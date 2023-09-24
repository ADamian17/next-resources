import fs from 'fs';
import path from 'path';

export const generatePath = () => {
  return path.join(process.cwd(), 'src/data', 'feedback.json');
};

export const getFeedbackData = (filePath) => {
  const fileData = fs.readFileSync(filePath);
  return JSON.parse(fileData);
};

export const setFeedbackData = (feedbackData, newFeedback) => {
  feedbackData[newFeedback.id] = newFeedback;
  const filePath = generatePath();
  fs.writeFileSync(filePath, JSON.stringify(feedbackData));

  return newFeedback;
};
