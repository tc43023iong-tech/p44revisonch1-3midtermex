import React from 'react';
import { SECTION_A_DATA, VerbEntry } from '../../data/gameData';
import { PixelSprite } from '../common/PixelSprite';

export interface VerbAnswers {
  past: string;
  pastParticiple: string;
  presentParticiple: string;
}

interface SectionAViewProps {
  questionIndex: number; // 0 to 7
  answers: VerbAnswers;
  onChange: (field: keyof VerbAnswers, val: string) => void;
  submitted: boolean;
  playerTheme?: 'blue' | 'green';
  onJumpToVerb?: (index: number) => void;
}

export const SectionAView: React.FC<SectionAViewProps> = ({
  questionIndex,
  answers,
  onChange,
  submitted,
  playerTheme = 'blue',
  onJumpToVerb,
}) => {
  const currentVerb = SECTION_A_DATA[questionIndex] || SECTION_A_DATA[0];

  const isPastCorrect = answers.past.trim().toLowerCase() === currentVerb.past.toLowerCase();
  const isPpCorrect =
    answers.pastParticiple.trim().toLowerCase() === currentVerb.pastParticiple.toLowerCase();
  const isPrpCorrect =
    answers.presentParticiple.trim().toLowerCase() === currentVerb.presentParticiple.toLowerCase();

  const allThreeCorrect = isPastCorrect && isPpCorrect && isPrpCorrect;

  return (
    <div className="flex flex-col gap-4">
      {/* Current Active Verb Spotlight */}
      <div className="pixel-parchment p-3.5 sm:p-4 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-14 h-14 bg-[#faeed1] border-2 border-[#8b5a2b] flex items-center justify-center shrink-0 shadow-inner">
            <PixelSprite name={currentVerb.spriteName} size={36} animate={submitted && allThreeCorrect} />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-pixel text-[10px] text-[#8b5a2b] uppercase">
                Verb {questionIndex + 1} of {SECTION_A_DATA.length}
              </span>
              {submitted && (
                <span
                  className={`text-[10px] font-pixel px-2 py-0.5 border ${
                    allThreeCorrect
                      ? 'bg-[#dcfce7] text-[#166534] border-[#16a34a]'
                      : 'bg-[#fee2e2] text-[#991b1b] border-[#dc2626]'
                  }`}
                >
                  {allThreeCorrect ? 'Mastered!' : 'Needs Review'}
                </span>
              )}
            </div>
            <div className="flex items-baseline gap-2 mt-0.5">
              <span className="font-pixel text-xs text-[#5c3708]">Base Form (原形):</span>
              <span className="font-pixel text-lg sm:text-xl text-[#1e3a8a] bg-[#e0f2fe] px-3 py-0.5 border-2 border-[#3b82f6]">
                {currentVerb.base}
              </span>
            </div>
          </div>
        </div>

        {/* Verb selector quick pills */}
        <div className="flex flex-wrap items-center justify-center gap-1.5">
          {SECTION_A_DATA.map((v, idx) => {
            const isActive = idx === questionIndex;
            return (
              <button
                key={v.id}
                type="button"
                onClick={() => onJumpToVerb && onJumpToVerb(idx)}
                className={`font-pixel text-[10px] px-2 py-1 border transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#3b82f6] text-white border-[#1d4ed8] scale-105 shadow'
                    : 'bg-[#fffaf0] text-[#78350f] border-[#b45309] hover:bg-[#fed7aa]'
                }`}
              >
                {idx + 1}. {v.base}
              </button>
            );
          })}
        </div>
      </div>

      {/* Inputs for Current Verb */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {/* Past Form */}
        <div
          className={`p-3 border-2 transition-all ${
            submitted
              ? isPastCorrect
                ? 'bg-[#dcfce7] border-[#16a34a]'
                : 'bg-[#fee2e2] border-[#dc2626]'
              : 'bg-[#fffaf0] border-[#8b5a2b]'
          }`}
        >
          <div className="flex items-center justify-between mb-1.5">
            <label className="font-pixel text-[11px] text-[#4a2e13] font-bold">
              Past Form <span className="text-[10px] text-[#78350f] font-normal">(過去式)</span>
            </label>
            {submitted && (
              <PixelSprite name={isPastCorrect ? 'check' : 'cross'} size={14} />
            )}
          </div>
          <input
            type="text"
            disabled={submitted}
            placeholder="e.g. cut, did..."
            value={answers.past}
            onChange={(e) => onChange('past', e.target.value)}
            className="w-full px-3 py-2 text-sm sm:text-base font-bold text-[#1f2937] bg-white border-2 border-[#78350f] focus:outline-none focus:ring-2 focus:ring-[#f59e0b]"
            autoComplete="off"
            autoCorrect="off"
            spellCheck="false"
          />
          {submitted && !isPastCorrect && (
            <p className="mt-1 text-xs font-bold text-[#b91c1c]">
              Correct: <span className="font-mono underline">{currentVerb.past}</span>
            </p>
          )}
        </div>

        {/* Past Participle */}
        <div
          className={`p-3 border-2 transition-all ${
            submitted
              ? isPpCorrect
                ? 'bg-[#dcfce7] border-[#16a34a]'
                : 'bg-[#fee2e2] border-[#dc2626]'
              : 'bg-[#fffaf0] border-[#8b5a2b]'
          }`}
        >
          <div className="flex items-center justify-between mb-1.5">
            <label className="font-pixel text-[11px] text-[#4a2e13] font-bold">
              Past Participle <span className="text-[10px] text-[#78350f] font-normal">(過去分詞)</span>
            </label>
            {submitted && (
              <PixelSprite name={isPpCorrect ? 'check' : 'cross'} size={14} />
            )}
          </div>
          <input
            type="text"
            disabled={submitted}
            placeholder="e.g. cut, done..."
            value={answers.pastParticiple}
            onChange={(e) => onChange('pastParticiple', e.target.value)}
            className="w-full px-3 py-2 text-sm sm:text-base font-bold text-[#1f2937] bg-white border-2 border-[#78350f] focus:outline-none focus:ring-2 focus:ring-[#f59e0b]"
            autoComplete="off"
            autoCorrect="off"
            spellCheck="false"
          />
          {submitted && !isPpCorrect && (
            <p className="mt-1 text-xs font-bold text-[#b91c1c]">
              Correct: <span className="font-mono underline">{currentVerb.pastParticiple}</span>
            </p>
          )}
        </div>

        {/* Present Participle (-ing) */}
        <div
          className={`p-3 border-2 transition-all ${
            submitted
              ? isPrpCorrect
                ? 'bg-[#dcfce7] border-[#16a34a]'
                : 'bg-[#fee2e2] border-[#dc2626]'
              : 'bg-[#fffaf0] border-[#8b5a2b]'
          }`}
        >
          <div className="flex items-center justify-between mb-1.5">
            <label className="font-pixel text-[11px] text-[#4a2e13] font-bold">
              Present Participle <span className="text-[10px] text-[#78350f] font-normal">(-ing 現在分詞)</span>
            </label>
            {submitted && (
              <PixelSprite name={isPrpCorrect ? 'check' : 'cross'} size={14} />
            )}
          </div>
          <input
            type="text"
            disabled={submitted}
            placeholder="e.g. cutting, doing..."
            value={answers.presentParticiple}
            onChange={(e) => onChange('presentParticiple', e.target.value)}
            className="w-full px-3 py-2 text-sm sm:text-base font-bold text-[#1f2937] bg-white border-2 border-[#78350f] focus:outline-none focus:ring-2 focus:ring-[#f59e0b]"
            autoComplete="off"
            autoCorrect="off"
            spellCheck="false"
          />
          {submitted && !isPrpCorrect && (
            <p className="mt-1 text-xs font-bold text-[#b91c1c]">
              Correct: <span className="font-mono underline">{currentVerb.presentParticiple}</span>
            </p>
          )}
        </div>
      </div>

      {/* Complete Overview Harvest Table */}
      <div className="pixel-parchment p-3 overflow-x-auto">
        <h3 className="font-pixel text-[10px] sm:text-xs text-[#5c3708] mb-2 flex items-center gap-1.5">
          <PixelSprite name="scroll" size={16} />
          <span>Full Verb Transformation Reference Table</span>
        </h3>
        <table className="w-full text-left text-xs border-collapse border border-[#8b5a2b] bg-white">
          <thead>
            <tr className="bg-[#edd6b1] text-[#4a2800] border-b-2 border-[#8b5a2b] font-pixel text-[9px] sm:text-[10px]">
              <th className="p-2 border-r border-[#8b5a2b]">#</th>
              <th className="p-2 border-r border-[#8b5a2b]">
                Base Form<br /><span className="text-[#7c4f24] font-normal">(原形)</span>
              </th>
              <th className="p-2 border-r border-[#8b5a2b]">
                Past Form<br /><span className="text-[#7c4f24] font-normal">(過去式)</span>
              </th>
              <th className="p-2 border-r border-[#8b5a2b]">
                Past Participle<br /><span className="text-[#7c4f24] font-normal">(過去分詞)</span>
              </th>
              <th className="p-2">
                Present Participle (-ing)<br /><span className="text-[#7c4f24] font-normal">(現在分詞)</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {SECTION_A_DATA.map((row, idx) => {
              const isCurrent = idx === questionIndex;
              return (
                <tr
                  key={row.id}
                  onClick={() => onJumpToVerb && onJumpToVerb(idx)}
                  className={`border-b border-[#e5d5ba] cursor-pointer transition-colors ${
                    isCurrent
                      ? 'bg-[#dbeafe] font-bold text-[#1e40af]'
                      : idx % 2 === 0
                      ? 'bg-[#fffdf7] hover:bg-[#fef3c7]'
                      : 'bg-[#faf5eb] hover:bg-[#fef3c7]'
                  }`}
                >
                  <td className="p-2 border-r border-[#e5d5ba] font-pixel text-[10px] text-center">
                    {row.id}
                  </td>
                  <td className="p-2 border-r border-[#e5d5ba] font-semibold flex items-center gap-1.5">
                    <PixelSprite name={row.spriteName} size={18} />
                    <span>{row.base}</span>
                  </td>
                  <td className="p-2 border-r border-[#e5d5ba] font-mono">
                    {isCurrent && !submitted ? (answers.past || '_____') : row.past}
                  </td>
                  <td className="p-2 border-r border-[#e5d5ba] font-mono">
                    {isCurrent && !submitted ? (answers.pastParticiple || '_____') : row.pastParticiple}
                  </td>
                  <td className="p-2 font-mono">
                    {isCurrent && !submitted ? (answers.presentParticiple || '_____') : row.presentParticiple}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
