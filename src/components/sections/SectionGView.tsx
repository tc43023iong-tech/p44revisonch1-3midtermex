import React from 'react';
import { SECTION_G_DATA, WordCorrectionItem } from '../../data/gameData';
import { PixelSprite } from '../common/PixelSprite';

interface SectionGViewProps {
  questionIndex: number; // 0 to 4
  answer: string;
  onChange: (val: string) => void;
  submitted: boolean;
  playerTheme?: 'blue' | 'green';
}

export const SectionGView: React.FC<SectionGViewProps> = ({
  questionIndex,
  answer,
  onChange,
  submitted,
  playerTheme = 'blue',
}) => {
  const currentQ: WordCorrectionItem = SECTION_G_DATA[questionIndex] || SECTION_G_DATA[0];
  const isCorrect = currentQ.acceptedAnswers.some(
    (ans) => ans.toLowerCase() === (answer || '').trim().toLowerCase()
  );

  return (
    <div className="flex flex-col gap-4">
      {/* Sentence Parchment with Highlighted Mistake */}
      <div className="pixel-parchment p-4 sm:p-5 flex flex-col sm:flex-row items-center gap-4">
        <div className="w-16 h-16 bg-[#e0f2fe] border-3 border-[#0284c7] flex items-center justify-center shrink-0 shadow">
          <PixelSprite name={currentQ.spriteName} size={42} animate={submitted && isCorrect} />
        </div>

        <div className="flex-1 w-full">
          <div className="flex items-center justify-between mb-2">
            <span className="font-pixel text-[10px] text-[#8b5a2b] uppercase">
              Sentence {questionIndex + 1} of {SECTION_G_DATA.length}
            </span>
            <span className="text-xs text-[#dc2626] font-semibold">
              Find & correct the mistake
            </span>
          </div>

          <div className="p-3 bg-white border-2 border-[#8b5a2b] shadow-inner">
            <p className="text-sm text-[#78350f] font-semibold mb-1">Original sentence with mistake:</p>
            <p className="text-base sm:text-lg font-bold text-[#1f2937]">
              {currentQ.originalSentence.split(currentQ.incorrectWord)[0]}
              <span className="bg-[#fecaca] text-[#991b1b] px-1.5 py-0.5 rounded border border-[#ef4444] underline decoration-wavy decoration-[#dc2626]">
                {currentQ.incorrectWord}
              </span>
              {currentQ.originalSentence.split(currentQ.incorrectWord)[1]}
            </p>
          </div>
        </div>
      </div>

      {/* Correction Input Box */}
      <div className="pixel-parchment p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex-1 w-full">
          <label className="font-pixel text-xs text-[#5c3708] block mb-2">
            Type the correct word to replace "{currentQ.incorrectWord}":
          </label>
          <div className="flex items-center gap-2">
            <input
              type="text"
              disabled={submitted}
              placeholder={`Replace "${currentQ.incorrectWord}" with...`}
              value={answer}
              onChange={(e) => onChange(e.target.value)}
              className={`w-full px-3.5 py-2 text-sm sm:text-base font-bold bg-white border-3 focus:outline-none ${
                submitted
                  ? isCorrect
                    ? 'border-[#16a34a] bg-[#dcfce7] text-[#14532d]'
                    : 'border-[#dc2626] bg-[#fee2e2] text-[#991b1b]'
                  : 'border-[#8b5a2b] text-[#1e3a8a] focus:ring-2 focus:ring-[#f59e0b]'
              }`}
              autoComplete="off"
              spellCheck="false"
            />
          </div>
        </div>

        {submitted && (
          <div className="flex items-center gap-2 bg-white px-3 py-2 border-2 border-[#8b5a2b] shrink-0">
            <PixelSprite name={isCorrect ? 'check' : 'cross'} size={20} />
            <div>
              <p className={`font-pixel text-xs ${isCorrect ? 'text-[#16a34a]' : 'text-[#dc2626]'}`}>
                {isCorrect ? 'Correct Word!' : 'Incorrect'}
              </p>
              {!isCorrect && (
                <p className="text-xs font-bold text-[#451a03]">
                  Answer: <span className="underline">{currentQ.correctWord}</span>
                </p>
              )}
            </div>
          </div>
        )}
      </div>

      {/* All 5 Sentences Reference */}
      <div className="pixel-parchment p-3">
        <h3 className="font-pixel text-[10px] sm:text-xs text-[#5c3708] mb-2 flex items-center gap-1.5">
          <PixelSprite name="scroll" size={16} />
          <span>All 5 Sentences Review</span>
        </h3>
        <div className="space-y-1.5 text-xs text-[#451a03]">
          {SECTION_G_DATA.map((item, idx) => (
            <div
              key={item.id}
              className={`p-2 border flex items-center justify-between ${
                idx === questionIndex ? 'bg-[#dbeafe] border-[#2563eb] font-bold' : 'bg-white border-[#d6ba89]'
              }`}
            >
              <span>{idx + 1}. {item.originalSentence}</span>
              <span className="text-[11px] font-mono font-bold text-[#166534]">
                {idx < questionIndex || (idx === questionIndex && submitted) ? `→ ${item.correctWord}` : ''}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
