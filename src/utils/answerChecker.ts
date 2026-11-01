import { SectionId } from '../types/game';
import {
  SECTION_A_DATA,
  SECTION_B_DATA,
  SECTION_E_DATA,
  SECTION_F_DATA,
  SECTION_G_DATA,
  SECTION_H_DATA,
  SECTION_I_DATA,
  SECTION_K_QUESTIONS,
} from '../data/gameData';

export interface EvaluationResult {
  isCorrect: boolean;
  scoreGained: number;
  details?: any;
}

export const evaluateSectionAnswer = (
  sectionId: SectionId,
  questionIndex: number,
  playerAnswer: any,
  timeTakenSeconds: number = 0
): EvaluationResult => {
  let isCorrect = false;

  switch (sectionId) {
    case 'A': {
      const verb = SECTION_A_DATA[questionIndex];
      if (!verb) break;
      const ans = playerAnswer || { past: '', pastParticiple: '', presentParticiple: '' };
      const pastOk = (ans.past || '').trim().toLowerCase() === verb.past.toLowerCase();
      const ppOk = (ans.pastParticiple || '').trim().toLowerCase() === verb.pastParticiple.toLowerCase();
      const prpOk = (ans.presentParticiple || '').trim().toLowerCase() === verb.presentParticiple.toLowerCase();
      isCorrect = pastOk && ppOk && prpOk;
      break;
    }

    case 'B': {
      const item = SECTION_B_DATA[questionIndex];
      if (!item) break;
      const normalized = (playerAnswer || '').trim().toLowerCase();
      isCorrect = item.acceptedAnswers.some((ans) => ans.toLowerCase() === normalized);
      break;
    }

    case 'E': {
      const item = SECTION_E_DATA[questionIndex];
      if (!item) break;
      const normalized = (playerAnswer || '').trim().toUpperCase();
      isCorrect = normalized === item.correctFoodKey.toUpperCase() ||
        (playerAnswer || '').trim().toLowerCase() === item.correctFoodText.toLowerCase();
      break;
    }

    case 'F': {
      const item = SECTION_F_DATA[questionIndex];
      if (!item) break;
      const normalized = (playerAnswer || '').trim().toUpperCase();
      isCorrect = normalized === item.correctKey.toUpperCase();
      break;
    }

    case 'G': {
      const item = SECTION_G_DATA[questionIndex];
      if (!item) break;
      const normalized = (playerAnswer || '').trim().toLowerCase();
      isCorrect = item.acceptedAnswers.some((ans) => ans.toLowerCase() === normalized);
      break;
    }

    case 'H': {
      const item = SECTION_H_DATA[questionIndex];
      if (!item) break;
      const w1 = (playerAnswer?.word1 || playerAnswer || '').trim().toLowerCase();
      const w2 = (playerAnswer?.word2 || '').trim().toLowerCase();
      if (item.pattern === 'both_and' || item.pattern === 'either_or') {
        const ok1 = w1 === item.expectedWord1.toLowerCase();
        const ok2 = w2 === (item.expectedWord2 || '').toLowerCase();
        isCorrect = ok1 && ok2;
      } else {
        isCorrect = w1 === item.expectedWord1.toLowerCase();
      }
      break;
    }

    case 'I': {
      const item = SECTION_I_DATA[questionIndex];
      if (!item) break;
      const normalized = (playerAnswer || '').trim().toLowerCase();
      isCorrect = item.acceptedAnswers.some((ans) => ans.toLowerCase() === normalized);
      break;
    }

    case 'K': {
      const item = SECTION_K_QUESTIONS[questionIndex];
      if (!item) break;
      const normalized = (playerAnswer || '').trim().toLowerCase();
      isCorrect = item.acceptedAnswers.some((ans) => ans.toLowerCase() === normalized);
      break;
    }

    default:
      isCorrect = false;
  }

  // Base score 10 pts, +5 fast speed bonus if answered within 8 seconds
  let scoreGained = 0;
  if (isCorrect) {
    scoreGained = 10;
    if (timeTakenSeconds > 0 && timeTakenSeconds <= 8) {
      scoreGained += 5;
    }
  }

  return {
    isCorrect,
    scoreGained,
  };
};
