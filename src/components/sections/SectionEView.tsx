import React from 'react';
import { SECTION_E_DATA, SECTION_E_FOOD_OPTIONS, QuantifierMatchItem } from '../../data/gameData';
import { PixelSprite } from '../common/PixelSprite';

interface SectionEViewProps {
  questionIndex: number; // 0 to 4
  selectedAnswer: string | null; // e.g. 'A', 'B', 'C', 'D', 'E'
  onSelect: (key: string) => void;
  submitted: boolean;
  playerTheme?: 'blue' | 'green';
}

export const SectionEView: React.FC<SectionEViewProps> = ({
  questionIndex,
  selectedAnswer,
  onSelect,
  submitted,
  playerTheme = 'blue',
}) => {
  const currentItem: QuantifierMatchItem = SECTION_E_DATA[questionIndex] || SECTION_E_DATA[0];
  const isCorrect = selectedAnswer === currentItem.correctFoodKey;

  return (
    <div className="flex flex-col gap-4">
      {/* Active Quantifier Spotlight */}
      <div className="pixel-parchment p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-16 h-16 bg-[#e0f2fe] border-3 border-[#0284c7] flex items-center justify-center shrink-0 shadow">
            <PixelSprite name={currentItem.quantifierSprite} size={42} animate={submitted && isCorrect} />
          </div>
          <div>
            <span className="font-pixel text-[10px] text-[#8b5a2b] uppercase">
              Match Item {questionIndex + 1} of {SECTION_E_DATA.length}
            </span>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="font-pixel text-xs text-[#5c3708]">Quantifier:</span>
              <span className="font-pixel text-base sm:text-lg text-[#1e3a8a] bg-white px-2.5 py-0.5 border-2 border-[#1d4ed8]">
                {currentItem.quantifier} ( &nbsp; )
              </span>
            </div>
            <p className="text-xs text-[#78350f] mt-1 font-semibold">
              Which food or drink below goes with this quantifier?
            </p>
          </div>
        </div>

        {submitted && (
          <div className="flex items-center gap-2 bg-white px-3 py-1.5 border-2 border-[#8b5a2b]">
            <PixelSprite name={isCorrect ? 'check' : 'cross'} size={20} />
            <span className={`font-pixel text-xs ${isCorrect ? 'text-[#16a34a]' : 'text-[#dc2626]'}`}>
              {isCorrect ? 'Match Correct!' : `Correct: ${currentItem.correctFoodKey} (${currentItem.correctFoodText})`}
            </span>
          </div>
        )}
      </div>

      {/* 5 Food & Drink Choices (A through E) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
        {SECTION_E_FOOD_OPTIONS.map((opt) => {
          const isSelected = selectedAnswer === opt.key;
          const isTargetCorrect = opt.key === currentItem.correctFoodKey;

          let cardStyle =
            'bg-[#fffaf0] border-[#8b5a2b] text-[#331c07] hover:bg-[#fed7aa] hover:border-[#78350f]';

          if (isSelected) {
            cardStyle =
              playerTheme === 'blue'
                ? 'bg-[#dbeafe] border-[#1d4ed8] text-[#1e3a8a] ring-2 ring-[#2563eb]'
                : 'bg-[#dcfce7] border-[#15803d] text-[#14532d] ring-2 ring-[#16a34a]';
          }

          if (submitted) {
            if (isTargetCorrect) {
              cardStyle = 'bg-[#bbf7d0] border-[#16a34a] text-[#14532d] font-bold shadow-md';
            } else if (isSelected && !isTargetCorrect) {
              cardStyle = 'bg-[#fecaca] border-[#dc2626] text-[#7f1d1d] opacity-80';
            } else {
              cardStyle = 'bg-[#f5f5f4] border-[#d6d3d1] text-[#78716c] opacity-50';
            }
          }

          return (
            <button
              key={opt.key}
              type="button"
              disabled={submitted}
              onClick={() => onSelect(opt.key)}
              className={`p-3 border-3 flex flex-col items-center justify-center gap-2 cursor-pointer transition-all active:scale-95 ${cardStyle}`}
            >
              <div className="w-12 h-12 bg-white border border-[#b45309] flex items-center justify-center shrink-0">
                <PixelSprite name={opt.sprite} size={32} />
              </div>
              <div className="text-center">
                <span className="font-pixel text-xs block text-[#78350f]">{opt.key}.</span>
                <span className="text-sm font-bold capitalize text-[#1f2937]">{opt.text}</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Complete Quantifiers Reference Table */}
      <div className="pixel-parchment p-3">
        <h3 className="font-pixel text-[10px] sm:text-xs text-[#5c3708] mb-2 flex items-center gap-1.5">
          <PixelSprite name="scroll" size={16} />
          <span>Picnic Quantifiers Matching List</span>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-2 text-xs">
          {SECTION_E_DATA.map((item, idx) => {
            const isDone = idx < questionIndex || (idx === questionIndex && submitted);
            return (
              <div
                key={item.id}
                className={`p-2 border bg-white flex items-center gap-2 ${
                  idx === questionIndex ? 'border-[#2563eb] bg-[#eff6ff] font-bold' : 'border-[#d6ba89]'
                }`}
              >
                <PixelSprite name={item.foodSprite} size={20} />
                <div>
                  <p className="font-semibold text-[#1e293b]">{item.quantifier}</p>
                  <p className="text-[11px] text-[#78350f]">
                    {isDone ? `(${item.correctFoodKey}) ${item.correctFoodText}` : '( ? )'}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
