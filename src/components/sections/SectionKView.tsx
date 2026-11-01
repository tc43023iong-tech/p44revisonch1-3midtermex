import React from 'react';
import {
  SECTION_K_ACTIVITIES,
  SECTION_K_QUESTIONS,
  SurveyReportQuestion,
} from '../../data/gameData';
import { PixelSprite } from '../common/PixelSprite';

interface SectionKViewProps {
  questionIndex: number; // 0 to 4
  answer: string;
  onChange: (val: string) => void;
  submitted: boolean;
  playerTheme?: 'blue' | 'green';
}

export const SectionKView: React.FC<SectionKViewProps> = ({
  questionIndex,
  answer,
  onChange,
  submitted,
  playerTheme = 'blue',
}) => {
  const currentQ: SurveyReportQuestion =
    SECTION_K_QUESTIONS[questionIndex] || SECTION_K_QUESTIONS[0];
  const isCorrect = currentQ.acceptedAnswers.some(
    (ans) => ans.toLowerCase() === (answer || '').trim().toLowerCase()
  );

  return (
    <div className="flex flex-col gap-4">
      {/* Visual Chart & Data Table Section */}
      <div className="pixel-parchment p-3.5 sm:p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-pixel text-[10px] sm:text-xs text-[#5c3708] flex items-center gap-1.5">
            <PixelSprite name="scroll" size={16} />
            <span>Class 4B After-School Activities Survey Chart</span>
          </h3>
          <span className="text-[11px] text-[#78350f] font-semibold">Total Pupils: 25</span>
        </div>

        {/* Bar chart with cute pixel sprites */}
        <div className="space-y-2 bg-white p-3 border-2 border-[#8b5a2b] shadow-inner">
          {SECTION_K_ACTIVITIES.map((act) => {
            const isTargetCount = act.count === currentQ.count;
            return (
              <div
                key={act.name}
                className={`flex items-center gap-2 text-xs transition-colors p-1 rounded ${
                  isTargetCount ? 'bg-[#fef9c3] ring-1 ring-[#eab308]' : ''
                }`}
              >
                <div className="w-6 h-6 flex items-center justify-center shrink-0">
                  <PixelSprite name={act.spriteName} size={18} />
                </div>
                <div className="w-36 sm:w-44 font-semibold text-[#1f2937] truncate">
                  {act.name}
                </div>
                <div className="flex-1 bg-[#f1f5f9] h-5 rounded overflow-hidden relative border border-[#cbd5e1]">
                  <div
                    className="h-full transition-all duration-500 rounded"
                    style={{
                      width: `${(act.count / 8) * 100}%`,
                      backgroundColor: act.color,
                    }}
                  />
                  <span className="absolute right-2 top-0.5 text-[11px] font-bold text-[#1e293b]">
                    {act.count} pupils
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Activity Word Bank (tap to insert) */}
      <div className="pixel-parchment p-3">
        <span className="font-pixel text-[10px] text-[#78350f] uppercase block mb-1.5">
          Tap an activity to fill the report:
        </span>
        <div className="flex flex-wrap gap-2">
          {SECTION_K_ACTIVITIES.map((act) => {
            const isSelected = (answer || '').trim().toLowerCase() === act.name.toLowerCase();
            return (
              <button
                key={act.name}
                type="button"
                disabled={submitted}
                onClick={() => onChange(act.name)}
                className={`px-3 py-1.5 text-xs sm:text-sm font-bold border-2 transition-transform cursor-pointer active:scale-95 flex items-center gap-1.5 ${
                  isSelected
                    ? 'bg-[#3b82f6] text-white border-[#1d4ed8] shadow'
                    : 'bg-[#fffaf0] text-[#451a03] border-[#92400e] hover:bg-[#fed7aa]'
                }`}
              >
                <PixelSprite name={act.spriteName} size={16} />
                <span>{act.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Question Card */}
      <div className="pixel-parchment p-4 sm:p-5 flex flex-col sm:flex-row items-center gap-4">
        <div className="w-16 h-16 bg-[#e0f2fe] border-3 border-[#0284c7] flex items-center justify-center shrink-0 shadow">
          <PixelSprite name={currentQ.spriteName} size={42} animate={submitted && isCorrect} />
        </div>

        <div className="flex-1 w-full">
          <div className="flex items-center justify-between mb-2">
            <span className="font-pixel text-[10px] text-[#8b5a2b] uppercase">
              Survey Report Statement {questionIndex + 1} of {SECTION_K_QUESTIONS.length}
            </span>
            <span className="text-xs text-[#1e40af] font-semibold">
              Pupils count: <span className="font-bold underline">{currentQ.count}</span>
            </span>
          </div>

          <div className="text-base sm:text-lg font-bold text-[#2b1807] leading-relaxed">
            {currentQ.prefix}{' '}
            <span className="inline-block relative min-w-[180px]">
              <input
                type="text"
                disabled={submitted}
                placeholder="type or tap activity above..."
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
            {currentQ.suffix}
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
                  ? 'Correct report statement!'
                  : `Answer: ${currentQ.correctActivity}`}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
