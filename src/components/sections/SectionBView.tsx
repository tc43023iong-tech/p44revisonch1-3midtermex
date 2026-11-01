import React from 'react';
import { SECTION_B_DATA, SECTION_B_WORDS } from '../../data/gameData';
import { PixelSprite } from '../common/PixelSprite';

interface SectionBViewProps {
  questionIndex: number; // 0 to 5
  answer: string;
  onChange: (val: string) => void;
  submitted: boolean;
  playerTheme?: 'blue' | 'green';
}

export const SectionBView: React.FC<SectionBViewProps> = ({
  questionIndex,
  answer,
  onChange,
  submitted,
  playerTheme = 'blue',
}) => {
  const currentQ = SECTION_B_DATA[questionIndex] || SECTION_B_DATA[0];
  const isCorrect = currentQ.acceptedAnswers.some(
    (ans) => ans.toLowerCase() === (answer || '').trim().toLowerCase()
  );

  return (
    <div className="flex flex-col gap-4">
      {/* Word Bank at the top */}
      <div className="pixel-parchment p-3.5">
        <div className="flex items-center justify-between mb-2">
          <span className="font-pixel text-[10px] text-[#78350f] uppercase">
            Chapter 3 Word Bank (Tap a word to insert):
          </span>
          <span className="text-xs text-[#8b5a2b] font-semibold">
            Question {questionIndex + 1} of {SECTION_B_DATA.length}
          </span>
        </div>
        <div className="flex flex-wrap gap-2">
          {SECTION_B_WORDS.map((w) => {
            const isSelected = answer.trim().toLowerCase() === w.toLowerCase();
            return (
              <button
                key={w}
                type="button"
                disabled={submitted}
                onClick={() => onChange(w)}
                className={`px-3 py-1.5 text-xs sm:text-sm font-bold border-2 transition-transform cursor-pointer active:scale-95 ${
                  isSelected
                    ? 'bg-[#3b82f6] text-white border-[#1d4ed8] shadow'
                    : 'bg-[#fffaf0] text-[#451a03] border-[#92400e] hover:bg-[#fed7aa]'
                }`}
              >
                {w}
              </button>
            );
          })}
        </div>
      </div>

      {/* Question Card with Cute Illustration */}
      <div className="pixel-parchment p-4 sm:p-5 flex flex-col sm:flex-row items-center gap-4">
        <div className="w-20 h-20 bg-[#fef3c7] border-3 border-[#8b5a2b] flex items-center justify-center shrink-0 shadow">
          <PixelSprite name={currentQ.spriteName} size={52} animate={submitted && isCorrect} />
        </div>

        <div className="flex-1 w-full">
          <div className="mb-2">
            <span className="font-pixel text-[10px] text-[#8b5a2b]">Sentence {questionIndex + 1}:</span>
          </div>

          <div className="text-sm sm:text-base font-semibold text-[#291807] leading-relaxed">
            {currentQ.sentenceBefore}{' '}
            <span className="inline-block relative min-w-[130px]">
              <input
                type="text"
                disabled={submitted}
                placeholder="type or tap word"
                value={answer}
                onChange={(e) => onChange(e.target.value)}
                className={`px-2.5 py-1 text-sm sm:text-base font-bold text-center border-b-3 focus:outline-none ${
                  submitted
                    ? isCorrect
                      ? 'bg-[#dcfce7] border-[#16a34a] text-[#166534]'
                      : 'bg-[#fee2e2] border-[#dc2626] text-[#991b1b]'
                    : 'bg-[#fffdf5] border-[#b45309] text-[#1e3a8a] focus:border-[#2563eb]'
                }`}
                autoComplete="off"
                spellCheck="false"
              />
            </span>{' '}
            {currentQ.sentenceAfter}
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
                  ? 'Excellent! Correct vocabulary word.'
                  : `Answer: ${currentQ.correctWord}`}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
