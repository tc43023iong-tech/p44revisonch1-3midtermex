import { LevelInfo, SectionId, FarmDecoration } from '../types/game';

// Image assets imported as ES modules for production bundling (Vercel, Cloud Run, etc.)
import imgVerbFarm from '../assets/images/pixel_verb_farm_1793505163424.jpg';
import imgAdviceVillage from '../assets/images/pixel_advice_village_1793505143461.jpg';
import imgFashionBoutique from '../assets/images/pixel_fashion_boutique_1793505162590.jpg';
import imgGrammarWorkshop from '../assets/images/pixel_grammar_workshop_1793505163524.jpg';
import imgMagicForest from '../assets/images/pixel_magic_forest_1793505143610.jpg';
import imgTreasureMine from '../assets/images/pixel_treasure_mine_1793505144718.jpg';
import imgFoxCottage from '../assets/images/pixel_fox_cottage_1793505144532.jpg';

export const LEVEL_DEFINITIONS: Record<SectionId, LevelInfo> = {
  A: {
    id: 'A',
    sectionCode: 'Section A',
    name: 'Verb Transformation Farm',
    subtitle: 'The Magical Verb Harvest',
    instruction: 'Complete the verb table by filling in the Past Form, Past Participle and Present Participle (-ing).',
    bgImage: imgVerbFarm,
    character: {
      name: 'Farmer Marnie',
      role: 'Ranch Caretaker',
      avatarType: 'farmer',
      greeting: 'Welcome to the Verb Farm! Transform the verbs across all tenses to harvest bumper crops.'
    },
    totalQuestions: 8,
  },
  B: {
    id: 'B',
    sectionCode: 'Section B',
    name: 'Vocabulary Feast',
    subtitle: 'Chapter 3 Vocabulary in Context',
    instruction: 'Fill in the blanks with the correct Chapter 3 vocabulary words.',
    bgImage: imgAdviceVillage,
    character: {
      name: 'Elder Lewis',
      role: 'Town Mayor',
      avatarType: 'mayor',
      greeting: 'Our valley feast needs the right descriptive words! Choose the best vocabulary word for each sentence.'
    },
    totalQuestions: 6,
  },
  E: {
    id: 'E',
    sectionCode: 'Section E',
    name: 'Quantifiers Picnic',
    subtitle: 'Picnic Basket Matching',
    instruction: 'Match each quantifier with the correct food or drink item.',
    bgImage: imgFashionBoutique,
    character: {
      name: 'Emily',
      role: 'Valley Tailor',
      avatarType: 'fashion_rabbit',
      greeting: 'We are packing tasty treats for the valley picnic! Match each container or measure with the right food.'
    },
    totalQuestions: 5,
  },
  F: {
    id: 'F',
    sectionCode: 'Section F',
    name: 'Subject-Verb Agreement Challenge',
    subtitle: 'Grammar Harmony Workshop',
    instruction: 'Write the correct letter (A or B) in the blank to maintain subject-verb agreement.',
    bgImage: imgGrammarWorkshop,
    character: {
      name: 'Robin',
      role: 'Master Builder',
      avatarType: 'craftsman',
      greeting: 'Subject and verb must fit together tightly like good timber! Pick the correct verb form for each subject.'
    },
    totalQuestions: 10,
  },
  G: {
    id: 'G',
    sectionCode: 'Section G',
    name: 'Comparative Word Correction',
    subtitle: 'Fix the Grammar Blueprint',
    instruction: 'Identify the incorrect word in each sentence and type the correct word.',
    bgImage: imgMagicForest,
    character: {
      name: 'Sylva',
      role: 'Forest Guardian',
      avatarType: 'forest_nymph',
      greeting: 'Look closely at these comparative sentences! One word is incorrect in each sentence. Correct it!'
    },
    totalQuestions: 5,
  },
  H: {
    id: 'H',
    sectionCode: 'Section H',
    name: 'Conjunction Connections',
    subtitle: 'Bridging Words Together',
    instruction: 'Fill in the blanks with: and / or / but / both / either / too.',
    bgImage: imgTreasureMine,
    character: {
      name: 'Marlon',
      role: 'Cave Explorer',
      avatarType: 'miner',
      greeting: 'Conjunctions build sturdy bridges between ideas. Slot the rightful connecting words into each sentence.'
    },
    totalQuestions: 10,
  },
  I: {
    id: 'I',
    sectionCode: 'Section I',
    name: 'Valley Food Reviews',
    subtitle: 'Comparatives & Superlatives',
    instruction: 'Complete the sentences using the correct comparative or superlative form of the words in brackets.',
    bgImage: imgFoxCottage,
    character: {
      name: 'Penny',
      role: 'Village Librarian',
      avatarType: 'librarian',
      greeting: 'The town food critic is reviewing local eateries! Complete each sentence using the word in brackets.'
    },
    totalQuestions: 5,
  },
  K: {
    id: 'K',
    sectionCode: 'Section K',
    name: 'Class 4B Activity Survey',
    subtitle: 'Interpreting Survey Data',
    instruction: 'Look at the survey chart of Class 4B after-school activities and complete the report sentences.',
    bgImage: imgFoxCottage,
    character: {
      name: 'Professor Fox',
      role: 'School Survey Leader',
      avatarType: 'foxes',
      greeting: 'Here is the data on what pupils like doing after school! Study the chart numbers and complete the report.'
    },
    totalQuestions: 5,
  },
};

