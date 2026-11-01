import React, { useState, useEffect } from 'react';
import { SectionId, UserSavedData } from '../../types/game';
import { LEVEL_DEFINITIONS } from '../../data/gameData';
import { TWO_PLAYER_MCQ_DATA, MCQQuestion } from '../../data/twoPlayerMCQData';
import { PixelSprite } from '../common/PixelSprite';
import { soundManager } from '../../utils/sound';

export const ALL_SECTIONS: SectionId[] = ['A', 'B', 'E', 'F', 'G', 'H', 'I', 'K'];

interface SplitScreenGameProps {
  sectionId: SectionId;
  userData: UserSavedData;
  onFinishLevel: (stars: number, scoreGained: number) => void;
  onExit: () => void;
  onChangeSection?: (newSectionId: SectionId) => void;
}

export const SplitScreenGame: React.FC<SplitScreenGameProps> = ({
  sectionId,
  userData,
  onFinishLevel,
  onExit,
  onChangeSection,
}) => {
  const levelDef = LEVEL_DEFINITIONS[sectionId] || LEVEL_DEFINITIONS['A'];
  const questions: MCQQuestion[] = TWO_PLAYER_MCQ_DATA[sectionId] || [];
  const currentSectionIndex = ALL_SECTIONS.indexOf(sectionId);

  const [qIndex, setQIndex] = useState(0);
  const currentQ = questions[qIndex] || questions[0];

  const [isGameOver, setIsGameOver] = useState(false);

  // Timers for each player
  const [p1Timer, setP1Timer] = useState(0);
  const [p2Timer, setP2Timer] = useState(0);

  // Player 1 Independent State
  const [p1Score, setP1Score] = useState(0);
  const [p1CorrectCount, setP1CorrectCount] = useState(0);
  const [p1SelectedKey, setP1SelectedKey] = useState<string | null>(null);
  const [p1Submitted, setP1Submitted] = useState(false);
  const [p1IsCorrect, setP1IsCorrect] = useState<boolean | null>(null);
  const [p1SpeedBonus, setP1SpeedBonus] = useState(false);
  const [p1Streak, setP1Streak] = useState(0);

  // Player 2 Independent State
  const [p2Score, setP2Score] = useState(0);
  const [p2CorrectCount, setP2CorrectCount] = useState(0);
  const [p2SelectedKey, setP2SelectedKey] = useState<string | null>(null);
  const [p2Submitted, setP2Submitted] = useState(false);
  const [p2IsCorrect, setP2IsCorrect] = useState<boolean | null>(null);
  const [p2SpeedBonus, setP2SpeedBonus] = useState(false);
  const [p2Streak, setP2Streak] = useState(0);

  // Reset when level changes
  useEffect(() => {
    setQIndex(0);
    setIsGameOver(false);
    setP1Score(0);
    setP2Score(0);
    setP1CorrectCount(0);
    setP2CorrectCount(0);
    setP1Streak(0);
    setP2Streak(0);
    resetRoundState();
  }, [sectionId]);

  const resetRoundState = () => {
    setP1Timer(0);
    setP2Timer(0);
    setP1SelectedKey(null);
    setP1Submitted(false);
    setP1IsCorrect(null);
    setP1SpeedBonus(false);

    setP2SelectedKey(null);
    setP2Submitted(false);
    setP2IsCorrect(null);
    setP2SpeedBonus(false);
  };

  // Timer loop
  useEffect(() => {
    if (p1Submitted && p2Submitted) return;
    const interval = setInterval(() => {
      if (!p1Submitted) setP1Timer((t) => t + 1);
      if (!p2Submitted) setP2Timer((t) => t + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [p1Submitted, p2Submitted]);

  // Both submitted check
  const bothSubmitted = p1Submitted && p2Submitted;

  useEffect(() => {
    if (bothSubmitted && p1IsCorrect === null && p2IsCorrect === null && currentQ) {
      const correctKey = currentQ.correctKey;
      const res1Correct = p1SelectedKey === correctKey;
      const res2Correct = p2SelectedKey === correctKey;

      let s1 = res1Correct ? 10 : 0;
      let s2 = res2Correct ? 10 : 0;
      let p1Bonus = false;
      let p2Bonus = false;

      // Speed bonus: faster player gets +5 if both are correct
      if (res1Correct && res2Correct) {
        if (p1Timer < p2Timer) {
          s1 += 5;
          p1Bonus = true;
        } else if (p2Timer < p1Timer) {
          s2 += 5;
          p2Bonus = true;
        }
      }

      setP1IsCorrect(res1Correct);
      setP2IsCorrect(res2Correct);
      setP1SpeedBonus(p1Bonus);
      setP2SpeedBonus(p2Bonus);

      setP1Score((s) => s + s1);
      setP2Score((s) => s + s2);

      if (res1Correct) {
        setP1CorrectCount((c) => c + 1);
        setP1Streak((st) => st + 1);
      } else {
        setP1Streak(0);
      }

      if (res2Correct) {
        setP2CorrectCount((c) => c + 1);
        setP2Streak((st) => st + 1);
      } else {
        setP2Streak(0);
      }

      if (res1Correct || res2Correct) {
        soundManager.playCorrect();
      } else {
        soundManager.playIncorrect();
      }
    }
  }, [bothSubmitted, currentQ]);

  // Keyboard hotkeys for fast 2-player keyboard play
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (bothSubmitted || isGameOver || !currentQ) return;
      const key = e.key.toLowerCase();

      // P1: Q, W, E, R
      if (!p1Submitted) {
        if (key === 'q' && currentQ.options[0]) handleP1Tap(currentQ.options[0].key);
        else if (key === 'w' && currentQ.options[1]) handleP1Tap(currentQ.options[1].key);
        else if (key === 'e' && currentQ.options[2]) handleP1Tap(currentQ.options[2].key);
        else if (key === 'r' && currentQ.options[3]) handleP1Tap(currentQ.options[3].key);
      }

      // P2: U, I, O, P
      if (!p2Submitted) {
        if (key === 'u' && currentQ.options[0]) handleP2Tap(currentQ.options[0].key);
        else if (key === 'i' && currentQ.options[1]) handleP2Tap(currentQ.options[1].key);
        else if (key === 'o' && currentQ.options[2]) handleP2Tap(currentQ.options[2].key);
        else if (key === 'p' && currentQ.options[3]) handleP2Tap(currentQ.options[3].key);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [bothSubmitted, isGameOver, p1Submitted, p2Submitted, currentQ]);

  // Tap handlers
  const handleP1Tap = (key: string) => {
    if (p1Submitted) return;
    soundManager.playClick();
    setP1SelectedKey(key);
    setP1Submitted(true);
  };

  const handleP2Tap = (key: string) => {
    if (p2Submitted) return;
    soundManager.playClick();
    setP2SelectedKey(key);
    setP2Submitted(true);
  };

  const handleNextTogether = () => {
    soundManager.playClick();
    if (qIndex + 1 < questions.length) {
      setQIndex((prev) => prev + 1);
      resetRoundState();
    } else {
      soundManager.playLevelComplete();
      setIsGameOver(true);
      const totalScore = Math.max(p1Score, p2Score);
      onFinishLevel(3, totalScore);
    }
  };

  // Skip / Next Level at any time
  const handleJumpToNextSection = () => {
    soundManager.playClick();
    if (currentSectionIndex < ALL_SECTIONS.length - 1) {
      const nextSec = ALL_SECTIONS[currentSectionIndex + 1];
      if (onChangeSection) onChangeSection(nextSec);
    } else {
      onExit();
    }
  };

  const handleJumpToPrevSection = () => {
    soundManager.playClick();
    if (currentSectionIndex > 0) {
      const prevSec = ALL_SECTIONS[currentSectionIndex - 1];
      if (onChangeSection) onChangeSection(prevSec);
    } else {
      onExit();
    }
  };

  const levelProgressPercent = Math.round(((qIndex + (bothSubmitted ? 1 : 0)) / questions.length) * 100);

  return (
    <div className="relative w-full max-w-7xl mx-auto px-2 sm:px-4 py-3 flex flex-col gap-3">
      {/* Top Banner & Universal Level Progress Bar */}
      <div className="pixel-wood-box p-3 flex flex-col gap-2.5 shadow-md">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                soundManager.playClick();
                onExit();
              }}
              className="pixel-btn-gold px-2.5 py-1 text-xs font-pixel flex items-center gap-1 cursor-pointer"
            >
              <span>🗺️ Map</span>
            </button>

            <button
              onClick={handleJumpToPrevSection}
              disabled={currentSectionIndex === 0}
              className={`px-2.5 py-1 text-xs font-pixel border cursor-pointer ${
                currentSectionIndex === 0
                  ? 'bg-stone-300 text-stone-500 border-stone-400 opacity-50 cursor-not-allowed'
                  : 'pixel-btn-blue'
              }`}
            >
              ⬅ Prev
            </button>

            <div>
              <span className="font-pixel text-[10px] text-[#8b5a2b] block">
                2-Player Split-Screen PK • Level {currentSectionIndex + 1} of {ALL_SECTIONS.length}
              </span>
              <h2 className="font-pixel text-xs sm:text-sm text-[#4a2800] tracking-wide font-bold">
                {levelDef.name}
              </h2>
            </div>
          </div>

          {/* Guaranteed Next Level button */}
          <div className="flex items-center gap-3">
            <button
              onClick={handleJumpToNextSection}
              className="pixel-btn-green px-3 py-1.5 text-xs font-pixel flex items-center gap-1.5 cursor-pointer shadow animate-pulse hover:animate-none"
              title="Skip or proceed to next level"
            >
              <span>Next Level ➔</span>
            </button>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full flex items-center gap-3">
          <div className="flex-1 bg-[#4a2e13] h-3 border border-[#2b1807] overflow-hidden p-0.5">
            <div
              className="h-full bg-gradient-to-r from-[#3b82f6] via-[#f59e0b] to-[#10b981] transition-all duration-300"
              style={{ width: `${levelProgressPercent}%` }}
            />
          </div>
          <span className="font-pixel text-[10px] text-[#78350f] shrink-0">
            Duel {qIndex + 1}/{questions.length} ({levelProgressPercent}%)
          </span>
        </div>
      </div>

      {/* Synchronous Split Screen Arena */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 relative">
        {/* Central VS Badge */}
        <div className="hidden md:flex absolute left-1/2 top-4 -translate-x-1/2 z-20 w-10 h-10 rounded-full bg-[#f59e0b] border-3 border-[#78350f] items-center justify-center font-pixel text-xs text-white shadow-xl">
          VS
        </div>

        {/* ==================== PLAYER 1 (LEFT / BLUE) ==================== */}
        <div className="pixel-wood-box p-3 sm:p-4 flex flex-col gap-3 border-4 border-[#1e3a8a] bg-[#eff6ff]">
          {/* Header */}
          <div className="flex items-center justify-between pb-2 border-b-2 border-[#93c5fd]">
            <div className="flex items-center gap-2">
              <PixelSprite name="player1" size={32} animate={p1Streak > 1} />
              <div>
                <span className="font-pixel text-xs text-[#1e40af] font-bold block">
                  Player 1 (Blue)
                </span>
                <span className="text-[10px] text-[#3b82f6] font-semibold">
                  Keys: Q, W, E, R / Tap
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="bg-[#1e40af] text-white px-2.5 py-1 font-pixel text-xs border border-[#172554]">
                {p1Score} PTS
              </div>
              {p1Streak > 1 && (
                <span className="bg-[#f59e0b] text-white px-1.5 py-0.5 font-pixel text-[9px] animate-pulse">
                  {p1Streak}x Streak!
                </span>
              )}
            </div>
          </div>

          {/* Question Text */}
          <div className="pixel-parchment p-3 bg-white min-h-[90px] flex flex-col justify-center">
            <span className="font-pixel text-[9px] text-[#1e40af] mb-1">
              Question {qIndex + 1}:
            </span>
            <p className="text-sm sm:text-base font-bold text-[#1e293b] leading-snug">
              {currentQ.prompt}
            </p>
          </div>

          {/* Player 1 Options */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-1">
            {currentQ.options.map((opt, oIdx) => {
              const isSelected = p1SelectedKey === opt.key;
              const isCorrectChoice = opt.key === currentQ.correctKey;
              const keyHint = ['Q', 'W', 'E', 'R'][oIdx] || '';

              let btnStyle =
                'bg-white border-[#3b82f6] text-[#1e293b] hover:bg-[#dbeafe] active:scale-95';

              if (isSelected) {
                btnStyle = 'bg-[#1e40af] text-white border-[#172554] ring-2 ring-[#60a5fa]';
              }

              if (bothSubmitted) {
                if (isCorrectChoice) {
                  btnStyle = 'bg-[#16a34a] text-white border-[#14532d] font-bold';
                } else if (isSelected && !isCorrectChoice) {
                  btnStyle = 'bg-[#dc2626] text-white border-[#7f1d1d] opacity-80';
                } else {
                  btnStyle = 'bg-stone-100 text-stone-400 border-stone-300 opacity-40';
                }
              }

              return (
                <button
                  key={opt.key}
                  type="button"
                  disabled={p1Submitted}
                  onClick={() => handleP1Tap(opt.key)}
                  className={`p-2.5 border-2 flex items-center justify-between text-left cursor-pointer transition-all ${btnStyle}`}
                >
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded bg-blue-100 text-blue-900 font-pixel text-[10px] flex items-center justify-center font-bold shrink-0">
                      {opt.key}
                    </span>
                    <span className="text-xs sm:text-sm font-bold">{opt.text}</span>
                  </div>
                  <span className="text-[9px] font-mono opacity-60 hidden sm:inline">
                    [{keyHint}]
                  </span>
                </button>
              );
            })}
          </div>

          {/* Status Bar */}
          <div className="mt-auto pt-2 flex items-center justify-between text-xs">
            {p1Submitted && !bothSubmitted && (
              <span className="font-pixel text-[10px] text-[#1e40af] animate-pulse">
                ✓ Locked in! Waiting for Player 2...
              </span>
            )}
            {bothSubmitted && (
              <div className="flex items-center gap-2">
                <PixelSprite name={p1IsCorrect ? 'check' : 'cross'} size={18} />
                <span
                  className={`font-pixel text-[11px] ${
                    p1IsCorrect ? 'text-[#16a34a]' : 'text-[#dc2626]'
                  }`}
                >
                  {p1IsCorrect ? '+10' : '+0'}
                  {p1SpeedBonus ? ' (+5 Speed Bonus!)' : ''}
                </span>
              </div>
            )}
            <span className="font-mono text-[11px] text-[#64748b]">⏱️ {p1Timer}s</span>
          </div>
        </div>

        {/* ==================== PLAYER 2 (RIGHT / GOLD) ==================== */}
        <div className="pixel-wood-box p-3 sm:p-4 flex flex-col gap-3 border-4 border-[#b45309] bg-[#fffbeb]">
          {/* Header */}
          <div className="flex items-center justify-between pb-2 border-b-2 border-[#fde68a]">
            <div className="flex items-center gap-2">
              <PixelSprite name="player2" size={32} animate={p2Streak > 1} />
              <div>
                <span className="font-pixel text-xs text-[#b45309] font-bold block">
                  Player 2 (Gold)
                </span>
                <span className="text-[10px] text-[#d97706] font-semibold">
                  Keys: U, I, O, P / Tap
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="bg-[#b45309] text-white px-2.5 py-1 font-pixel text-xs border border-[#78350f]">
                {p2Score} PTS
              </div>
              {p2Streak > 1 && (
                <span className="bg-[#f59e0b] text-white px-1.5 py-0.5 font-pixel text-[9px] animate-pulse">
                  {p2Streak}x Streak!
                </span>
              )}
            </div>
          </div>

          {/* Question Text */}
          <div className="pixel-parchment p-3 bg-white min-h-[90px] flex flex-col justify-center">
            <span className="font-pixel text-[9px] text-[#b45309] mb-1">
              Question {qIndex + 1}:
            </span>
            <p className="text-sm sm:text-base font-bold text-[#1e293b] leading-snug">
              {currentQ.prompt}
            </p>
          </div>

          {/* Player 2 Options */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-1">
            {currentQ.options.map((opt, oIdx) => {
              const isSelected = p2SelectedKey === opt.key;
              const isCorrectChoice = opt.key === currentQ.correctKey;
              const keyHint = ['U', 'I', 'O', 'P'][oIdx] || '';

              let btnStyle =
                'bg-white border-[#f59e0b] text-[#1e293b] hover:bg-[#fef3c7] active:scale-95';

              if (isSelected) {
                btnStyle = 'bg-[#b45309] text-white border-[#78350f] ring-2 ring-[#fbbf24]';
              }

              if (bothSubmitted) {
                if (isCorrectChoice) {
                  btnStyle = 'bg-[#16a34a] text-white border-[#14532d] font-bold';
                } else if (isSelected && !isCorrectChoice) {
                  btnStyle = 'bg-[#dc2626] text-white border-[#7f1d1d] opacity-80';
                } else {
                  btnStyle = 'bg-stone-100 text-stone-400 border-stone-300 opacity-40';
                }
              }

              return (
                <button
                  key={opt.key}
                  type="button"
                  disabled={p2Submitted}
                  onClick={() => handleP2Tap(opt.key)}
                  className={`p-2.5 border-2 flex items-center justify-between text-left cursor-pointer transition-all ${btnStyle}`}
                >
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded bg-amber-100 text-amber-900 font-pixel text-[10px] flex items-center justify-center font-bold shrink-0">
                      {opt.key}
                    </span>
                    <span className="text-xs sm:text-sm font-bold">{opt.text}</span>
                  </div>
                  <span className="text-[9px] font-mono opacity-60 hidden sm:inline">
                    [{keyHint}]
                  </span>
                </button>
              );
            })}
          </div>

          {/* Status Bar */}
          <div className="mt-auto pt-2 flex items-center justify-between text-xs">
            {p2Submitted && !bothSubmitted && (
              <span className="font-pixel text-[10px] text-[#b45309] animate-pulse">
                ✓ Locked in! Waiting for Player 1...
              </span>
            )}
            {bothSubmitted && (
              <div className="flex items-center gap-2">
                <PixelSprite name={p2IsCorrect ? 'check' : 'cross'} size={18} />
                <span
                  className={`font-pixel text-[11px] ${
                    p2IsCorrect ? 'text-[#16a34a]' : 'text-[#dc2626]'
                  }`}
                >
                  {p2IsCorrect ? '+10' : '+0'}
                  {p2SpeedBonus ? ' (+5 Speed Bonus!)' : ''}
                </span>
              </div>
            )}
            <span className="font-mono text-[11px] text-[#64748b]">⏱️ {p2Timer}s</span>
          </div>
        </div>
      </div>

      {/* Bottom Control Bar */}
      <div className="pixel-wood-box p-3 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <button
            onClick={handleJumpToPrevSection}
            disabled={currentSectionIndex === 0}
            className={`px-3 py-1.5 text-xs font-pixel border cursor-pointer ${
              currentSectionIndex === 0
                ? 'bg-stone-300 text-stone-500 border-stone-400 opacity-50 cursor-not-allowed'
                : 'pixel-btn-blue'
            }`}
          >
            ⬅ Previous Level
          </button>

          <button
            onClick={handleJumpToNextSection}
            className="pixel-btn-gold px-3 py-1.5 text-xs font-pixel cursor-pointer"
          >
            Skip / Next Level ➔
          </button>
        </div>

        {/* Advance Round Button */}
        <div>
          {bothSubmitted && (
            <button
              onClick={handleNextTogether}
              className="pixel-btn-green px-6 py-2 font-pixel text-xs sm:text-sm cursor-pointer shadow-lg animate-bounce"
            >
              {qIndex + 1 < questions.length ? 'Next Question ➔' : 'View Winner 🏆'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
