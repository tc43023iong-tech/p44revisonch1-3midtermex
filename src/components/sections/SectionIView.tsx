import React from 'react';
import { SECTION_I_DATA, FoodReviewItem } from '../../data/gameData';
import { PixelSprite } from '../common/PixelSprite';

interface SectionIViewProps {
  questionIndex: number; // 0 to 4
  answer: string;
  onChange: (val: string) => void;
  submitted: boolean;
  playerTheme?: 'blue' | 'green';
}

export const SectionIView: React.FC<SectionIViewProps> = ({
  questionIndex,
  answer,
  onChange,
  submitted,
  playerTheme = 'blue',
}) => {
  const currentQ: FoodReviewItem = SECTION_I_DATA[questionIndex] || SECTION_I_DATA[0];
  const isCorrect = currentQ.acceptedAnswers.some(
    (ans) => ans.toLowerCase() === (answer || '').trim().toLowerCase()
  );

  return (
    <div className="flex flex-col gap-4">
      {/* Restaurant Review Card */}
      <div className="pixel-parchment p-4 sm:p-5 flex flex-col sm:flex-row items-center gap-4">
        <div className="w-16 h-16 bg-[#e0f2fe] border-3 border-[#0284c7] flex items-center justify-center shrink-0 shadow">
          <PixelSprite name={currentQ.spriteName} size={42} animate={submitted && isCorrect} />
        </div>

        <div className="flex-1 w-full">
          <div className="flex items-center justify-between mb-2">
            <span className="font-pixel text-[10px] text-[#8b5a2b] uppercase">
              Review {questionIndex + 1} of {SECTION_I_DATA.length}
            </span>
            <span className="text-xs text-[#1e40af] font-semibold">
              Word in brackets: <span className="font-bold underline">({currentQ.baseWord})</span>
            </span>
          </div>

          <div className="text-base sm:text-lg font-bold text-[#2b1807] leading-relaxed">
            {currentQ.sentenceBefore}{' '}
            <span className="inline-block relative min-w-[140px]">
              <input
                type="text"
                disabled={submitted}
                placeholder={`Form of "${currentQ.baseWord}"...`}
                value={answer}
                onChange={(e) => onChange(e.target.value)}
                className={`px-3 py-1 text-sm sm:text-base font-bold text-center border-b-3 focus:outline-none w-full ${
                  submitted
                    ? isCorrect
                      ? 'bg-[#dcfce7] border-[#16a34a] text-[#166534]'
                      : 'bg-[#fee2e2] border-[#dc2626] text-[#991b1b]'
                    : 'bg-white border-[#b45309] text-[#1e3a8a] focus:border-[#2563eb]'
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
                  ? 'Correct form!'
                  : `Answer: ${currentQ.correctWord}`}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Overview Table of the 3 Restaurants */}
      <div className="pixel-parchment p-3">
        <h3 className="font-pixel text-[10px] sm:text-xs text-[#5c3708] mb-2 flex items-center gap-1.5">
          <PixelSprite name="scroll" size={16} />
          <span>Valley Restaurant Review Guide</span>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
          <div className="p-2.5 bg-white border border-[#d6ba89] flex items-center gap-2">
            <PixelSprite name="burger" size={24} />
            <div>
              <p className="font-bold text-[#451a03]">Burger House</p>
              <p className="text-[11px] text-[#78350f]">Cheapest food & most popular spot</p>
            </div>
          </div>
          <div className="p-2.5 bg-white border border-[#d6ba89] flex items-center gap-2">
            <PixelSprite name="salad" size={24} />
            <div>
              <p className="font-bold text-[#451a03]">Green Salad Bar</p>
              <p className="text-[11px] text-[#78350f]">Healthier meal choices than burgers</p>
            </div>
          </div>
          <div className="p-2.5 bg-white border border-[#d6ba89] flex items-center gap-2">
            <PixelSprite name="steak" size={24} />
            <div>
              <p className="font-bold text-[#451a03]">Burger Town</p>
              <p className="text-[11px] text-[#78350f]">Most expensive gourmet dining</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