// ==================== SECTION A DATA (Verb Table: 8 verbs) ====================
export interface VerbEntry {
  id: number;
  base: string;
  past: string;
  pastParticiple: string;
  presentParticiple: string;
  spriteName: string;
}

export const SECTION_A_DATA: VerbEntry[] = [
  {
    id: 1,
    base: 'cut',
    past: 'cut',
    pastParticiple: 'cut',
    presentParticiple: 'cutting',
    spriteName: 'cut_verb',
  },
  {
    id: 2,
    base: 'do',
    past: 'did',
    pastParticiple: 'done',
    presentParticiple: 'doing',
    spriteName: 'do_verb',
  },
  {
    id: 3,
    base: 'eat',
    past: 'ate',
    pastParticiple: 'eaten',
    presentParticiple: 'eating',
    spriteName: 'eat_verb',
  },
  {
    id: 4,
    base: 'come',
    past: 'came',
    pastParticiple: 'come',
    presentParticiple: 'coming',
    spriteName: 'come_verb',
  },
  {
    id: 5,
    base: 'cost',
    past: 'cost',
    pastParticiple: 'cost',
    presentParticiple: 'costing',
    spriteName: 'cost_verb',
  },
  {
    id: 6,
    base: 'fall',
    past: 'fell',
    pastParticiple: 'fallen',
    presentParticiple: 'falling',
    spriteName: 'fall_verb',
  },
  {
    id: 7,
    base: 'bring',
    past: 'brought',
    pastParticiple: 'brought',
    presentParticiple: 'bringing',
    spriteName: 'bring_verb',
  },
  {
    id: 8,
    base: 'drink',
    past: 'drank',
    pastParticiple: 'drunk',
    presentParticiple: 'drinking',
    spriteName: 'drink_verb',
  },
];

// ==================== SECTION B DATA (Chapter 3 Vocabulary: 6 questions) ====================
export interface VocabQuestion {
  id: number;
  sentenceBefore: string;
  sentenceAfter: string;
  correctWord: string;
  spriteName: string;
  acceptedAnswers: string[];
}

export const SECTION_B_WORDS = [
  'disgusting',
  'unhealthy',
  'popular',
  'delicious',
  'heavy',
  'soya milk',
];

export const SECTION_B_DATA: VocabQuestion[] = [
  {
    id: 1,
    sentenceBefore: 'Hamburgers and fried chicken have a lot of fat. Eating too much is',
    sentenceAfter: '.',
    correctWord: 'unhealthy',
    spriteName: 'unhealthy_junk',
    acceptedAnswers: ['unhealthy'],
  },
  {
    id: 2,
    sentenceBefore: 'Grandma cannot lift the big box because it is too',
    sentenceAfter: '.',
    correctWord: 'heavy',
    spriteName: 'heavy_box',
    acceptedAnswers: ['heavy'],
  },
  {
    id: 3,
    sentenceBefore: 'Football is a',
    sentenceAfter: 'game around the world.',
    correctWord: 'popular',
    spriteName: 'football',
    acceptedAnswers: ['popular'],
  },
  {
    id: 4,
    sentenceBefore: 'My sister loves chocolate cake because it is sweet and',
    sentenceAfter: '.',
    correctWord: 'delicious',
    spriteName: 'chocolate_cake',
    acceptedAnswers: ['delicious'],
  },
  {
    id: 5,
    sentenceBefore: 'I often have a bowl of cereal with fresh',
    sentenceAfter: 'in the morning.',
    correctWord: 'soya milk',
    spriteName: 'soya_bowl',
    acceptedAnswers: ['soya milk', 'soya-milk', 'soy milk'],
  },
  {
    id: 6,
    sentenceBefore: 'The fish smells bad and tastes',
    sentenceAfter: '!',
    correctWord: 'disgusting',
    spriteName: 'rotten_fish',
    acceptedAnswers: ['disgusting'],
  },
];

