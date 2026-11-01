import React from 'react';

export type PixelSpriteType = 
  | 'mayor'
  | 'craftsman'
  | 'forest_nymph'
  | 'fashion_rabbit'
  | 'farmer'
  | 'miner'
  | 'librarian'
  | 'foxes'
  | 'player1'
  | 'player2'
  | 'star_full'
  | 'star_empty'
  | 'coin_gold'
  | 'gem_diamond'
  | 'chest_closed'
  | 'chest_open'
  | 'sunflower'
  | 'melon'
  | 'chicken'
  | 'rabbit'
  | 'cow'
  | 'scarecrow'
  | 'well'
  | 'junimo'
  | 'trophy'
  | 'scroll'
  | 'heart'
  | 'clock'
  | 'check'
  | 'cross'
  | 'speech'
  // Food & Quantifiers
  | 'chocolate'
  | 'seaweed'
  | 'nuts'
  | 'grapes'
  | 'soya_milk'
  // Story & Vocabulary
  | 'heavy_box'
  | 'football'
  | 'chocolate_cake'
  | 'soya_bowl'
  | 'rotten_fish'
  | 'unhealthy_junk'
  // Verbs
  | 'cut_verb'
  | 'do_verb'
  | 'eat_verb'
  | 'come_verb'
  | 'cost_verb'
  | 'fall_verb'
  | 'bring_verb'
  | 'drink_verb'
  // Restaurant Comparatives
  | 'burger'
  | 'salad'
  | 'pizza'
  | 'steak'
  // Activities (Class 4B)
  | 'texting'
  | 'volleyball'
  | 'cycling'
  | 'piano'
  | 'rock_climbing'
  | 'reading'
  // Conjunctions & FX
  | 'conjunction_bridge'
  | 'sparkle';

interface PixelSpriteProps {
  name: PixelSpriteType | string;
  size?: number | string;
  className?: string;
  animate?: boolean;
}

