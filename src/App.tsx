/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { SectionId, GameMode, UserSavedData } from './types/game';
import { soundManager } from './utils/sound';

// Components
import { AdventureMap } from './components/AdventureMap';
import { SinglePlayerGame } from './components/game/SinglePlayerGame';
import { SplitScreenGame } from './components/game/SplitScreenGame';
import { MyFarm } from './components/MyFarm';
import { AmbientEffects } from './components/common/AmbientEffects';
import { PixelSprite } from './components/common/PixelSprite';

const STORAGE_KEY = 'stardew_primary5_saved_progress';

const DEFAULT_USER_DATA: UserSavedData = {
  totalCoins: 80, // starting gold to purchase their first starter sunflower/hen
  completedLevels: {},
  unlockedDecorations: ['sunflower_patch'],
  placedDecorations: [
    { instanceId: 'init_1', decorId: 'sunflower_patch', gridX: 2, gridY: 1 },
    { instanceId: 'init_2', decorId: 'clucking_hen', gridX: 3, gridY: 2 },
  ],
  trophies: [],
};

type AppView = 'MAP' | 'SINGLE_GAME' | 'SPLIT_GAME' | 'MY_FARM';

export default function App() {
  const [currentView, setCurrentView] = useState<AppView>('MAP');
  const [activeSection, setActiveSection] = useState<SectionId>('A');
  const [isMuted, setIsMuted] = useState(soundManager.isMuted);

  // Persistent User Data
  const [userData, setUserData] = useState<UserSavedData>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // Fallback
    }
    return DEFAULT_USER_DATA;
  });

  // Save to localStorage whenever userData changes
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(userData));
    } catch {
      // Catch storage quota
    }
  }, [userData]);

  const handleSelectLevel = (secId: SectionId, mode: GameMode) => {
    setActiveSection(secId);
    if (mode === 'single') {
      setCurrentView('SINGLE_GAME');
    } else {
      setCurrentView('SPLIT_GAME');
    }
  };

  const handleFinishLevel = (starsEarned: number, scoreEarned: number) => {
    const existing = userData.completedLevels[activeSection];
    const prevStars = existing?.stars || 0;
    const prevHigh = existing?.highScore || 0;

    const newStars = Math.max(prevStars, starsEarned);
    const newHigh = Math.max(prevHigh, scoreEarned);
    const goldBonus = Math.max(25, scoreEarned);

    setUserData((prev) => ({
      ...prev,
      totalCoins: prev.totalCoins + goldBonus,
      completedLevels: {
        ...prev.completedLevels,
        [activeSection]: {
          stars: newStars,
          highScore: newHigh,
          completedAt: new Date().toISOString(),
        },
      },
    }));

    setCurrentView('MAP');
  };

  const [isMusicOn, setIsMusicOn] = useState(soundManager.isMusicPlaying);

  // Auto-resume audio & start background music on first user click
  useEffect(() => {
    const handleFirstInteraction = () => {
      if (!soundManager.isMuted && soundManager.isMusicPlaying) {
        soundManager.startMusic();
        setIsMusicOn(true);
      }
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('keydown', handleFirstInteraction);
    };
    window.addEventListener('click', handleFirstInteraction);
    window.addEventListener('keydown', handleFirstInteraction);
    return () => {
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('keydown', handleFirstInteraction);
    };
  }, []);

  const handleToggleMusic = () => {
    const active = soundManager.toggleMusic();
    setIsMusicOn(active);
  };

  const handleToggleSound = () => {
    const muted = soundManager.toggleMute();
    setIsMuted(muted);
    setIsMusicOn(!muted && soundManager.isMusicPlaying);
  };

  const handleResetProgress = () => {
    if (window.confirm('Reset all completed quests, stars, and farm decorations back to default?')) {
      soundManager.playClick();
      setUserData(DEFAULT_USER_DATA);
      localStorage.removeItem(STORAGE_KEY);
      setCurrentView('MAP');
    }
  };

  const totalStars = Object.values(userData.completedLevels).reduce((acc, curr) => acc + curr.stars, 0);

  return (
    <div className="min-h-screen bg-[#243625] text-[#2b2b2b] flex flex-col font-sans relative selection:bg-[#e6a15c] selection:text-white">
      {/* Falling Autumn Leaves Atmosphere */}
      <AmbientEffects leafCount={14} />

      {/* Top Bar Navigation following Top Bar Contract: 1 brand wordmark, 4 clean links, 1 primary action */}
      <header className="flex items-center justify-between gap-8 px-4 sm:px-6 py-3 bg-[#4a2e13] border-b-4 border-[#2b1807] z-30 shadow-md">
        {/* Zone 1: Brand Wordmark */}
        <button
          onClick={() => {
            soundManager.playClick();
            setCurrentView('MAP');
          }}
          className="flex items-center gap-2.5 text-left cursor-pointer shrink-0"
        >
          <div className="w-8 h-8 bg-[#8b5a2b] border-2 border-[#ffebb3] flex items-center justify-center shrink-0">
            <PixelSprite name="sunflower" size={20} />
          </div>
          <span className="font-pixel text-xs sm:text-sm text-[#ffebb3] tracking-wider whitespace-nowrap">
            Stardew English P4
          </span>
        </button>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-xs sm:text-sm font-semibold text-[#fed7aa]">
          <button
            onClick={() => {
              soundManager.playClick();
              setCurrentView('MAP');
            }}
            className={`cursor-pointer transition-colors whitespace-nowrap hover:text-[#fff] ${
              currentView === 'MAP' ? 'text-[#fff] underline underline-offset-4 font-bold' : ''
            }`}
          >
            Valley Adventure Map
          </button>

          <button
            onClick={() => {
              soundManager.playClick();
              setCurrentView('MY_FARM');
            }}
            className={`cursor-pointer transition-colors whitespace-nowrap hover:text-[#fff] ${
              currentView === 'MY_FARM' ? 'text-[#fff] underline underline-offset-4 font-bold' : ''
            }`}
          >
            My Cozy Farm & Trophies
          </button>

          <button
            onClick={handleResetProgress}
            className="cursor-pointer transition-colors whitespace-nowrap hover:text-[#f87171] text-[#fca5a5]"
            title="Reset high scores and farm"
          >
            Reset Progress
          </button>
        </nav>

        {/* Zone 3: Primary Action / Status & Music / SFX Toggles */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <div className="hidden sm:flex items-center gap-1.5 bg-[#6b421d] px-2.5 py-1 border border-[#946133] text-xs font-pixel text-[#ffebb3]">
            <PixelSprite name="star_full" size={14} />
            <span>{totalStars} ★</span>
          </div>

          {/* BGM Toggle */}
          <button
            type="button"
            onClick={handleToggleMusic}
            className={`px-2.5 py-1 text-xs font-pixel border transition-colors whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
              isMusicOn && !isMuted
                ? 'bg-[#15803d] text-white border-[#166534]'
                : 'bg-[#6b421d] text-[#fed7aa] border-[#946133] opacity-75'
            }`}
            title={isMusicOn ? 'Pause Background Music' : 'Play Background Music'}
          >
            <PixelSprite name="scroll" size={12} />
            <span className="hidden sm:inline">BGM:</span>
            <span>{isMusicOn && !isMuted ? 'ON' : 'OFF'}</span>
          </button>

          {/* SFX Toggle */}
          <button
            type="button"
            onClick={handleToggleSound}
            className="px-2 py-1 text-xs font-pixel bg-[#6b421d] text-[#ffebb3] border border-[#946133] hover:bg-[#855328] transition-colors whitespace-nowrap cursor-pointer flex items-center gap-1"
            title={isMuted ? 'Unmute Sound Effects' : 'Mute Sound Effects'}
          >
            <PixelSprite name={isMuted ? 'cross' : 'check'} size={12} />
            <span className="hidden sm:inline">{isMuted ? 'SFX Off' : 'SFX'}</span>
          </button>
        </div>
      </header>

      {/* Main Game Surface */}
      <main className="flex-1 w-full py-4 relative z-10 flex flex-col items-center">
        {currentView === 'MAP' && (
          <AdventureMap
            userData={userData}
            onSelectLevel={handleSelectLevel}
            onOpenFarm={() => {
              soundManager.playClick();
              setCurrentView('MY_FARM');
            }}
            onResetProgress={handleResetProgress}
          />
        )}

        {currentView === 'SINGLE_GAME' && (
          <SinglePlayerGame
            sectionId={activeSection}
            userData={userData}
            onFinishLevel={handleFinishLevel}
            onExit={() => setCurrentView('MAP')}
            onChangeSection={(newSec) => setActiveSection(newSec)}
          />
        )}

        {currentView === 'SPLIT_GAME' && (
          <SplitScreenGame
            sectionId={activeSection}
            userData={userData}
            onFinishLevel={handleFinishLevel}
            onExit={() => setCurrentView('MAP')}
            onChangeSection={(newSec) => setActiveSection(newSec)}
          />
        )}

        {currentView === 'MY_FARM' && (
          <MyFarm
            userData={userData}
            onUpdateUserData={setUserData}
            onBackToMap={() => setCurrentView('MAP')}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="w-full bg-[#1b281c] border-t-2 border-[#121c13] py-3 px-4 text-center text-xs text-[#a3b899] z-20">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>Stardew Valley English Adventure · Primary 4 Curriculum</span>
          <span>Sections A, B, E, F, G, H, I, K · Single & Synchronous 2-Player Split Screen PK</span>
        </div>
      </footer>
    </div>
  );
}