// ==================== SECTION E DATA (Quantifiers Picnic Matching: 5 items) ====================
export interface QuantifierMatchItem {
  id: number;
  quantifier: string;
  correctFoodKey: string;
  correctFoodText: string;
  quantifierSprite: string;
  foodSprite: string;
}

export const SECTION_E_FOOD_OPTIONS = [
  { key: 'A', text: 'nuts', sprite: 'nuts' },
  { key: 'B', text: 'soya milk', sprite: 'soya_milk' },
  { key: 'C', text: 'grapes', sprite: 'grapes' },
  { key: 'D', text: 'seaweed', sprite: 'seaweed' },
  { key: 'E', text: 'chocolate', sprite: 'chocolate' },
];

export const SECTION_E_DATA: QuantifierMatchItem[] = [
  {
    id: 1,
    quantifier: 'a bar of',
    correctFoodKey: 'E',
    correctFoodText: 'chocolate',
    quantifierSprite: 'chocolate',
    foodSprite: 'chocolate',
  },
  {
    id: 2,
    quantifier: 'a packet of',
    correctFoodKey: 'D',
    correctFoodText: 'seaweed',
    quantifierSprite: 'seaweed',
    foodSprite: 'seaweed',
  },
  {
    id: 3,
    quantifier: 'a tin of',
    correctFoodKey: 'A',
    correctFoodText: 'nuts',
    quantifierSprite: 'nuts',
    foodSprite: 'nuts',
  },
  {
    id: 4,
    quantifier: 'a bunch of',
    correctFoodKey: 'C',
    correctFoodText: 'grapes',
    quantifierSprite: 'grapes',
    foodSprite: 'grapes',
  },
  {
    id: 5,
    quantifier: 'a carton of',
    correctFoodKey: 'B',
    correctFoodText: 'soya milk',
    quantifierSprite: 'soya_milk',
    foodSprite: 'soya_milk',
  },
];

// ==================== SECTION F DATA (Subject-Verb Agreement: 10 questions) ====================
export interface SubjectVerbItem {
  id: number;
  prefix: string;
  optA: string;
  optB: string;
  suffix: string;
  correctKey: 'A' | 'B';
  correctWord: string;
  verbFamily: string;
  spriteName: string;
}