export const PixelSprite: React.FC<PixelSpriteProps> = ({
  name,
  size = 48,
  className = '',
  animate = false,
}) => {
  const pixelSize = typeof size === 'number' ? `${size}px` : size;

  switch (name) {
    case 'player1':
      return (
        <svg
          width={pixelSize}
          height={pixelSize}
          viewBox="0 0 24 24"
          className={`shrink-0 image-rendering-pixelated ${animate ? 'animate-bounce' : ''} ${className}`}
          shapeRendering="crispEdges"
        >
          <rect x="7" y="2" width="10" height="4" fill="#2563eb" />
          <rect x="5" y="4" width="14" height="2" fill="#1d4ed8" />
          <rect x="7" y="6" width="10" height="6" fill="#fde047" />
          <rect x="8" y="7" width="8" height="5" fill="#fbcfe8" />
          <rect x="9" y="8" width="2" height="2" fill="#1e293b" />
          <rect x="13" y="8" width="2" height="2" fill="#1e293b" />
          <rect x="10" y="11" width="4" height="1" fill="#e11d48" />
          <rect x="6" y="12" width="12" height="5" fill="#dc2626" />
          <rect x="8" y="13" width="8" height="4" fill="#1e40af" />
          <rect x="7" y="17" width="4" height="5" fill="#1e3a8a" />
          <rect x="13" y="17" width="4" height="5" fill="#1e3a8a" />
          <rect x="6" y="21" width="5" height="2" fill="#78350f" />
          <rect x="13" y="21" width="5" height="2" fill="#78350f" />
        </svg>
      );

    case 'player2':
      return (
        <svg
          width={pixelSize}
          height={pixelSize}
          viewBox="0 0 24 24"
          className={`shrink-0 image-rendering-pixelated ${animate ? 'animate-bounce' : ''} ${className}`}
          shapeRendering="crispEdges"
        >
          <rect x="7" y="2" width="10" height="3" fill="#15803d" />
          <rect x="5" y="4" width="14" height="2" fill="#166534" />
          <rect x="6" y="5" width="12" height="6" fill="#b45309" />
          <rect x="8" y="7" width="8" height="5" fill="#fed7aa" />
          <rect x="9" y="8" width="2" height="2" fill="#0f172a" />
          <rect x="13" y="8" width="2" height="2" fill="#0f172a" />
          <rect x="10" y="11" width="4" height="1" fill="#ea580c" />
          <rect x="6" y="12" width="12" height="5" fill="#f59e0b" />
          <rect x="8" y="13" width="8" height="4" fill="#166534" />
          <rect x="7" y="17" width="4" height="5" fill="#14532d" />
          <rect x="13" y="17" width="4" height="5" fill="#14532d" />
          <rect x="6" y="21" width="5" height="2" fill="#543310" />
          <rect x="13" y="21" width="5" height="2" fill="#543310" />
        </svg>
      );

    case 'mayor':
      return (
        <svg
          width={pixelSize}
          height={pixelSize}
          viewBox="0 0 24 24"
          className={`shrink-0 image-rendering-pixelated ${className}`}
          shapeRendering="crispEdges"
        >
          <rect x="6" y="1" width="12" height="3" fill="#854d0e" />
          <rect x="4" y="3" width="16" height="2" fill="#a16207" />
          <rect x="7" y="5" width="10" height="6" fill="#fde047" />
          <rect x="8" y="6" width="8" height="6" fill="#fed7aa" />
          <rect x="9" y="8" width="2" height="2" fill="#1e293b" />
          <rect x="13" y="8" width="2" height="2" fill="#1e293b" />
          <rect x="8" y="10" width="8" height="2" fill="#94a3b8" />
          <rect x="6" y="12" width="12" height="7" fill="#15803d" />
          <rect x="10" y="12" width="4" height="4" fill="#fbbf24" />
          <rect x="7" y="19" width="4" height="4" fill="#334155" />
          <rect x="13" y="19" width="4" height="4" fill="#334155" />
        </svg>
      );

    case 'craftsman':
      return (
        <svg
          width={pixelSize}
          height={pixelSize}
          viewBox="0 0 24 24"
          className={`shrink-0 image-rendering-pixelated ${className}`}
          shapeRendering="crispEdges"
        >
          <rect x="6" y="2" width="12" height="7" fill="#ea580c" />
          <rect x="5" y="4" width="3" height="6" fill="#c2410c" />
          <rect x="16" y="4" width="3" height="6" fill="#c2410c" />
          <rect x="8" y="5" width="8" height="6" fill="#ffedd5" />
          <rect x="9" y="7" width="2" height="2" fill="#0f766e" />
          <rect x="13" y="7" width="2" height="2" fill="#0f766e" />
          <rect x="10" y="10" width="4" height="1" fill="#e11d48" />
          <rect x="6" y="12" width="12" height="7" fill="#f59e0b" />
          <rect x="8" y="13" width="2" height="6" fill="#0284c7" />
          <rect x="14" y="13" width="2" height="6" fill="#0284c7" />
          <rect x="18" y="8" width="2" height="4" fill="#ef4444" />
        </svg>
      );

    case 'forest_nymph':
      return (
        <svg
          width={pixelSize}
          height={pixelSize}
          viewBox="0 0 24 24"
          className={`shrink-0 image-rendering-pixelated ${className}`}
          shapeRendering="crispEdges"
        >
          <circle cx="12" cy="12" r="10" fill="#ecfdf5" fillOpacity="0.4" />
          <rect x="6" y="2" width="12" height="4" fill="#10b981" />
          <rect x="5" y="4" width="14" height="2" fill="#059669" />
          <rect x="7" y="6" width="10" height="7" fill="#d1fae5" />
          <rect x="8" y="7" width="8" height="5" fill="#fce7f3" />
          <rect x="9" y="8" width="2" height="2" fill="#0284c7" />
          <rect x="13" y="8" width="2" height="2" fill="#0284c7" />
          <rect x="10" y="11" width="4" height="1" fill="#f43f5e" />
          <rect x="6" y="13" width="12" height="8" fill="#34d399" />
          <rect x="8" y="14" width="8" height="4" fill="#a7f3d0" />
        </svg>
      );

    case 'fashion_rabbit':
      return (
        <svg
          width={pixelSize}
          height={pixelSize}
          viewBox="0 0 24 24"
          className={`shrink-0 image-rendering-pixelated ${className}`}
          shapeRendering="crispEdges"
        >
          <rect x="6" y="2" width="12" height="6" fill="#0284c7" />
          <rect x="4" y="4" width="3" height="8" fill="#0369a1" />
          <rect x="17" y="4" width="3" height="8" fill="#0369a1" />
          <rect x="8" y="6" width="8" height="5" fill="#ffedd5" />
          <rect x="9" y="7" width="2" height="2" fill="#4338ca" />
          <rect x="13" y="7" width="2" height="2" fill="#4338ca" />
          <rect x="10" y="10" width="4" height="1" fill="#f43f5e" />
          <rect x="6" y="12" width="12" height="7" fill="#e11d48" />
          <rect x="7" y="12" width="2" height="7" fill="#fde047" />
          <rect x="15" y="12" width="2" height="7" fill="#fde047" />
        </svg>
      );

    case 'farmer':
      return (
        <svg
          width={pixelSize}
          height={pixelSize}
          viewBox="0 0 24 24"
          className={`shrink-0 image-rendering-pixelated ${className}`}
          shapeRendering="crispEdges"
        >
          <rect x="5" y="2" width="14" height="3" fill="#f59e0b" />
          <rect x="3" y="4" width="18" height="2" fill="#d97706" />
          <rect x="7" y="6" width="10" height="5" fill="#fed7aa" />
          <rect x="8" y="7" width="2" height="2" fill="#0f172a" />
          <rect x="14" y="7" width="2" height="2" fill="#0f172a" />
          <rect x="10" y="10" width="4" height="1" fill="#dc2626" />
          <rect x="6" y="12" width="12" height="8" fill="#ea580c" />
          <rect x="8" y="14" width="8" height="6" fill="#fff" />
        </svg>
      );

    case 'miner':
      return (
        <svg
          width={pixelSize}
          height={pixelSize}
          viewBox="0 0 24 24"
          className={`shrink-0 image-rendering-pixelated ${className}`}
          shapeRendering="crispEdges"
        >
          <rect x="6" y="1" width="12" height="4" fill="#0284c7" />
          <rect x="10" y="0" width="4" height="3" fill="#fbbf24" />
          <rect x="4" y="4" width="16" height="2" fill="#0369a1" />
          <rect x="8" y="6" width="8" height="5" fill="#fed7aa" />
          <rect x="9" y="7" width="2" height="2" fill="#0f172a" />
          <rect x="13" y="7" width="2" height="2" fill="#0f172a" />
          <rect x="8" y="10" width="8" height="3" fill="#64748b" />
          <rect x="6" y="12" width="12" height="8" fill="#475569" />
          <rect x="18" y="10" width="3" height="9" fill="#a16207" />
          <rect x="17" y="8" width="5" height="2" fill="#cbd5e1" />
        </svg>
      );

    case 'librarian':
      return (
        <svg
          width={pixelSize}
          height={pixelSize}
          viewBox="0 0 24 24"
          className={`shrink-0 image-rendering-pixelated ${className}`}
          shapeRendering="crispEdges"
        >
          <rect x="4" y="3" width="4" height="4" fill="#ea580c" />
          <rect x="16" y="3" width="4" height="4" fill="#ea580c" />
          <rect x="6" y="5" width="12" height="4" fill="#ea580c" />
          <rect x="8" y="7" width="8" height="5" fill="#fed7aa" />
          <rect x="8" y="8" width="3" height="2" fill="#0284c7" />
          <rect x="13" y="8" width="3" height="2" fill="#0284c7" />
          <rect x="11" y="8" width="2" height="1" fill="#0284c7" />
          <rect x="10" y="11" width="4" height="1" fill="#e11d48" />
          <rect x="6" y="13" width="12" height="7" fill="#fbbf24" />
        </svg>
      );

    case 'foxes':
      return (
        <svg
          width={pixelSize}
          height={pixelSize}
          viewBox="0 0 32 24"
          className={`shrink-0 image-rendering-pixelated ${className}`}
          shapeRendering="crispEdges"
        >
          <rect x="2" y="4" width="3" height="4" fill="#c2410c" />
          <rect x="8" y="4" width="3" height="4" fill="#c2410c" />
          <rect x="3" y="7" width="8" height="7" fill="#ea580c" />
          <rect x="4" y="11" width="6" height="3" fill="#fff" />
          <rect x="6" y="11" width="2" height="1" fill="#0f172a" />
          <rect x="4" y="9" width="2" height="2" fill="#0f172a" />
          <rect x="8" y="9" width="2" height="2" fill="#0f172a" />
          <rect x="1" y="14" width="10" height="7" fill="#ea580c" />
          <rect x="0" y="15" width="3" height="4" fill="#ea580c" />

          <rect x="18" y="6" width="3" height="4" fill="#c2410c" />
          <rect x="24" y="6" width="3" height="4" fill="#c2410c" />
          <rect x="19" y="9" width="8" height="6" fill="#ea580c" />
          <rect x="20" y="12" width="6" height="3" fill="#fff" />
          <rect x="22" y="12" width="2" height="1" fill="#0f172a" />
          <rect x="20" y="10" width="2" height="2" fill="#0f172a" />
          <rect x="24" y="10" width="2" height="2" fill="#0f172a" />
          <rect x="17" y="15" width="10" height="6" fill="#ea580c" />
          <rect x="26" y="16" width="4" height="4" fill="#fff" />
        </svg>
      );

    case 'star_full':
      return (
        <svg
          width={pixelSize}
          height={pixelSize}
          viewBox="0 0 16 16"
          className={`shrink-0 image-rendering-pixelated ${className}`}
          shapeRendering="crispEdges"
        >
          <rect x="7" y="1" width="2" height="2" fill="#78350f" />
          <rect x="6" y="3" width="4" height="2" fill="#eab308" />
          <rect x="1" y="5" width="14" height="3" fill="#facc15" />
          <rect x="3" y="8" width="10" height="3" fill="#eab308" />
          <rect x="2" y="11" width="4" height="3" fill="#ca8a04" />
          <rect x="10" y="11" width="4" height="3" fill="#ca8a04" />
          <rect x="7" y="6" width="2" height="2" fill="#fef08a" />
        </svg>
      );

    case 'star_empty':
      return (
        <svg
          width={pixelSize}
          height={pixelSize}
          viewBox="0 0 16 16"
          className={`shrink-0 image-rendering-pixelated opacity-40 ${className}`}
          shapeRendering="crispEdges"
        >
          <rect x="7" y="1" width="2" height="2" fill="#475569" />
          <rect x="6" y="3" width="4" height="2" fill="#64748b" />
          <rect x="1" y="5" width="14" height="3" fill="#94a3b8" />
          <rect x="3" y="8" width="10" height="3" fill="#64748b" />
          <rect x="2" y="11" width="4" height="3" fill="#475569" />
          <rect x="10" y="11" width="4" height="3" fill="#475569" />
        </svg>
      );

    case 'coin_gold':
      return (
        <svg
          width={pixelSize}
          height={pixelSize}
          viewBox="0 0 16 16"
          className={`shrink-0 image-rendering-pixelated ${className}`}
          shapeRendering="crispEdges"
        >
          <rect x="5" y="2" width="6" height="2" fill="#854d0e" />
          <rect x="3" y="4" width="10" height="8" fill="#facc15" />
          <rect x="5" y="5" width="6" height="6" fill="#eab308" />
          <rect x="7" y="6" width="2" height="4" fill="#fef08a" />
          <rect x="5" y="12" width="6" height="2" fill="#854d0e" />
        </svg>
      );

    case 'gem_diamond':
      return (
        <svg
          width={pixelSize}
          height={pixelSize}
          viewBox="0 0 16 16"
          className={`shrink-0 image-rendering-pixelated ${className}`}
          shapeRendering="crispEdges"
        >
          <rect x="5" y="2" width="6" height="2" fill="#0284c7" />
          <rect x="3" y="4" width="10" height="3" fill="#38bdf8" />
          <rect x="5" y="7" width="6" height="4" fill="#0ea5e9" />
          <rect x="7" y="11" width="2" height="2" fill="#0369a1" />
          <rect x="5" y="4" width="2" height="2" fill="#e0f2fe" />
        </svg>
      );

    case 'chest_closed':
      return (
        <svg
          width={pixelSize}
          height={pixelSize}
          viewBox="0 0 16 16"
          className={`shrink-0 image-rendering-pixelated ${className}`}
          shapeRendering="crispEdges"
        >
          <rect x="2" y="3" width="12" height="4" fill="#a16207" />
          <rect x="1" y="4" width="14" height="2" fill="#ca8a04" />
          <rect x="2" y="7" width="12" height="7" fill="#854d0e" />
          <rect x="7" y="7" width="2" height="3" fill="#facc15" />
          <rect x="2" y="13" width="12" height="2" fill="#583101" />
        </svg>
      );

    case 'chest_open':
      return (
        <svg
          width={pixelSize}
          height={pixelSize}
          viewBox="0 0 16 16"
          className={`shrink-0 image-rendering-pixelated ${className}`}
          shapeRendering="crispEdges"
        >
          <rect x="2" y="1" width="12" height="3" fill="#a16207" />
          <rect x="4" y="4" width="8" height="3" fill="#fde047" />
          <rect x="2" y="7" width="12" height="7" fill="#854d0e" />
          <rect x="7" y="8" width="2" height="2" fill="#facc15" />
          <rect x="2" y="13" width="12" height="2" fill="#583101" />
        </svg>
      );

    case 'sunflower':
      return (
        <svg
          width={pixelSize}
          height={pixelSize}
          viewBox="0 0 16 16"
          className={`shrink-0 image-rendering-pixelated ${className}`}
          shapeRendering="crispEdges"
        >
          <rect x="7" y="9" width="2" height="6" fill="#15803d" />
          <rect x="5" y="12" width="2" height="2" fill="#16a34a" />
          <rect x="9" y="11" width="2" height="2" fill="#16a34a" />
          <rect x="4" y="3" width="8" height="8" fill="#facc15" />
          <rect x="6" y="5" width="4" height="4" fill="#78350f" />
        </svg>
      );

    case 'melon':
      return (
        <svg
          width={pixelSize}
          height={pixelSize}
          viewBox="0 0 16 16"
          className={`shrink-0 image-rendering-pixelated ${className}`}
          shapeRendering="crispEdges"
        >
          <rect x="4" y="4" width="8" height="8" fill="#ec4899" />
          <rect x="3" y="6" width="10" height="4" fill="#db2777" />
          <rect x="7" y="2" width="2" height="2" fill="#15803d" />
          <rect x="5" y="5" width="2" height="2" fill="#fbcfe8" />
        </svg>
      );

    case 'chicken':
      return (
        <svg
          width={pixelSize}
          height={pixelSize}
          viewBox="0 0 16 16"
          className={`shrink-0 image-rendering-pixelated ${className}`}
          shapeRendering="crispEdges"
        >
          <rect x="9" y="3" width="2" height="2" fill="#dc2626" />
          <rect x="7" y="4" width="5" height="5" fill="#f8fafc" />
          <rect x="12" y="6" width="3" height="2" fill="#f59e0b" />
          <rect x="9" y="5" width="1" height="1" fill="#0f172a" />
          <rect x="4" y="8" width="8" height="5" fill="#f1f5f9" />
          <rect x="5" y="13" width="2" height="2" fill="#d97706" />
          <rect x="9" y="13" width="2" height="2" fill="#d97706" />
        </svg>
      );

    case 'rabbit':
      return (
        <svg
          width={pixelSize}
          height={pixelSize}
          viewBox="0 0 16 16"
          className={`shrink-0 image-rendering-pixelated ${className}`}
          shapeRendering="crispEdges"
        >
          <rect x="5" y="2" width="2" height="4" fill="#fce7f3" />
          <rect x="9" y="2" width="2" height="4" fill="#fce7f3" />
          <rect x="6" y="5" width="5" height="4" fill="#ffffff" />
          <rect x="7" y="6" width="1" height="1" fill="#f43f5e" />
          <rect x="4" y="8" width="9" height="5" fill="#ffffff" />
          <rect x="2" y="10" width="2" height="2" fill="#ffffff" />
          <rect x="5" y="13" width="2" height="2" fill="#fed7aa" />
          <rect x="10" y="13" width="2" height="2" fill="#fed7aa" />
        </svg>
      );

    case 'cow':
      return (
        <svg
          width={pixelSize}
          height={pixelSize}
          viewBox="0 0 18 16"
          className={`shrink-0 image-rendering-pixelated ${className}`}
          shapeRendering="crispEdges"
        >
          <rect x="10" y="3" width="6" height="5" fill="#ffffff" />
          <rect x="10" y="4" width="2" height="2" fill="#1e293b" />
          <rect x="14" y="6" width="3" height="3" fill="#fbcfe8" />
          <rect x="2" y="6" width="10" height="7" fill="#ffffff" />
          <rect x="4" y="7" width="4" height="4" fill="#1e293b" />
          <rect x="3" y="13" width="2" height="3" fill="#334155" />
          <rect x="8" y="13" width="2" height="3" fill="#334155" />
        </svg>
      );

    case 'scarecrow':
      return (
        <svg
          width={pixelSize}
          height={pixelSize}
          viewBox="0 0 16 16"
          className={`shrink-0 image-rendering-pixelated ${className}`}
          shapeRendering="crispEdges"
        >
          <rect x="5" y="1" width="6" height="2" fill="#d97706" />
          <rect x="4" y="3" width="8" height="1" fill="#b45309" />
          <rect x="6" y="4" width="4" height="3" fill="#fef08a" />
          <rect x="1" y="7" width="14" height="3" fill="#3b82f6" />
          <rect x="7" y="10" width="2" height="6" fill="#78350f" />
        </svg>
      );

    case 'trophy':
      return (
        <svg
          width={pixelSize}
          height={pixelSize}
          viewBox="0 0 16 16"
          className={`shrink-0 image-rendering-pixelated ${className}`}
          shapeRendering="crispEdges"
        >
          <rect x="4" y="2" width="8" height="6" fill="#eab308" />
          <rect x="2" y="3" width="2" height="3" fill="#ca8a04" />
          <rect x="12" y="3" width="2" height="3" fill="#ca8a04" />
          <rect x="7" y="8" width="2" height="3" fill="#ca8a04" />
          <rect x="5" y="11" width="6" height="3" fill="#854d0e" />
          <rect x="6" y="4" width="2" height="2" fill="#fef08a" />
        </svg>
      );

    case 'check':
      return (
        <svg
          width={pixelSize}
          height={pixelSize}
          viewBox="0 0 16 16"
          className={`shrink-0 image-rendering-pixelated ${className}`}
          shapeRendering="crispEdges"
        >
          <rect x="2" y="8" width="2" height="3" fill="#16a34a" />
          <rect x="4" y="10" width="3" height="3" fill="#16a34a" />
          <rect x="7" y="8" width="3" height="3" fill="#16a34a" />
          <rect x="10" y="5" width="3" height="3" fill="#16a34a" />
          <rect x="13" y="2" width="2" height="3" fill="#16a34a" />
        </svg>
      );

    case 'cross':
      return (
        <svg
          width={pixelSize}
          height={pixelSize}
          viewBox="0 0 16 16"
          className={`shrink-0 image-rendering-pixelated ${className}`}
          shapeRendering="crispEdges"
        >
          <rect x="3" y="3" width="3" height="3" fill="#dc2626" />
          <rect x="10" y="3" width="3" height="3" fill="#dc2626" />
          <rect x="6" y="6" width="4" height="4" fill="#dc2626" />
          <rect x="3" y="10" width="3" height="3" fill="#dc2626" />
          <rect x="10" y="10" width="3" height="3" fill="#dc2626" />
        </svg>
      );

    // ==================== FOOD & QUANTIFIERS ====================
    case 'chocolate':
      return (
        <svg
          width={pixelSize}
          height={pixelSize}
          viewBox="0 0 20 20"
          className={`shrink-0 image-rendering-pixelated ${className}`}
          shapeRendering="crispEdges"
        >
          {/* Chocolate Bar with silver foil & rich brown blocks */}
          <rect x="4" y="2" width="12" height="16" fill="#582f0e" />
          <rect x="4" y="10" width="12" height="8" fill="#c0c0c0" /> {/* Silver foil wrapper */}
          <rect x="4" y="10" width="12" height="2" fill="#e5e5e5" />
          <rect x="6" y="4" width="3" height="2" fill="#7f4f24" /> {/* Square 1 */}
          <rect x="11" y="4" width="3" height="2" fill="#7f4f24" /> {/* Square 2 */}
          <rect x="6" y="7" width="3" height="2" fill="#7f4f24" /> {/* Square 3 */}
          <rect x="11" y="7" width="3" height="2" fill="#7f4f24" /> {/* Square 4 */}
          <rect x="6" y="13" width="8" height="4" fill="#dc2626" /> {/* Red band label */}
        </svg>
      );

    case 'seaweed':
      return (
        <svg
          width={pixelSize}
          height={pixelSize}
          viewBox="0 0 20 20"
          className={`shrink-0 image-rendering-pixelated ${className}`}
          shapeRendering="crispEdges"
        >
          {/* Packet of green nori seaweed */}
          <rect x="4" y="3" width="12" height="14" fill="#14532d" />
          <rect x="5" y="4" width="10" height="12" fill="#166534" />
          <rect x="6" y="6" width="8" height="2" fill="#22c55e" /> {/* Label */}
          <rect x="7" y="10" width="6" height="4" fill="#0f391b" /> {/* Seaweed sheets */}
          <rect x="6" y="10" width="2" height="4" fill="#14532d" />
        </svg>
      );

    case 'nuts':
      return (
        <svg
          width={pixelSize}
          height={pixelSize}
          viewBox="0 0 20 20"
          className={`shrink-0 image-rendering-pixelated ${className}`}
          shapeRendering="crispEdges"
        >
          {/* Tin can of roasted nuts */}
          <ellipse cx="10" cy="5" rx="6" ry="2" fill="#cbd5e1" />
          <rect x="4" y="5" width="12" height="10" fill="#94a3b8" />
          <ellipse cx="10" cy="15" rx="6" ry="2" fill="#64748b" />
          <rect x="4" y="7" width="12" height="6" fill="#f59e0b" /> {/* Golden label */}
          <rect x="7" y="8" width="2" height="2" fill="#78350f" /> {/* Peanut shape */}
          <rect x="10" y="9" width="3" height="2" fill="#78350f" />
        </svg>
      );

    case 'grapes':
      return (
        <svg
          width={pixelSize}
          height={pixelSize}
          viewBox="0 0 20 20"
          className={`shrink-0 image-rendering-pixelated ${className}`}
          shapeRendering="crispEdges"
        >
          {/* Bunch of purple grapes */}
          <rect x="9" y="2" width="2" height="4" fill="#78350f" /> {/* Stem */}
          <rect x="11" y="2" width="4" height="2" fill="#16a34a" /> {/* Leaf */}
          {/* Grapes cluster */}
          <circle cx="8" cy="7" r="2.5" fill="#7e22ce" />
          <circle cx="12" cy="7" r="2.5" fill="#9333ea" />
          <circle cx="6" cy="11" r="2.5" fill="#6b21a8" />
          <circle cx="10" cy="11" r="2.5" fill="#a855f7" />
          <circle cx="14" cy="11" r="2.5" fill="#7e22ce" />
          <circle cx="8" cy="15" r="2.5" fill="#9333ea" />
          <circle cx="12" cy="15" r="2.5" fill="#6b21a8" />
          <circle cx="10" cy="18" r="2" fill="#7e22ce" />
        </svg>
      );

    case 'soya_milk':
      return (
        <svg
          width={pixelSize}
          height={pixelSize}
          viewBox="0 0 20 20"
          className={`shrink-0 image-rendering-pixelated ${className}`}
          shapeRendering="crispEdges"
        >
          {/* Carton of fresh soya milk */}
          <polygon points="6,4 10,2 14,4 14,17 6,17" fill="#38bdf8" />
          <polygon points="6,4 10,2 10,5 6,5" fill="#0284c7" />
          <rect x="6" y="5" width="8" height="12" fill="#f8fafc" />
          <rect x="6" y="8" width="8" height="4" fill="#0284c7" /> {/* Blue branding */}
          <rect x="7" y="9" width="3" height="2" fill="#fef08a" /> {/* Soya bean */}
          <rect x="6" y="14" width="8" height="3" fill="#e0f2fe" />
        </svg>
      );

    // ==================== STORY & VOCABULARY ====================
    case 'heavy_box':
      return (
        <svg
          width={pixelSize}
          height={pixelSize}
          viewBox="0 0 20 20"
          className={`shrink-0 image-rendering-pixelated ${className}`}
          shapeRendering="crispEdges"
        >
          {/* Heavy wooden crate with metal braces */}
          <rect x="3" y="4" width="14" height="13" fill="#854d0e" />
          <rect x="4" y="5" width="12" height="11" fill="#b45309" />
          {/* Cross wood planks */}
          <rect x="3" y="4" width="2" height="13" fill="#78350f" />
          <rect x="15" y="4" width="2" height="13" fill="#78350f" />
          <rect x="3" y="4" width="14" height="2" fill="#78350f" />
          <rect x="3" y="15" width="14" height="2" fill="#78350f" />
          <line x1="4" y1="5" x2="15" y2="15" stroke="#78350f" strokeWidth="2" />
        </svg>
      );

    case 'football':
      return (
        <svg
          width={pixelSize}
          height={pixelSize}
          viewBox="0 0 20 20"
          className={`shrink-0 image-rendering-pixelated ${className}`}
          shapeRendering="crispEdges"
        >
          {/* Soccer ball */}
          <circle cx="10" cy="10" r="8" fill="#f8fafc" stroke="#334155" strokeWidth="1" />
          <polygon points="10,7 8,9 9,12 11,12 12,9" fill="#1e293b" />
          <polygon points="5,8 6,6 4,7" fill="#1e293b" />
          <polygon points="15,8 14,6 16,7" fill="#1e293b" />
          <polygon points="10,16 8,17 12,17" fill="#1e293b" />
        </svg>
      );

    case 'chocolate_cake':
      return (
        <svg
          width={pixelSize}
          height={pixelSize}
          viewBox="0 0 20 20"
          className={`shrink-0 image-rendering-pixelated ${className}`}
          shapeRendering="crispEdges"
        >
          {/* Slice of rich chocolate cake */}
          <polygon points="16,15 4,15 10,7" fill="#582f0e" />
          <polygon points="16,15 10,7 15,5" fill="#7f4f24" />
          <rect x="5" y="11" width="10" height="2" fill="#fff" /> {/* Cream layer */}
          <circle cx="10" cy="6" r="2" fill="#dc2626" /> {/* Cherry on top */}
          <rect x="11" y="4" width="2" height="2" fill="#15803d" /> {/* Cherry stem */}
        </svg>
      );

    case 'soya_bowl':
      return (
        <svg
          width={pixelSize}
          height={pixelSize}
          viewBox="0 0 20 20"
          className={`shrink-0 image-rendering-pixelated ${className}`}
          shapeRendering="crispEdges"
        >
          {/* Warm cereal bowl with spoon */}
          <ellipse cx="10" cy="10" rx="7" ry="4" fill="#f8fafc" />
          <ellipse cx="10" cy="9" rx="6" ry="3" fill="#e0f2fe" />
          <path d="M 3,10 Q 10,18 17,10" fill="#3b82f6" />
          <rect x="7" y="8" width="2" height="2" fill="#f59e0b" /> {/* Cereal flake */}
          <rect x="11" y="8" width="2" height="2" fill="#f59e0b" />
          <line x1="14" y1="5" x2="11" y2="10" stroke="#94a3b8" strokeWidth="2" /> {/* Spoon */}
        </svg>
      );

    case 'rotten_fish':
      return (
        <svg
          width={pixelSize}
          height={pixelSize}
          viewBox="0 0 20 20"
          className={`shrink-0 image-rendering-pixelated ${className}`}
          shapeRendering="crispEdges"
        >
          {/* Stinky fish on a plate with stink vapor */}
          <ellipse cx="10" cy="14" rx="8" ry="3" fill="#e2e8f0" />
          {/* Fish bone / green sick fish */}
          <ellipse cx="9" cy="12" rx="5" ry="3" fill="#84cc16" />
          <polygon points="14,12 18,9 18,15" fill="#65a30d" /> {/* Tail */}
          <circle cx="6" cy="11" r="1" fill="#0f172a" /> {/* X eye */}
          <line x1="5" y1="10" x2="7" y2="12" stroke="#0f172a" strokeWidth="1" />
          {/* Stink lines */}
          <path d="M 6,7 Q 7,5 6,3" stroke="#84cc16" strokeWidth="1" fill="none" />
          <path d="M 10,6 Q 11,4 10,2" stroke="#84cc16" strokeWidth="1" fill="none" />
          <path d="M 14,7 Q 13,5 14,3" stroke="#84cc16" strokeWidth="1" fill="none" />
        </svg>
      );

    case 'unhealthy_junk':
      return (
        <svg
          width={pixelSize}
          height={pixelSize}
          viewBox="0 0 20 20"
          className={`shrink-0 image-rendering-pixelated ${className}`}
          shapeRendering="crispEdges"
        >
          {/* Burger + French fries */}
          <rect x="4" y="6" width="6" height="9" fill="#dc2626" /> {/* Fry box */}
          <rect x="5" y="3" width="1" height="5" fill="#facc15" />
          <rect x="7" y="2" width="1" height="6" fill="#facc15" />
          <rect x="9" y="4" width="1" height="4" fill="#facc15" />
          {/* Mini burger */}
          <rect x="11" y="9" width="7" height="2" fill="#d97706" />
          <rect x="11" y="11" width="7" height="1" fill="#16a34a" />
          <rect x="11" y="12" width="7" height="2" fill="#78350f" />
          <rect x="11" y="14" width="7" height="2" fill="#d97706" />
        </svg>
      );

    // ==================== VERBS ====================
    case 'cut_verb':
      return (
        <svg
          width={pixelSize}
          height={pixelSize}
          viewBox="0 0 20 20"
          className={`shrink-0 image-rendering-pixelated ${className}`}
          shapeRendering="crispEdges"
        >
          {/* Apple being cut by knife */}
          <circle cx="8" cy="11" r="5" fill="#ef4444" />
          <rect x="8" y="5" width="1" height="2" fill="#78350f" />
          {/* Kitchen knife */}
          <polygon points="12,4 16,7 11,15 9,13" fill="#cbd5e1" />
          <rect x="15" y="3" width="3" height="3" fill="#78350f" />
        </svg>
      );

    case 'do_verb':
      return (
        <svg
          width={pixelSize}
          height={pixelSize}
          viewBox="0 0 20 20"
          className={`shrink-0 image-rendering-pixelated ${className}`}
          shapeRendering="crispEdges"
        >
          {/* Notebook & pencil doing homework */}
          <rect x="4" y="3" width="10" height="14" fill="#3b82f6" />
          <rect x="6" y="5" width="6" height="10" fill="#ffffff" />
          <line x1="7" y1="7" x2="11" y2="7" stroke="#94a3b8" strokeWidth="1" />
          <line x1="7" y1="9" x2="11" y2="9" stroke="#94a3b8" strokeWidth="1" />
          {/* Pencil */}
          <line x1="16" y1="2" x2="12" y2="9" stroke="#f59e0b" strokeWidth="2" />
        </svg>
      );

    case 'eat_verb':
      return (
        <svg
          width={pixelSize}
          height={pixelSize}
          viewBox="0 0 20 20"
          className={`shrink-0 image-rendering-pixelated ${className}`}
          shapeRendering="crispEdges"
        >
          {/* Fork & spoon & yummy dish */}
          <circle cx="10" cy="10" r="5" fill="#facc15" />
          <line x1="3" y1="4" x2="3" y2="16" stroke="#94a3b8" strokeWidth="2" /> {/* Fork */}
          <rect x="2" y="4" width="3" height="3" fill="#94a3b8" />
          <line x1="17" y1="4" x2="17" y2="16" stroke="#94a3b8" strokeWidth="2" /> {/* Spoon */}
          <ellipse cx="17" cy="5" rx="2" ry="3" fill="#94a3b8" />
        </svg>
      );

    case 'come_verb':
      return (
        <svg
          width={pixelSize}
          height={pixelSize}
          viewBox="0 0 20 20"
          className={`shrink-0 image-rendering-pixelated ${className}`}
          shapeRendering="crispEdges"
        >
          {/* Footsteps leading to cozy wooden door */}
          <rect x="10" y="3" width="7" height="13" fill="#854d0e" />
          <circle cx="15" cy="10" r="1" fill="#facc15" /> {/* Doorknob */}
          <ellipse cx="5" cy="14" rx="2" ry="1" fill="#64748b" />
          <ellipse cx="7" cy="11" rx="2" ry="1" fill="#64748b" />
          <ellipse cx="9" cy="8" rx="2" ry="1" fill="#64748b" />
        </svg>
      );

    case 'cost_verb':
      return (
        <svg
          width={pixelSize}
          height={pixelSize}
          viewBox="0 0 20 20"
          className={`shrink-0 image-rendering-pixelated ${className}`}
          shapeRendering="crispEdges"
        >
          {/* Price tag with gold coin */}
          <polygon points="5,5 11,5 15,9 9,15 3,9" fill="#f59e0b" />
          <circle cx="6" cy="7" r="1" fill="#ffffff" />
          <circle cx="14" cy="14" r="4" fill="#eab308" />
          <text x="12" y="16" fontSize="6" fill="#78350f" fontWeight="bold">$</text>
        </svg>
      );

    case 'fall_verb':
      return (
        <svg
          width={pixelSize}
          height={pixelSize}
          viewBox="0 0 20 20"
          className={`shrink-0 image-rendering-pixelated ${className}`}
          shapeRendering="crispEdges"
        >
          {/* Tumbling autumn leaf */}
          <path d="M 8,3 C 14,5 15,11 11,15 C 6,14 5,8 8,3 Z" fill="#ea580c" />
          <line x1="8" y1="3" x2="11" y2="15" stroke="#78350f" strokeWidth="1" />
          <path d="M 4,6 Q 7,8 4,11" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="1,1" fill="none" />
        </svg>
      );

    case 'bring_verb':
      return (
        <svg
          width={pixelSize}
          height={pixelSize}
          viewBox="0 0 20 20"
          className={`shrink-0 image-rendering-pixelated ${className}`}
          shapeRendering="crispEdges"
        >
          {/* Wicker basket packed with fresh harvest */}
          <path d="M 5,8 Q 10,2 15,8" stroke="#854d0e" strokeWidth="2" fill="none" />
          <rect x="4" y="8" width="12" height="8" fill="#b45309" />
          <rect x="5" y="9" width="10" height="7" fill="#d97706" />
          <circle cx="7" cy="8" r="2" fill="#ef4444" /> {/* Red apple */}
          <circle cx="11" cy="7" r="2" fill="#f59e0b" /> {/* Orange */}
          <circle cx="13" cy="8" r="2" fill="#16a34a" /> {/* Pear */}
        </svg>
      );

    case 'drink_verb':
      return (
        <svg
          width={pixelSize}
          height={pixelSize}
          viewBox="0 0 20 20"
          className={`shrink-0 image-rendering-pixelated ${className}`}
          shapeRendering="crispEdges"
        >
          {/* Glass of cool water with straw */}
          <polygon points="5,5 15,5 13,16 7,16" fill="#e0f2fe" opacity="0.6" />
          <polygon points="6,9 14,9 13,15 7,15" fill="#38bdf8" />
          <line x1="13" y1="2" x2="9" y2="14" stroke="#f43f5e" strokeWidth="2" /> {/* Straw */}
        </svg>
      );

    // ==================== RESTAURANT COMPARATIVES ====================
    case 'burger':
      return (
        <svg
          width={pixelSize}
          height={pixelSize}
          viewBox="0 0 20 20"
          className={`shrink-0 image-rendering-pixelated ${className}`}
          shapeRendering="crispEdges"
        >
          {/* Burger */}
          <ellipse cx="10" cy="5" rx="6" ry="3" fill="#d97706" />
          <rect x="4" y="8" width="12" height="2" fill="#16a34a" /> {/* Lettuce */}
          <rect x="4" y="10" width="12" height="1" fill="#facc15" /> {/* Cheese */}
          <rect x="4" y="11" width="12" height="3" fill="#78350f" /> {/* Beef patty */}
          <ellipse cx="10" cy="15" rx="6" ry="2" fill="#d97706" />
        </svg>
      );

    case 'salad':
      return (
        <svg
          width={pixelSize}
          height={pixelSize}
          viewBox="0 0 20 20"
          className={`shrink-0 image-rendering-pixelated ${className}`}
          shapeRendering="crispEdges"
        >
          {/* Salad bowl with greens & tomatoes */}
          <path d="M 4,8 Q 10,18 16,8 Z" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1" />
          <circle cx="8" cy="8" r="3" fill="#22c55e" />
          <circle cx="12" cy="7" r="3" fill="#16a34a" />
          <circle cx="10" cy="9" r="2" fill="#ef4444" /> {/* Tomato */}
          <circle cx="7" cy="10" r="1.5" fill="#facc15" /> {/* Corn */}
        </svg>
      );

    case 'pizza':
      return (
        <svg
          width={pixelSize}
          height={pixelSize}
          viewBox="0 0 20 20"
          className={`shrink-0 image-rendering-pixelated ${className}`}
          shapeRendering="crispEdges"
        >
          {/* Pizza slice */}
          <polygon points="10,2 3,16 17,16" fill="#facc15" />
          <rect x="3" y="16" width="14" height="2" fill="#b45309" /> {/* Crust */}
          <circle cx="8" cy="11" r="1.5" fill="#dc2626" /> {/* Pepperoni */}
          <circle cx="12" cy="13" r="1.5" fill="#dc2626" />
          <circle cx="10" cy="7" r="1.5" fill="#dc2626" />
        </svg>
      );

    case 'steak':
      return (
        <svg
          width={pixelSize}
          height={pixelSize}
          viewBox="0 0 20 20"
          className={`shrink-0 image-rendering-pixelated ${className}`}
          shapeRendering="crispEdges"
        >
          {/* Gourmet steak on plate */}
          <ellipse cx="10" cy="12" rx="8" ry="4" fill="#cbd5e1" />
          <path d="M 6,9 C 10,7 14,8 14,12 C 14,14 9,15 6,13 Z" fill="#881337" />
          <line x1="8" y1="9" x2="10" y2="13" stroke="#4c0519" strokeWidth="1" />
          <line x1="10" y1="9" x2="12" y2="13" stroke="#4c0519" strokeWidth="1" />
        </svg>
      );

    // ==================== ACTIVITIES (CLASS 4B) ====================
    case 'texting':
      return (
        <svg
          width={pixelSize}
          height={pixelSize}
          viewBox="0 0 20 20"
          className={`shrink-0 image-rendering-pixelated ${className}`}
          shapeRendering="crispEdges"
        >
          {/* Smartphone with chat message */}
          <rect x="5" y="2" width="10" height="16" rx="2" fill="#1e293b" />
          <rect x="6" y="4" width="8" height="12" fill="#38bdf8" />
          <rect x="7" y="6" width="5" height="2" rx="1" fill="#ffffff" />
          <rect x="8" y="10" width="5" height="2" rx="1" fill="#22c55e" />
          <circle cx="10" cy="17" r="0.75" fill="#ffffff" />
        </svg>
      );

    case 'volleyball':
      return (
        <svg
          width={pixelSize}
          height={pixelSize}
          viewBox="0 0 20 20"
          className={`shrink-0 image-rendering-pixelated ${className}`}
          shapeRendering="crispEdges"
        >
          {/* Volleyball */}
          <circle cx="10" cy="10" r="7" fill="#ffffff" stroke="#0284c7" strokeWidth="1.5" />
          <path d="M 6,5 Q 10,10 6,15" stroke="#f59e0b" strokeWidth="1.5" fill="none" />
          <path d="M 14,5 Q 10,10 14,15" stroke="#0284c7" strokeWidth="1.5" fill="none" />
          <line x1="3" y1="10" x2="17" y2="10" stroke="#f59e0b" strokeWidth="1.5" />
        </svg>
      );

    case 'cycling':
      return (
        <svg
          width={pixelSize}
          height={pixelSize}
          viewBox="0 0 20 20"
          className={`shrink-0 image-rendering-pixelated ${className}`}
          shapeRendering="crispEdges"
        >
          {/* Bicycle */}
          <circle cx="5" cy="14" r="3" stroke="#334155" strokeWidth="1.5" fill="none" />
          <circle cx="15" cy="14" r="3" stroke="#334155" strokeWidth="1.5" fill="none" />
          <line x1="5" y1="14" x2="9" y2="9" stroke="#ef4444" strokeWidth="1.5" />
          <line x1="9" y1="9" x2="15" y2="14" stroke="#ef4444" strokeWidth="1.5" />
          <line x1="9" y1="9" x2="13" y2="9" stroke="#ef4444" strokeWidth="1.5" />
          <line x1="13" y1="9" x2="15" y2="14" stroke="#334155" strokeWidth="1.5" />
          <line x1="13" y1="9" x2="14" y2="6" stroke="#334155" strokeWidth="1.5" />
        </svg>
      );

    case 'piano':
      return (
        <svg
          width={pixelSize}
          height={pixelSize}
          viewBox="0 0 20 20"
          className={`shrink-0 image-rendering-pixelated ${className}`}
          shapeRendering="crispEdges"
        >
          {/* Piano keys */}
          <rect x="3" y="4" width="14" height="12" fill="#1e293b" />
          {/* White keys */}
          <rect x="4" y="6" width="2" height="9" fill="#ffffff" />
          <rect x="7" y="6" width="2" height="9" fill="#ffffff" />
          <rect x="10" y="6" width="2" height="9" fill="#ffffff" />
          <rect x="13" y="6" width="2" height="9" fill="#ffffff" />
          {/* Black keys */}
          <rect x="6" y="6" width="1.5" height="5" fill="#000000" />
          <rect x="9" y="6" width="1.5" height="5" fill="#000000" />
          <rect x="12" y="6" width="1.5" height="5" fill="#000000" />
        </svg>
      );

    case 'rock_climbing':
      return (
        <svg
          width={pixelSize}
          height={pixelSize}
          viewBox="0 0 20 20"
          className={`shrink-0 image-rendering-pixelated ${className}`}
          shapeRendering="crispEdges"
        >
          {/* Mountain wall & climber figure */}
          <polygon points="2,18 7,4 12,9 18,2 18,18" fill="#64748b" />
          {/* Climber */}
          <circle cx="8" cy="8" r="1.5" fill="#facc15" />
          <line x1="8" y1="9" x2="7" y2="12" stroke="#dc2626" strokeWidth="1.5" />
          <line x1="8" y1="9" x2="10" y2="8" stroke="#dc2626" strokeWidth="1.5" />
          <line x1="7" y1="12" x2="6" y2="14" stroke="#1e3a8a" strokeWidth="1.5" />
        </svg>
      );

    case 'reading':
      return (
        <svg
          width={pixelSize}
          height={pixelSize}
          viewBox="0 0 20 20"
          className={`shrink-0 image-rendering-pixelated ${className}`}
          shapeRendering="crispEdges"
        >
          {/* Open colorful book */}
          <polygon points="3,6 10,8 10,16 3,14" fill="#faeed1" stroke="#854d0e" strokeWidth="1" />
          <polygon points="17,6 10,8 10,16 17,14" fill="#faeed1" stroke="#854d0e" strokeWidth="1" />
          <line x1="4" y1="8" x2="9" y2="9" stroke="#3b82f6" strokeWidth="1" />
          <line x1="4" y1="11" x2="9" y2="12" stroke="#ef4444" strokeWidth="1" />
          <line x1="11" y1="9" x2="16" y2="8" stroke="#16a34a" strokeWidth="1" />
          <line x1="11" y1="12" x2="16" y2="11" stroke="#eab308" strokeWidth="1" />
        </svg>
      );

    case 'conjunction_bridge':
      return (
        <svg
          width={pixelSize}
          height={pixelSize}
          viewBox="0 0 20 20"
          className={`shrink-0 image-rendering-pixelated ${className}`}
          shapeRendering="crispEdges"
        >
          {/* Wooden arch bridge connecting two islands */}
          <rect x="2" y="12" width="4" height="6" fill="#15803d" />
          <rect x="14" y="12" width="4" height="6" fill="#15803d" />
          <path d="M 5,12 Q 10,7 15,12" stroke="#854d0e" strokeWidth="2.5" fill="none" />
          <rect x="9" y="14" width="2" height="4" fill="#38bdf8" />
        </svg>
      );

    case 'sparkle':
      return (
        <svg
          width={pixelSize}
          height={pixelSize}
          viewBox="0 0 16 16"
          className={`shrink-0 image-rendering-pixelated ${animate ? 'animate-spin' : ''} ${className}`}
          shapeRendering="crispEdges"
        >
          <rect x="7" y="2" width="2" height="12" fill="#fde047" />
          <rect x="2" y="7" width="12" height="2" fill="#fde047" />
          <rect x="6" y="6" width="4" height="4" fill="#ffffff" />
        </svg>
      );

    default:
      return (
        <svg
          width={pixelSize}
          height={pixelSize}
          viewBox="0 0 16 16"
          className={`shrink-0 image-rendering-pixelated ${className}`}
          shapeRendering="crispEdges"
        >
          <rect x="3" y="3" width="10" height="10" fill="#f59e0b" />
          <rect x="5" y="5" width="6" height="6" fill="#fbbf24" />
        </svg>
      );
  }
};
