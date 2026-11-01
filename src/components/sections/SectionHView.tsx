import React, { useState, useEffect } from 'react';
import { SECTION_H_DATA, ConjunctionItem } from '../../data/gameData';
import { PixelSprite } from '../common/PixelSprite';

const CONJUNCTION_BANK = ['and', 'or', 'but', 'both', 'either', 'too'];

export interface ConjunctionAnswer {
  word1: string;
  word2?: string;
}

interface SectionHViewProps {
  questionIndex: number; // 0 to 9 (10 questions)
  answer: ConjunctionAnswer;
  onChange: (field: 'word1' | 'word2', val: string) => void;
  submitted: boolean;
  playerTheme?: 'blue' | 'green';
}

export const SectionHView: React.FC<SectionHViewProps> = ({
  questionIndex,
  answer,
  onChange,
  submitted,
  playerTheme = 'blue',
}) => {
  const currentQ: ConjunctionItem = SECTION_H_DATA[questionIndex] || SECTION_H_DATA[0];
  const isDual = currentQ.pattern === 'both_and' || currentQ.pattern === 'either_or';
  const [activeSlot, setActiveSlot] = useState<'word1' | 'word2'>('word1');

  useEffect(() => {
    setActiveSlot('word1');
  }, [questionIndex]);

  const isWord1Correct =
    (answer.word1 || '').trim().toLowerCase() === currentQ.expectedWord1.toLowerCase();
  const isWord2Correct = isDual
    ? (answer.word2 || '').trim().toLowerCase() === (currentQ.expectedWord2 || '').toLowerCase()
    : true;
  const isCorrect = isWord1Correct && isWord2Correct;

  const handleBankWordClick = (w: string) => {
    if (submitted) return;
    onChange(activeSlot, w);
    if (isDual && activeSlot === 'word1') {
      setActiveSlot('word2');
    }
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Conjunction Bank */}
      <div className="pixel-parchment p-3 sm:p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="font-pixel text-[10px] text-[#78350f] uppercase">
            Conjunction Bank: and / or / but / both / either / too
          </span>
          <span className="text-xs text-[#8b5a2b] font-semibold">
            Question {questionIndex + 1} of {SECTION_H_DATA.length}
          </span>
        </div>
        <div className="flex flex-wrap gap-2">
          {CONJUNCTION_BANK.map((w) => (
            <button
              key={w}
              type="button"
              disabled={submitted}
              onClick={() => handleBankWordClick(w)}
              className="px-3 py-1.5 text-xs sm:text-sm font-bold bg-[#fffaf0] border-2 border-[#8b5a2b] text-[#451a03] hover:bg-[#fed7aa] active:scale-95 transition-transform cursor-pointer"
            >
              {w}
            </button>
          ))}
        </div>
      </div>

      {/* Sentence Parchment */}
      <div className="pixel-parchment p-4 sm:p-5 flex flex-col sm:flex-row items-center gap-4">
        <div className="w-16 h-16 bg-[#fef3c7] border-3 border-[#8b5a2b] flex items-center justify-center shrink-0 shadow">
          <PixelSprite name={currentQ.spriteName} size={42} animate={submitted && isCorrect} />
        </div>

        <div className="flex-1 w-full">
          <div className="flex items-center justify-between mb-2">
            <span className="font-pixel text-[10px] text-[#8b5a2b] uppercase">
              Sentence {questionIndex + 1}:
            </span>
          </div>

          <div className="text-base sm:text-lg font-bold text-[#2b1807] leading-relaxed">
            {currentQ.sentencePart1}{' '}
            {/* Blank 1 */}
            <span
              onClick={() => !submitted && setActiveSlot('word1')}
              className={`inline-block px-2.5 py-0.5 mx-1 border-b-3 min-w-[80px] text-center font-bold cursor-pointer transition-all ${
                activeSlot === 'word1' && !submitted
                  ? 'bg-[#dbeafe] border-[#2563eb] text-[#1e40af] ring-2 ring-[#3b82f6]'
                  : submitted
                  ? isWord1Correct
                    ? 'bg-[#dcfce7] border-[#16a34a] text-[#166534]'
                    : 'bg-[#fee2e2] border-[#dc2626] text-[#991b1b]'
                  : 'bg-white border-[#b45309] text-[#1e3a8a]'
              }`}
            >
              {answer.word1 || '_____'}
            </span>{' '}
            {currentQ.sentencePart2}{' '}
            {/* Optional Blank 2 */}
            {isDual && (
              <>
                <span
                  onClick={() => !submitted && setActiveSlot('word2')}
                  className={`inline-block px-2.5 py-0.5 mx-1 border-b-3 min-w-[80px] text-center font-bold cursor-pointer transition-all ${
                    activeSlot === 'word2' && !submitted
                      ? 'bg-[#dbeafe] border-[#2563eb] text-[#1e40af] ring-2 ring-[#3b82f6]'
                      : submitted
                      ? isWord2Correct
                        ? 'bg-[#dcfce7] border-[#16a34a] text-[#166534]'
                        : 'bg-[#fee2e2] border-[#dc2626] text-[#991b1b]'
                      : 'bg-white border-[#b45309] text-[#1e3a8a]'
                  }`}
                >
                  {answer.word2 || '_____'}
                </span>{' '}
                {currentQ.sentencePart3}
              </>
            )}
          </div>

          {submitted && (
            <div className="mt-3 flex items-center gap-2">
              <PixelSprite name={isCorrect ? 'check' : 'cross'} size={18} />
              <span
                className={`text-xs font-bold ${
                  isCorrect ? 'text-[#16a34a]' : 'text-[#dc2626]'
                }`}
              >
                {isCorrect
                  ? 'Correct conjunction!'
                  : `Answer: ${currentQ.expectedWord1}${isDual ? ` ... ${currentQ.expectedWord2}` : ''}`}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