export const SECTION_F_DATA: SubjectVerbItem[] = [
  {
    id: 1,
    prefix: 'I',
    optA: 'cut',
    optB: 'cuts',
    suffix: 'the apples for lunch every day.',
    correctKey: 'A',
    correctWord: 'cut',
    verbFamily: 'cut',
    spriteName: 'cut_verb',
  },
  {
    id: 2,
    prefix: 'She',
    optA: 'eat',
    optB: 'eats',
    suffix: 'an egg for breakfast every morning.',
    correctKey: 'B',
    correctWord: 'eats',
    verbFamily: 'eat',
    spriteName: 'eat_verb',
  },
  {
    id: 3,
    prefix: 'They',
    optA: 'do',
    optB: 'does',
    suffix: 'their homework together after school.',
    correctKey: 'A',
    correctWord: 'do',
    verbFamily: 'do',
    spriteName: 'do_verb',
  },
  {
    id: 4,
    prefix: '',
    optA: 'Do',
    optB: 'Does',
    suffix: 'you eat dinner at 6:00 p.m. every day?',
    correctKey: 'A',
    correctWord: 'Do',
    verbFamily: 'do',
    spriteName: 'do_verb',
  },
  {
    id: 5,
    prefix: 'My brother',
    optA: 'cut',
    optB: 'cuts',
    suffix: 'the watermelon into slices for the picnic.',
    correctKey: 'B',
    correctWord: 'cuts',
    verbFamily: 'cut',
    spriteName: 'cut_verb',
  },
  {
    id: 6,
    prefix: 'We',
    optA: 'eat',
    optB: 'eats',
    suffix: 'fresh vegetable salad with our lunch.',
    correctKey: 'A',
    correctWord: 'eat',
    verbFamily: 'eat',
    spriteName: 'salad',
  },
  {
    id: 7,
    prefix: 'Jason',
    optA: 'do',
    optB: 'does',
    suffix: 'his morning revision before breakfast.',
    correctKey: 'B',
    correctWord: 'does',
    verbFamily: 'do',
    spriteName: 'do_verb',
  },
  {
    id: 8,
    prefix: '',
    optA: 'Do',
    optB: 'Does',
    suffix: 'the boy do his exercise in the playground?',
    correctKey: 'B',
    correctWord: 'Does',
    verbFamily: 'do',
    spriteName: 'do_verb',
  },
  {
    id: 9,
    prefix: 'The little puppy',
    optA: 'drink',
    optB: 'drinks',
    suffix: 'fresh water after playing on the grass.',
    correctKey: 'B',
    correctWord: 'drinks',
    verbFamily: 'drink',
    spriteName: 'drink_verb',
  },
  {
    id: 10,
    prefix: 'Uncle Sam and Aunt May',
    optA: 'bring',
    optB: 'brings',
    suffix: 'a basket of juicy strawberries from the farm.',
    correctKey: 'A',
    correctWord: 'bring',
    verbFamily: 'bring',
    spriteName: 'bring_verb',
  },
];

// ==================== SECTION G DATA (Correct the Words: 5 questions) ====================
export interface WordCorrectionItem {
  id: number;
  originalSentence: string;
  incorrectWord: string;
  correctWord: string;
  acceptedAnswers: string[];
  spriteName: string;
}

export const SECTION_G_DATA: WordCorrectionItem[] = [
  {
    id: 1,
    originalSentence: 'Bill is fatter then Ben.',
    incorrectWord: 'then',
    correctWord: 'than',
    acceptedAnswers: ['than'],
    spriteName: 'scarecrow',
  },
  {
    id: 2,
    originalSentence: 'Tin is the older in Class C.',
    incorrectWord: 'older',
    correctWord: 'oldest',
    acceptedAnswers: ['oldest'],
    spriteName: 'librarian',
  },
  {
    id: 3,
    originalSentence: "John's tail is longest than Tom's tail.",
    incorrectWord: 'longest',
    correctWord: 'longer',
    acceptedAnswers: ['longer'],
    spriteName: 'rabbit',
  },
  {
    id: 4,
    originalSentence: "Bob's tail is the shorter.",
    incorrectWord: 'shorter',
    correctWord: 'shortest',
    acceptedAnswers: ['shortest'],
    spriteName: 'foxes',
  },
  {
    id: 5,
    originalSentence: 'The Restaurant has the most deliciousest food.',
    incorrectWord: 'most deliciousest',
    correctWord: 'most delicious',
    acceptedAnswers: ['most delicious', 'delicious'],
    spriteName: 'pizza',
  },
];

// ==================== SECTION H DATA (Conjunction Connections: 10 questions) ====================
export interface ConjunctionItem {
  id: number;
  pattern: 'both_and' | 'either_or' | 'either' | 'too' | 'but';
  sentencePart1: string;
  sentencePart2: string;
  sentencePart3?: string;
  expectedWord1: string;
  expectedWord2?: string;
  spriteName: string;
}

