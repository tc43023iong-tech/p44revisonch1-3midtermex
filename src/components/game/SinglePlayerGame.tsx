import React, { useState, useEffect } from 'react';
import { SectionId, UserSavedData } from '../../types/game';
import { LEVEL_DEFINITIONS } from '../../data/gameData';
import { PixelSprite } from '../common/PixelSprite';
import { GameAtmosphere } from '../common/GameAtmosphere';
import { soundManager } from '../../utils/sound';
import { evaluateSectionAnswer } from '../../utils/answerChecker';

// 8 Section Views
import { SectionAView, VerbAnswers } from '../sections/SectionAView';
import { SectionBView } from '../sections/SectionBView';
import { SectionEView } from '../sections/SectionEView';
import { SectionFView } from '../sections/SectionFView';
import { SectionGView } from '../sections/SectionGView';
import { SectionHView, ConjunctionAnswer } from '../sections/SectionHView';
import { SectionIView } from '../sections/SectionIView';
import { SectionKView } from '../sections/SectionKView';

export const ALL_SECTIONS: SectionId[] = ['A', 'B', 'E', 'F', 'G', 'H', 'I', 'K'];

interface SinglePlayerGameProps {
  sectionId: SectionId;
  userData: UserSavedData;
  onFinishLevel: (stars: number, scoreGained: number) => void;
  onExit: () => void;
  onChangeSection?: (newSectionId: SectionId) => void;
}

