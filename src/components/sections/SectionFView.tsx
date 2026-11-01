import React from 'react';
import { SECTION_F_DATA, SubjectVerbItem } from '../../data/gameData';
import { PixelSprite } from '../common/PixelSprite';

interface SectionFViewProps {
  questionIndex: number; // 0 to 9 (10 questions)
  selectedKey: 'A' | 'B' | null;
  onSelect: (key: 'A' | 'B') => void;
  submitted: boolean;
  playerTheme?: 'blue' | 'green';
}

export const SectionFView: React.FC<SectionFViewProps> = ({
  questionIndex,
  selectedKey,
  onSelect,
  submitted,
  playerTheme = 'blue',
}) => {
  const currentQ: SubjectVerbItem = SECTION_F_DATA[questionIndex] || SECTION_F_DATA[0];
  const isCorrect = selectedKey === currentQ.correctKey;

  return (
    <div className="flex flex-col gap-4">
      {/* Sentence Parchment Display */}
      <div className="pixel-parchment p-4 sm:p-5 flex flex-col sm:flex-row items-center gap-4">
        <div className="w-16 h-16 bg-[#fef3c7] border-3 border-[#8b5a2b] flex items-center justify-center shrink-0 shadow">
          <PixelSprite name={currentQ.spriteName} size={42} animate={submitted && isCorrect} />
        </div>

        <div className="flex-1 w-full">
          <div className="flex items-center justify-between mb-2">
            <span className="font-pixel text-[10px] text-[#8b5a2b] uppercase">
              Question {questionIndex + 1} of {SECTION_F_DATA.length}
            </span>
            <span className="text-xs text-[#78350f] font-semibold">
              Verb theme: <span className="underline">{currentQ.verbFamily}</span>
            </span>
          </div>

          <p className="text-base sm:text-lg font-bold text-[#2b1807] leading-relaxed">
            {currentQ.prefix ? `${currentQ.prefix} ` : ''}
            <span className="inline-block px-3 py-0.5 mx-1 bg-white border-2 border-[#b45309] text-[#1e40af] font-pixel text-sm min-w-[70px] text-center shadow-inner">
              {selectedKey ? (selectedKey === 'A' ? currentQ.optA : currentQ.optB) : '_____'}
            </span>
            {' '}{currentQ.suffix}
          </p>
        </div>
      </div>

      {/* Choice Buttons: Option A vs Option B */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Option A */}
        {(() => {
          const isSelected = selectedKey === 'A';
          const isOptACorrect = currentQ.correctKey === 'A';
          let btnStyle =
            'bg-[#fffaf0] border-[#8b5a2b] text-[#3b1d03] hover:bg-[#fed7aa] hover:border-[#78350f]';

          if (isSelected) {
            btnStyle =
              playerTheme === 'blue'
                ? 'bg-[#dbeafe] border-[#1d4ed8] text-[#1e3a8a] ring-2 ring-[#2563eb]'
                : 'bg-[#dcfce7] border-[#15803d] text-[#14532d] ring-2 ring-[#16a34a]';
          }

          if (submitted) {
            if (isOptACorrect) {
              btnStyle = 'bg-[#bbf7d0] border-[#16a34a] text-[#14532d] font-bold shadow-md';
            } else if (isSelected && !isOptACorrect) {
              btnStyle = 'bg-[#fecaca] border-[#dc2626] text-[#7f1d1d] opacity-80';
            } else {
              btnStyle = 'bg-[#f5f5f4] border-[#d6d3d1] text-[#78716c] opacity-50';
            }
          }

          return (
            <button
              type="button"
              disabled={submitted}
              onClick={() => onSelect('A')}
              className={`p-4 border-3 flex items-center justify-between gap-3 cursor-pointer transition-all active:scale-95 ${btnStyle}`}
            >
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[#faeed1] border-2 border-[#8b5a2b] font-pixel text-xs flex items-center justify-center font-bold text-[#451a03]">
                  A
                </span>
                <span className="text-base sm:text-lg font-bold">{currentQ.optA}</span>
              </div>
              {submitted && isOptACorrect && (
                <PixelSprite name="check" size={20} />
              )}
            </button>
          );
        })()}

        {/* Option B */}
        {(() => {
          const isSelected = selectedKey === 'B';
          const isOptBCorrect = currentQ.correctKey === 'B';
          let btnStyle =
            'bg-[#fffaf0] border-[#8b5a2b] text-[#3b1d03] hover:bg-[#fed7aa] hover:border-[#78350f]';

          if (isSelected) {
            btnStyle =
              playerTheme === 'blue'
                ? 'bg-[#dbeafe] border-[#1d4ed8] text-[#1e3a8a] ring-2 ring-[#2563eb]'
                : 'bg-[#dcfce7] border-[#15803d] text-[#14532d] ring-2 ring-[#16a34a]';
          }

          if (submitted) {
            if (isOptBCorrect) {
              btnStyle = 'bg-[#bbf7d0] border-[#16a34a] text-[#14532d] font-bold shadow-md';
            } else if (isSelected && !isOptBCorrect) {
              btnStyle = 'bg-[#fecaca] border-[#dc2626] text-[#7f1d1d] opacity-80';
            } else {
              btnStyle = 'bg-[#f5f5f4] border-[#d6d3d1] text-[#78716c] opacity-50';
            }
          }

          return (
            <button
              type="button"
              disabled={submitted}
              onClick={() => onSelect('B')}
              className={`p-4 border-3 flex items-center justify-between gap-3 cursor-pointer transition-all active:scale-95 ${btnStyle}`}
            >
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[#faeed1] border-2 border-[#8b5a2b] font-pixel text-xs flex items-center justify-center font-bold text-[#451a03]">
                  B
                </span>
                <span className="text-base sm:text-lg font-bold">{currentQ.optB}</span>
              </div>
              {submitted && isOptBCorrect && (
                <PixelSprite name="check" size={20} />
              )}
            </button>
          );
        })()}
      </div>

      {submitted && (
        <div className="pixel-parchment p-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <PixelSprite name={isCorrect ? 'check' : 'cross'} size={20} />
            <span className={`text-xs font-bold ${isCorrect ? 'text-[#16a34a]' : 'text-[#dc2626]'}`}>
              {isCorrect
                ? 'Correct! Subject and verb agree perfectly.'
                : `Incorrect. Correct answer is (${currentQ.correctKey}) ${currentQ.correctWord}.`}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