export const SECTION_H_DATA: ConjunctionItem[] = [
  {
    id: 1,
    pattern: 'both_and',
    sentencePart1: 'My father can speak',
    sentencePart2: 'English',
    sentencePart3: 'Chinese.',
    expectedWord1: 'both',
    expectedWord2: 'and',
    spriteName: 'conjunction_bridge',
  },
  {
    id: 2,
    pattern: 'either',
    sentencePart1: "Cindy doesn't like PE. She doesn't like Maths",
    sentencePart2: '.',
    expectedWord1: 'either',
    spriteName: 'conjunction_bridge',
  },
  {
    id: 3,
    pattern: 'but',
    sentencePart1: 'Peter is good at math,',
    sentencePart2: 'his English is not very good.',
    expectedWord1: 'but',
    spriteName: 'conjunction_bridge',
  },
  {
    id: 4,
    pattern: 'too',
    sentencePart1: 'I like Music. I like General Studies',
    sentencePart2: '.',
    expectedWord1: 'too',
    spriteName: 'conjunction_bridge',
  },
  {
    id: 5,
    pattern: 'both_and',
    sentencePart1: 'Uncle David can play',
    sentencePart2: 'the guitar',
    sentencePart3: 'the piano.',
    expectedWord1: 'both',
    expectedWord2: 'and',
    spriteName: 'piano',
  },
  {
    id: 6,
    pattern: 'either',
    sentencePart1: "Tommy does not drink coffee. He does not drink milk",
    sentencePart2: '.',
    expectedWord1: 'either',
    spriteName: 'drink_verb',
  },
  {
    id: 7,
    pattern: 'but',
    sentencePart1: 'Jenny wanted to go hiking,',
    sentencePart2: 'it started to rain heavily.',
    expectedWord1: 'but',
    spriteName: 'fall_verb',
  },
  {
    id: 8,
    pattern: 'too',
    sentencePart1: 'Amy loves drawing. Her brother likes painting',
    sentencePart2: '.',
    expectedWord1: 'too',
    spriteName: 'reading',
  },
  {
    id: 9,
    pattern: 'either_or',
    sentencePart1: 'You can have',
    sentencePart2: 'orange juice',
    sentencePart3: 'apple juice for breakfast.',
    expectedWord1: 'either',
    expectedWord2: 'or',
    spriteName: 'drink_verb',
  },
  {
    id: 10,
    pattern: 'but',
    sentencePart1: 'The pupils were tired after the run,',
    sentencePart2: 'they were still smiling happily.',
    expectedWord1: 'but',
    spriteName: 'trophy',
  },
];

// ==================== SECTION I DATA (Adjectives Comparatives: 5 questions) ====================
export interface FoodReviewItem {
  id: number;
  baseWord: string;
  sentenceBefore: string;
  sentenceAfter: string;
  correctWord: string;
  acceptedAnswers: string[];
  spriteName: string;
}

export const SECTION_I_DATA: FoodReviewItem[] = [
  {
    id: 1,
    baseWord: 'cheap',
    sentenceBefore: 'The food at Burger House is the',
    sentenceAfter: '.',
    correctWord: 'cheapest',
    acceptedAnswers: ['cheapest'],
    spriteName: 'cost_verb',
  },
  {
    id: 2,
    baseWord: 'healthy',
    sentenceBefore: 'I think salad is',
    sentenceAfter: 'than burgers.',
    correctWord: 'healthier',
    acceptedAnswers: ['healthier'],
    spriteName: 'salad',
  },
  {
    id: 3,
    baseWord: 'popular',
    sentenceBefore: 'Among the three restaurants, Burger House is the',
    sentenceAfter: 'restaurant.',
    correctWord: 'most popular',
    acceptedAnswers: ['most popular'],
    spriteName: 'burger',
  },
  {
    id: 4,
    baseWord: 'delicious',
    sentenceBefore: 'The food at Burger House is more',
    sentenceAfter: 'than Burger King.',
    correctWord: 'delicious',
    acceptedAnswers: ['delicious'],
    spriteName: 'pizza',
  },
  {
    id: 5,
    baseWord: 'expensive',
    sentenceBefore: 'The food at Burger Town is the most',
    sentenceAfter: '.',
    correctWord: 'expensive',
    acceptedAnswers: ['expensive'],
    spriteName: 'steak',
  },
];

// ==================== SECTION K DATA (Class 4B After-School Survey) ====================
export interface SurveyActivity {
  name: string;
  count: number;
  spriteName: string;
  color: string;
}