export const SinglePlayerGame: React.FC<SinglePlayerGameProps> = ({
  sectionId,
  userData,
  onFinishLevel,
  onExit,
  onChangeSection,
}) => {
  const levelDef = LEVEL_DEFINITIONS[sectionId] || LEVEL_DEFINITIONS['A'];
  const totalQuestions = levelDef.totalQuestions;
  const currentSectionIndex = ALL_SECTIONS.indexOf(sectionId);

  const [qIndex, setQIndex] = useState(0);

  // Score & status
  const [score, setScore] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [lastScoreGained, setLastScoreGained] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [showParticleBurst, setShowParticleBurst] = useState(false);

  // Timer
  const [timerSeconds, setTimerSeconds] = useState(0);

  // Independent question answers
  const [answerA, setAnswerA] = useState<VerbAnswers>({
    past: '',
    pastParticiple: '',
    presentParticiple: '',
  });
  const [answerB, setAnswerB] = useState<string>('');
  const [answerE, setAnswerE] = useState<string | null>(null);
  const [answerF, setAnswerF] = useState<'A' | 'B' | null>(null);
  const [answerG, setAnswerG] = useState<string>('');
  const [answerH, setAnswerH] = useState<ConjunctionAnswer>({ word1: '', word2: '' });
  const [answerI, setAnswerI] = useState<string>('');
  const [answerK, setAnswerK] = useState<string>('');

  // Reset when level or question changes
  useEffect(() => {
    setQIndex(0);
    setScore(0);
    setCorrectCount(0);
    setIsGameOver(false);
    resetQuestionState();
  }, [sectionId]);

  const resetQuestionState = () => {
    setIsSubmitted(false);
    setIsCorrect(null);
    setTimerSeconds(0);
    setLastScoreGained(0);
    setShowParticleBurst(false);
    setAnswerA({ past: '', pastParticiple: '', presentParticiple: '' });
    setAnswerB('');
    setAnswerE(null);
    setAnswerF(null);
    setAnswerG('');
    setAnswerH({ word1: '', word2: '' });
    setAnswerI('');
    setAnswerK('');
  };

  // Timer loop
  useEffect(() => {
    if (isSubmitted || isGameOver) return;
    const interval = setInterval(() => {
      setTimerSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [isSubmitted, isGameOver]);

  // Current answer value based on active section
  const getCurrentAnswerValue = () => {
    switch (sectionId) {
      case 'A':
        return answerA;
      case 'B':
        return answerB;
      case 'E':
        return answerE;
      case 'F':
        return answerF;
      case 'G':
        return answerG;
      case 'H':
        return answerH;
      case 'I':
        return answerI;
      case 'K':
        return answerK;
      default:
        return null;
    }
  };

  // Check if current question has an input provided
  const hasProvidedInput = () => {
    switch (sectionId) {
      case 'A':
        return !!(answerA.past || answerA.pastParticiple || answerA.presentParticiple);
      case 'B':
        return !!answerB.trim();
      case 'E':
        return !!answerE;
      case 'F':
        return !!answerF;
      case 'G':
        return !!answerG.trim();
      case 'H':
        return !!answerH.word1.trim();
      case 'I':
        return !!answerI.trim();
      case 'K':
        return !!answerK.trim();
      default:
        return false;
    }
  };

  // Evaluation Handler
  const handleSubmitCurrentAnswer = (providedOverride?: any) => {
    if (isSubmitted) return;
    const ans = providedOverride !== undefined ? providedOverride : getCurrentAnswerValue();
    const result = evaluateSectionAnswer(sectionId, qIndex, ans, timerSeconds);

    setIsSubmitted(true);
    setIsCorrect(result.isCorrect);
    setLastScoreGained(result.scoreGained);

    if (result.isCorrect) {
      soundManager.playCorrect();
      setScore((prev) => prev + result.scoreGained);
      setCorrectCount((prev) => prev + 1);
      setShowParticleBurst(true);
      setTimeout(() => setShowParticleBurst(false), 1800);
    } else {
      soundManager.playIncorrect();
    }
  };

  // Move to next question or complete level
  const handleNextQuestion = () => {
    soundManager.playClick();
    if (qIndex + 1 < totalQuestions) {
      setQIndex((prev) => prev + 1);
      resetQuestionState();
    } else {
      handleCompleteLevel();
    }
  };

  const handleCompleteLevel = () => {
    let stars = 1;
    const ratio = correctCount / totalQuestions;
    if (ratio >= 0.85) stars = 3;
    else if (ratio >= 0.5) stars = 2;

    soundManager.playLevelComplete();
    setIsGameOver(true);
    onFinishLevel(stars, score);
  };

  // Skip / Jump to Next Section even if not finished
  const handleJumpToNextSection = () => {
    soundManager.playClick();
    if (currentSectionIndex < ALL_SECTIONS.length - 1) {
      const nextSec = ALL_SECTIONS[currentSectionIndex + 1];
      if (onChangeSection) onChangeSection(nextSec);
    } else {
      // Loop back or exit to map
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

  // Render active section component
  const renderSectionBody = () => {
    switch (sectionId) {
      case 'A':
        return (
          <SectionAView
            questionIndex={qIndex}
            answers={answerA}
            onChange={(field, val) => setAnswerA((prev) => ({ ...prev, [field]: val }))}
            submitted={isSubmitted}
            playerTheme="blue"
            onJumpToVerb={(idx) => {
              setQIndex(idx);
              resetQuestionState();
            }}
          />
        );

      case 'B':
        return (
          <SectionBView
            questionIndex={qIndex}
            answer={answerB}
            onChange={(val) => setAnswerB(val)}
            submitted={isSubmitted}
            playerTheme="blue"
          />
        );

      case 'E':
        return (
          <SectionEView
            questionIndex={qIndex}
            selectedAnswer={answerE}
            onSelect={(key) => {
              setAnswerE(key);
              if (!isSubmitted) {
                handleSubmitCurrentAnswer(key);
              }
            }}
            submitted={isSubmitted}
            playerTheme="blue"
          />
        );

      case 'F':
        return (
          <SectionFView
            questionIndex={qIndex}
            selectedKey={answerF}
            onSelect={(key) => {
              setAnswerF(key);
              if (!isSubmitted) {
                handleSubmitCurrentAnswer(key);
              }
            }}
            submitted={isSubmitted}
            playerTheme="blue"
          />
        );

      case 'G':
        return (
          <SectionGView
            questionIndex={qIndex}
            answer={answerG}
            onChange={(val) => setAnswerG(val)}
            submitted={isSubmitted}
            playerTheme="blue"
          />
        );

      case 'H':
        return (
          <SectionHView
            questionIndex={qIndex}
            answer={answerH}
            onChange={(field, val) => setAnswerH((prev) => ({ ...prev, [field]: val }))}
            submitted={isSubmitted}
            playerTheme="blue"
          />
        );

      case 'I':
        return (
          <SectionIView
            questionIndex={qIndex}
            answer={answerI}
            onChange={(val) => setAnswerI(val)}
            submitted={isSubmitted}
            playerTheme="blue"
          />
        );

      case 'K':
        return (
          <SectionKView
            questionIndex={qIndex}
            answer={answerK}
            onChange={(val) => setAnswerK(val)}
            submitted={isSubmitted}
            playerTheme="blue"
          />
        );

      default:
        return <div>Unknown Section</div>;
    }
  };

  const levelProgressPercent = Math.round(((qIndex + (isSubmitted ? 1 : 0)) / totalQuestions) * 100);

  return (
    <div className="relative w-full max-w-5xl mx-auto px-4 py-4 flex flex-col gap-4">
      {/* Dynamic Background Atmosphere */}
      <GameAtmosphere
        characterName={levelDef.character.name}
        characterRole={levelDef.character.role}
        avatarType={levelDef.character.avatarType}
        characterSpeech={levelDef.character.greeting}
        sectionTitle={levelDef.name}
        subtitle={levelDef.subtitle}
      />

      {/* Confetti & Particle Burst FX on Correct Answer */}
      {showParticleBurst && (
        <div className="fixed inset-0 pointer-events-none z-50 flex items-center justify-center">
          <div className="absolute top-1/3 flex flex-col items-center animate-bounce">
            <div className="flex items-center gap-2 bg-[#f59e0b] border-4 border-[#78350f] px-5 py-2.5 shadow-2xl">
              <PixelSprite name="star_full" size={28} className="animate-spin" />
              <span className="font-pixel text-lg sm:text-2xl text-white drop-shadow">
                +{lastScoreGained} PTS! EXCELLENT!
              </span>
              <PixelSprite name="coin_gold" size={28} />
            </div>
            <div className="flex gap-4 mt-2">
              <PixelSprite name="sparkle" size={24} animate />
              <PixelSprite name="melon" size={24} />
              <PixelSprite name="sparkle" size={24} animate />
            </div>
          </div>
        </div>
      )}

      {/* Top Universal Control & Progress Bar */}
      <div className="pixel-wood-box p-3 sm:p-4 flex flex-col gap-2.5 shadow-lg">
        <div className="flex flex-wrap items-center justify-between gap-3">
          {/* Back & Section Indicator */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={() => {
                soundManager.playClick();
                onExit();
              }}
              className="pixel-btn-gold px-2.5 py-1 text-xs font-pixel flex items-center gap-1 cursor-pointer"
              title="Return to Map"
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
              title="Go to Previous Level"
            >
              ⬅ Prev Level
            </button>

            <div>
              <span className="font-pixel text-[10px] text-[#8b5a2b] block">
                Level {currentSectionIndex + 1} of {ALL_SECTIONS.length}: {levelDef.sectionCode}
              </span>
              <h2 className="font-pixel text-xs sm:text-sm text-[#4a2800] tracking-wide font-bold">
                {levelDef.name}
              </h2>
            </div>
          </div>

          {/* Stats & Next Level Skip Button */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="flex items-center gap-1.5 bg-[#ecd4a4] px-2.5 py-1 border border-[#8b5a2b] font-pixel text-xs text-[#5c3708]">
              <PixelSprite name="coin_gold" size={14} />
              <span>{score} PTS</span>
            </div>

            <div className="flex items-center gap-1.5 bg-[#ecd4a4] px-2.5 py-1 border border-[#8b5a2b] font-pixel text-xs text-[#5c3708]">
              <PixelSprite name="star_full" size={14} />
              <span>{correctCount}/{totalQuestions}</span>
            </div>

            {/* Guaranteed "Next Level" button available anytime even if not completed */}
            <button
              onClick={handleJumpToNextSection}
              className="pixel-btn-green px-3 py-1.5 text-xs font-pixel flex items-center gap-1.5 cursor-pointer shadow animate-pulse hover:animate-none"
              title="Skip or proceed to next level"
            >
              <span>Next Level ➔</span>
            </button>
          </div>
        </div>

        {/* Level Question Progress Bar */}
        <div className="w-full flex items-center gap-3 mt-1">
          <div className="flex-1 bg-[#4a2e13] h-3.5 border border-[#2b1807] overflow-hidden p-0.5">
            <div
              className="h-full bg-gradient-to-r from-[#f59e0b] to-[#10b981] transition-all duration-300 rounded-xs"
              style={{ width: `${levelProgressPercent}%` }}
            />
          </div>
          <span className="font-pixel text-[10px] text-[#78350f] shrink-0">
            Q {qIndex + 1}/{totalQuestions} ({levelProgressPercent}%)
          </span>
        </div>
      </div>

      {/* Character Greeting & Mission Instruction */}
      <div className="pixel-parchment p-3 sm:p-4 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-[#faeed1] border-2 border-[#8b5a2b] flex items-center justify-center shrink-0">
            <PixelSprite name={levelDef.character.avatarType} size={36} />
          </div>
          <div>
            <span className="font-pixel text-[10px] text-[#8b5a2b]">
              {levelDef.character.name} ({levelDef.character.role}):
            </span>
            <p className="text-xs sm:text-sm font-semibold text-[#381a00] italic">
              "{levelDef.instruction}"
            </p>
          </div>
        </div>
      </div>

      {/* Main Question Body */}
      <div className="pixel-wood-box p-4 sm:p-6 shadow-md min-h-[320px]">
        {renderSectionBody()}
      </div>

      {/* Bottom Action Footer */}
      <div className="pixel-wood-box p-3.5 flex flex-wrap items-center justify-between gap-3">
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
            className="pixel-btn-gold px-3 py-1.5 text-xs font-pixel flex items-center gap-1 cursor-pointer"
          >
            <span>Skip / Next Level ➔</span>
          </button>
        </div>

        {/* Submit or Next Question Action */}
        <div className="flex items-center gap-2">
          {!isSubmitted ? (
            <button
              onClick={() => handleSubmitCurrentAnswer()}
              disabled={!hasProvidedInput()}
              className={`px-5 py-2 font-pixel text-xs sm:text-sm transition-all cursor-pointer ${
                hasProvidedInput()
                  ? 'pixel-btn-green'
                  : 'bg-stone-300 text-stone-500 border-2 border-stone-400 opacity-60 cursor-not-allowed'
              }`}
            >
              Check Answer ✓
            </button>
          ) : (
            <button
              onClick={handleNextQuestion}
              className="pixel-btn-green px-6 py-2.5 font-pixel text-xs sm:text-sm cursor-pointer shadow-lg animate-bounce"
            >
              {qIndex + 1 < totalQuestions ? 'Next Question ➔' : 'Complete Quest 🏆'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