export const SECTION_K_ACTIVITIES: SurveyActivity[] = [
  { name: 'texting their friends', count: 8, spriteName: 'texting', color: '#38bdf8' },
  { name: 'playing volleyball', count: 6, spriteName: 'volleyball', color: '#f59e0b' },
  { name: 'going cycling', count: 5, spriteName: 'cycling', color: '#10b981' },
  { name: 'playing the piano', count: 3, spriteName: 'piano', color: '#a855f7' },
  { name: 'reading newspapers', count: 2, spriteName: 'reading', color: '#ec4899' },
  { name: 'going rock climbing', count: 1, spriteName: 'rock_climbing', color: '#ef4444' },
];

export interface SurveyReportQuestion {
  id: number;
  count: number;
  prefix: string;
  suffix: string;
  correctActivity: string;
  acceptedAnswers: string[];
  spriteName: string;
}

export const SECTION_K_QUESTIONS: SurveyReportQuestion[] = [
  {
    id: 1,
    count: 8,
    prefix: '8 of them like',
    suffix: '.',
    correctActivity: 'texting their friends',
    acceptedAnswers: ['texting their friends', 'texting friends', 'texting'],
    spriteName: 'texting',
  },
  {
    id: 2,
    count: 6,
    prefix: '6 pupils like',
    suffix: '.',
    correctActivity: 'playing volleyball',
    acceptedAnswers: ['playing volleyball', 'volleyball'],
    spriteName: 'volleyball',
  },
  {
    id: 3,
    count: 5,
    prefix: '5 of them like',
    suffix: '.',
    correctActivity: 'going cycling',
    acceptedAnswers: ['going cycling', 'cycling'],
    spriteName: 'cycling',
  },
  {
    id: 4,
    count: 3,
    prefix: '3 pupils like',
    suffix: '.',
    correctActivity: 'playing the piano',
    acceptedAnswers: ['playing the piano', 'piano'],
    spriteName: 'piano',
  },
  {
    id: 5,
    count: 1,
    prefix: 'Only one pupil likes',
    suffix: '.',
    correctActivity: 'going rock climbing',
    acceptedAnswers: ['going rock climbing', 'rock climbing'],
    spriteName: 'rock_climbing',
  },
];

// ==================== FARM DECORATIONS & SHOP ====================
export const FARM_SHOP_ITEMS: FarmDecoration[] = [
  {
    id: 'sunflower_patch',
    name: 'Sunny Sunflower Patch',
    category: 'crop',
    cost: 30,
    starRequirement: 0,
    description: 'A cheerful patch of golden sunflowers that glow in the autumn breeze.',
    pixelSvg: 'sunflower',
  },
  {
    id: 'sweet_melon',
    name: 'Sweet Pink Melon',
    category: 'crop',
    cost: 50,
    starRequirement: 2,
    description: 'Juicy summer melon grown with grammar wisdom.',
    pixelSvg: 'melon',
  },
  {
    id: 'clucking_hen',
    name: 'Cozy Clucking Hen',
    category: 'animal',
    cost: 75,
    starRequirement: 4,
    description: 'Lays fresh golden eggs every morning for breakfast.',
    pixelSvg: 'chicken',
  },
  {
    id: 'fluffy_bunny',
    name: 'Fluffy White Bunny',
    category: 'animal',
    cost: 90,
    starRequirement: 6,
    description: 'Hops happily around the garden cabbage patches.',
    pixelSvg: 'rabbit',
  },
  {
    id: 'gentle_cow',
    name: 'Gentle Dairy Cow',
    category: 'animal',
    cost: 140,
    starRequirement: 10,
    description: 'Produces rich, fresh milk for the valley festival.',
    pixelSvg: 'cow',
  },
  {
    id: 'friendly_scarecrow',
    name: 'Friendly Scarecrow',
    category: 'building',
    cost: 60,
    starRequirement: 3,
    description: 'Watches over your crops with a pleasant smile.',
    pixelSvg: 'scarecrow',
  },
  {
    id: 'magic_forest_junimo',
    name: 'Magical Forest Junimo',
    category: 'special',
    cost: 200,
    starRequirement: 14,
    description: 'A friendly forest spirit blessing your farm with good fortune.',
    pixelSvg: 'junimo',
  },
  {
    id: 'golden_trophy',
    name: 'Grammar Champion Cup',
    category: 'special',
    cost: 250,
    starRequirement: 18,
    description: 'Golden championship trophy awarded to the valley top scholar.',
    pixelSvg: 'trophy',
  },
];

export const FARM_DECORATIONS = FARM_SHOP_ITEMS;

