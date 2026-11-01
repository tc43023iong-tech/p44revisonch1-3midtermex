import { SectionId } from '../types/game';

export interface MCQQuestion {
  id: number;
  prompt: string;
  subPrompt?: string;
  context?: string;
  options: Array<{
    key: string;
    text: string;
  }>;
  correctKey: string;
  explanation?: string;
}

export const TWO_PLAYER_MCQ_DATA: Record<SectionId, MCQQuestion[]> = {
  // ==================== SECTION A: Verb Transformation Farm (8 questions) ====================
  A: [
    {
      id: 1,
      prompt: "What is the Past Form of the verb 'cut'?",
      subPrompt: 'Choose the correct form:',
      options: [
        { key: 'A', text: 'cut' },
        { key: 'B', text: 'cutted' },
        { key: 'C', text: 'cutting' },
        { key: 'D', text: 'cuts' },
      ],
      correctKey: 'A',
    },
    {
      id: 2,
      prompt: "What is the Past Participle of the verb 'do'?",
      subPrompt: 'Choose the correct form:',
      options: [
        { key: 'A', text: 'did' },
        { key: 'B', text: 'doing' },
        { key: 'C', text: 'done' },
        { key: 'D', text: 'does' },
      ],
      correctKey: 'C',
    },
    {
      id: 3,
      prompt: "What is the Past Form of the verb 'eat'?",
      subPrompt: 'Choose the correct form:',
      options: [
        { key: 'A', text: 'eaten' },
        { key: 'B', text: 'ate' },
        { key: 'C', text: 'eating' },
        { key: 'D', text: 'eats' },
      ],
      correctKey: 'B',
    },
    {
      id: 4,
      prompt: "What is the Past Form of the verb 'come'?",
      subPrompt: 'Choose the correct form:',
      options: [
        { key: 'A', text: 'came' },
        { key: 'B', text: 'comed' },
        { key: 'C', text: 'come' },
        { key: 'D', text: 'coming' },
      ],
      correctKey: 'A',
    },
    {
      id: 5,
      prompt: "What is the Past Participle of the verb 'cost'?",
      subPrompt: 'Choose the correct form:',
      options: [
        { key: 'A', text: 'costed' },
        { key: 'B', text: 'costing' },
        { key: 'C', text: 'cost' },
        { key: 'D', text: 'costs' },
      ],
      correctKey: 'C',
    },
    {
      id: 6,
      prompt: "What is the Past Form of the verb 'fall'?",
      subPrompt: 'Choose the correct form:',
      options: [
        { key: 'A', text: 'fell' },
        { key: 'B', text: 'fallen' },
        { key: 'C', text: 'falling' },
        { key: 'D', text: 'falled' },
      ],
      correctKey: 'A',
    },
    {
      id: 7,
      prompt: "What is the Past Participle of the verb 'bring'?",
      subPrompt: 'Choose the correct form:',
      options: [
        { key: 'A', text: 'bringed' },
        { key: 'B', text: 'brought' },
        { key: 'C', text: 'brang' },
        { key: 'D', text: 'bringing' },
      ],
      correctKey: 'B',
    },
    {
      id: 8,
      prompt: "What is the Past Participle of the verb 'drink'?",
      subPrompt: 'Choose the correct form:',
      options: [
        { key: 'A', text: 'drank' },
        { key: 'B', text: 'drunk' },
        { key: 'C', text: 'drinking' },
        { key: 'D', text: 'drinked' },
      ],
      correctKey: 'B',
    },
  ],

  // ==================== SECTION B: Vocabulary Feast (6 questions) ====================
  B: [
    {
      id: 1,
      prompt: 'Hamburgers and fried chicken have a lot of fat. Eating too much is ______.',
      subPrompt: 'Choose the correct vocabulary word:',
      options: [
        { key: 'A', text: 'unhealthy' },
        { key: 'B', text: 'disgusting' },
        { key: 'C', text: 'heavy' },
        { key: 'D', text: 'popular' },
      ],
      correctKey: 'A',
    },
    {
      id: 2,
      prompt: 'Grandma cannot lift the big box because it is too ______.',
      subPrompt: 'Choose the correct vocabulary word:',
      options: [
        { key: 'A', text: 'delicious' },
        { key: 'B', text: 'popular' },
        { key: 'C', text: 'heavy' },
        { key: 'D', text: 'disgusting' },
      ],
      correctKey: 'C',
    },
    {
      id: 3,
      prompt: 'Football is a ______ game around the world.',
      subPrompt: 'Choose the correct vocabulary word:',
      options: [
        { key: 'A', text: 'heavy' },
        { key: 'B', text: 'popular' },
        { key: 'C', text: 'unhealthy' },
        { key: 'D', text: 'disgusting' },
      ],
      correctKey: 'B',
    },
    {
      id: 4,
      prompt: 'My sister loves chocolate cake because it is sweet and ______.',
      subPrompt: 'Choose the correct vocabulary word:',
      options: [
        { key: 'A', text: 'disgusting' },
        { key: 'B', text: 'heavy' },
        { key: 'C', text: 'delicious' },
        { key: 'D', text: 'unhealthy' },
      ],
      correctKey: 'C',
    },
    {
      id: 5,
      prompt: 'I often have a bowl of cereal with fresh ______ in the morning.',
      subPrompt: 'Choose the correct vocabulary word:',
      options: [
        { key: 'A', text: 'soya milk' },
        { key: 'B', text: 'heavy' },
        { key: 'C', text: 'disgusting' },
        { key: 'D', text: 'popular' },
      ],
      correctKey: 'A',
    },
    {
      id: 6,
      prompt: 'The fish smells bad and tastes ______!',
      subPrompt: 'Choose the correct vocabulary word:',
      options: [
        { key: 'A', text: 'delicious' },
        { key: 'B', text: 'popular' },
        { key: 'C', text: 'disgusting' },
        { key: 'D', text: 'soya milk' },
      ],
      correctKey: 'C',
    },
  ],

  // ==================== SECTION E: Quantifiers Picnic Matching (5 questions) ====================
  E: [
    {
      id: 1,
      prompt: "Which food matches the quantifier 'a bar of'?",
      subPrompt: 'Select the correct item:',
      options: [
        { key: 'A', text: 'nuts' },
        { key: 'B', text: 'chocolate' },
        { key: 'C', text: 'grapes' },
        { key: 'D', text: 'soya milk' },
      ],
      correctKey: 'B',
    },
    {
      id: 2,
      prompt: "Which food matches the quantifier 'a packet of'?",
      subPrompt: 'Select the correct item:',
      options: [
        { key: 'A', text: 'grapes' },
        { key: 'B', text: 'seaweed' },
        { key: 'C', text: 'chocolate' },
        { key: 'D', text: 'nuts' },
      ],
      correctKey: 'B',
    },
    {
      id: 3,
      prompt: "Which food matches the quantifier 'a tin of'?",
      subPrompt: 'Select the correct item:',
      options: [
        { key: 'A', text: 'nuts' },
        { key: 'B', text: 'grapes' },
        { key: 'C', text: 'seaweed' },
        { key: 'D', text: 'soya milk' },
      ],
      correctKey: 'A',
    },
    {
      id: 4,
      prompt: "Which food matches the quantifier 'a bunch of'?",
      subPrompt: 'Select the correct item:',
      options: [
        { key: 'A', text: 'chocolate' },
        { key: 'B', text: 'soya milk' },
        { key: 'C', text: 'grapes' },
        { key: 'D', text: 'seaweed' },
      ],
      correctKey: 'C',
    },
    {
      id: 5,
      prompt: "Which drink matches the quantifier 'a carton of'?",
      subPrompt: 'Select the correct item:',
      options: [
        { key: 'A', text: 'soya milk' },
        { key: 'B', text: 'grapes' },
        { key: 'C', text: 'nuts' },
        { key: 'D', text: 'seaweed' },
      ],
      correctKey: 'A',
    },
  ],

  // ==================== SECTION F: Subject-Verb Agreement Challenge (10 questions) ====================
  F: [
    {
      id: 1,
      prompt: 'I ( ______ ) the apples for lunch every day.',
      subPrompt: 'Choose the correct verb form:',
      options: [
        { key: 'A', text: 'cut' },
        { key: 'B', text: 'cuts' },
      ],
      correctKey: 'A',
    },
    {
      id: 2,
      prompt: 'She ( ______ ) an egg for breakfast every morning.',
      subPrompt: 'Choose the correct verb form:',
      options: [
        { key: 'A', text: 'eat' },
        { key: 'B', text: 'eats' },
      ],
      correctKey: 'B',
    },
    {
      id: 3,
      prompt: 'They ( ______ ) their homework together after school.',
      subPrompt: 'Choose the correct verb form:',
      options: [
        { key: 'A', text: 'do' },
        { key: 'B', text: 'does' },
      ],
      correctKey: 'A',
    },
    {
      id: 4,
      prompt: '( ______ ) you eat dinner at 6:00 p.m. every day?',
      subPrompt: 'Choose the correct auxiliary verb:',
      options: [
        { key: 'A', text: 'Do' },
        { key: 'B', text: 'Does' },
      ],
      correctKey: 'A',
    },
    {
      id: 5,
      prompt: 'My brother ( ______ ) the watermelon into slices for the picnic.',
      subPrompt: 'Choose the correct verb form:',
      options: [
        { key: 'A', text: 'cut' },
        { key: 'B', text: 'cuts' },
      ],
      correctKey: 'B',
    },
    {
      id: 6,
      prompt: 'We ( ______ ) fresh vegetable salad with our lunch.',
      subPrompt: 'Choose the correct verb form:',
      options: [
        { key: 'A', text: 'eat' },
        { key: 'B', text: 'eats' },
      ],
      correctKey: 'A',
    },
    {
      id: 7,
      prompt: 'Jason ( ______ ) his morning revision before breakfast.',
      subPrompt: 'Choose the correct verb form:',
      options: [
        { key: 'A', text: 'do' },
        { key: 'B', text: 'does' },
      ],
      correctKey: 'B',
    },
    {
      id: 8,
      prompt: '( ______ ) the boy do his exercise in the playground?',
      subPrompt: 'Choose the correct auxiliary verb:',
      options: [
        { key: 'A', text: 'Do' },
        { key: 'B', text: 'Does' },
      ],
      correctKey: 'B',
    },
    {
      id: 9,
      prompt: 'The little puppy ( ______ ) fresh water after playing on the grass.',
      subPrompt: 'Choose the correct verb form:',
      options: [
        { key: 'A', text: 'drink' },
        { key: 'B', text: 'drinks' },
      ],
      correctKey: 'B',
    },
    {
      id: 10,
      prompt: 'Uncle Sam and Aunt May ( ______ ) a basket of juicy strawberries from the farm.',
      subPrompt: 'Choose the correct verb form:',
      options: [
        { key: 'A', text: 'bring' },
        { key: 'B', text: 'brings' },
      ],
      correctKey: 'A',
    },
  ],

  // ==================== SECTION G: Comparative Word Correction (5 questions) ====================
  G: [
    {
      id: 1,
      prompt: 'Sentence: "Bill is fatter then Ben."',
      subPrompt: 'What is the correct word to fix the mistake?',
      options: [
        { key: 'A', text: 'than' },
        { key: 'B', text: 'as' },
        { key: 'C', text: 'more' },
        { key: 'D', text: 'so' },
      ],
      correctKey: 'A',
    },
    {
      id: 2,
      prompt: 'Sentence: "Tin is the older in Class C."',
      subPrompt: 'What is the correct word to fix the mistake?',
      options: [
        { key: 'A', text: 'old' },
        { key: 'B', text: 'oldest' },
        { key: 'C', text: 'elder' },
        { key: 'D', text: 'older' },
      ],
      correctKey: 'B',
    },
    {
      id: 3,
      prompt: 'Sentence: "John’s tail is longest than Tom’s tail."',
      subPrompt: 'What is the correct word to fix the mistake?',
      options: [
        { key: 'A', text: 'long' },
        { key: 'B', text: 'more long' },
        { key: 'C', text: 'longer' },
        { key: 'D', text: 'longing' },
      ],
      correctKey: 'C',
    },
    {
      id: 4,
      prompt: 'Sentence: "Bob’s tail is the shorter."',
      subPrompt: 'What is the correct word to fix the mistake?',
      options: [
        { key: 'A', text: 'short' },
        { key: 'B', text: 'shortest' },
        { key: 'C', text: 'more short' },
        { key: 'D', text: 'shortly' },
      ],
      correctKey: 'B',
    },
    {
      id: 5,
      prompt: 'Sentence: "The Restaurant has the most deliciousest food."',
      subPrompt: 'What is the correct phrase to fix the mistake?',
      options: [
        { key: 'A', text: 'most delicious' },
        { key: 'B', text: 'deliciouser' },
        { key: 'C', text: 'more deliciousest' },
        { key: 'D', text: 'deliciousest' },
      ],
      correctKey: 'A',
    },
  ],

  // ==================== SECTION H: Conjunction Connections (10 questions) ====================
  H: [
    {
      id: 1,
      prompt: 'My father can speak ______ English and Chinese.',
      subPrompt: 'Choose the correct conjunction:',
      options: [
        { key: 'A', text: 'both' },
        { key: 'B', text: 'either' },
        { key: 'C', text: 'or' },
        { key: 'D', text: 'too' },
      ],
      correctKey: 'A',
    },
    {
      id: 2,
      prompt: "Cindy doesn’t like PE. She doesn’t like Maths ______.",
      subPrompt: 'Choose the correct conjunction:',
      options: [
        { key: 'A', text: 'too' },
        { key: 'B', text: 'either' },
        { key: 'C', text: 'and' },
        { key: 'D', text: 'but' },
      ],
      correctKey: 'B',
    },
    {
      id: 3,
      prompt: 'Peter is good at math, ______ his English is not very good.',
      subPrompt: 'Choose the correct conjunction:',
      options: [
        { key: 'A', text: 'and' },
        { key: 'B', text: 'or' },
        { key: 'C', text: 'but' },
        { key: 'D', text: 'both' },
      ],
      correctKey: 'C',
    },
    {
      id: 4,
      prompt: 'I like Music. I like General Studies ______.',
      subPrompt: 'Choose the correct conjunction:',
      options: [
        { key: 'A', text: 'either' },
        { key: 'B', text: 'too' },
        { key: 'C', text: 'but' },
        { key: 'D', text: 'or' },
      ],
      correctKey: 'B',
    },
    {
      id: 5,
      prompt: 'Uncle David can play ______ the guitar and the piano.',
      subPrompt: 'Choose the correct conjunction:',
      options: [
        { key: 'A', text: 'either' },
        { key: 'B', text: 'too' },
        { key: 'C', text: 'both' },
        { key: 'D', text: 'but' },
      ],
      correctKey: 'C',
    },
    {
      id: 6,
      prompt: 'Tommy does not drink coffee. He does not drink milk ______.',
      subPrompt: 'Choose the correct conjunction:',
      options: [
        { key: 'A', text: 'too' },
        { key: 'B', text: 'either' },
        { key: 'C', text: 'and' },
        { key: 'D', text: 'or' },
      ],
      correctKey: 'B',
    },
    {
      id: 7,
      prompt: 'Jenny wanted to go hiking, ______ it started to rain heavily.',
      subPrompt: 'Choose the correct conjunction:',
      options: [
        { key: 'A', text: 'but' },
        { key: 'B', text: 'and' },
        { key: 'C', text: 'or' },
        { key: 'D', text: 'too' },
      ],
      correctKey: 'A',
    },
    {
      id: 8,
      prompt: 'Amy loves drawing. Her brother likes painting ______.',
      subPrompt: 'Choose the correct conjunction:',
      options: [
        { key: 'A', text: 'either' },
        { key: 'B', text: 'both' },
        { key: 'C', text: 'too' },
        { key: 'D', text: 'but' },
      ],
      correctKey: 'C',
    },
    {
      id: 9,
      prompt: 'You can have ______ orange juice or apple juice for breakfast.',
      subPrompt: 'Choose the correct conjunction:',
      options: [
        { key: 'A', text: 'both' },
        { key: 'B', text: 'either' },
        { key: 'C', text: 'too' },
        { key: 'D', text: 'and' },
      ],
      correctKey: 'B',
    },
    {
      id: 10,
      prompt: 'The pupils were tired after the run, ______ they were still smiling happily.',
      subPrompt: 'Choose the correct conjunction:',
      options: [
        { key: 'A', text: 'but' },
        { key: 'B', text: 'and' },
        { key: 'C', text: 'or' },
        { key: 'D', text: 'either' },
      ],
      correctKey: 'A',
    },
  ],

  // ==================== SECTION I: Valley Food Reviews (5 questions) ====================
  I: [
    {
      id: 1,
      prompt: 'The food at Burger House is the ______ (cheap).',
      subPrompt: 'Choose the correct superlative form:',
      options: [
        { key: 'A', text: 'cheaper' },
        { key: 'B', text: 'cheapest' },
        { key: 'C', text: 'more cheap' },
        { key: 'D', text: 'most cheap' },
      ],
      correctKey: 'B',
    },
    {
      id: 2,
      prompt: 'I think salad is ______ (healthy) than burgers.',
      subPrompt: 'Choose the correct comparative form:',
      options: [
        { key: 'A', text: 'healthier' },
        { key: 'B', text: 'healthiest' },
        { key: 'C', text: 'more healthy' },
        { key: 'D', text: 'healthyer' },
      ],
      correctKey: 'A',
    },
    {
      id: 3,
      prompt: 'Among the three restaurants, Burger House is the ______ (popular) restaurant.',
      subPrompt: 'Choose the correct superlative form:',
      options: [
        { key: 'A', text: 'popularer' },
        { key: 'B', text: 'more popular' },
        { key: 'C', text: 'most popular' },
        { key: 'D', text: 'popularest' },
      ],
      correctKey: 'C',
    },
    {
      id: 4,
      prompt: 'The food at Burger House is more ______ (delicious) than Burger King.',
      subPrompt: 'Choose the correct form of the word in brackets:',
      options: [
        { key: 'A', text: 'delicious' },
        { key: 'B', text: 'deliciouser' },
        { key: 'C', text: 'deliciousest' },
        { key: 'D', text: 'more delicious' },
      ],
      correctKey: 'A',
    },
    {
      id: 5,
      prompt: 'The food at Burger Town is the most ______ (expensive).',
      subPrompt: 'Choose the correct form of the word in brackets:',
      options: [
        { key: 'A', text: 'expensive' },
        { key: 'B', text: 'expensivest' },
        { key: 'C', text: 'expensiver' },
        { key: 'D', text: 'most expensive' },
      ],
      correctKey: 'A',
    },
  ],

  // ==================== SECTION K: Class 4B Activity Survey (5 questions) ====================
  K: [
    {
      id: 1,
      prompt: 'According to the Class 4B survey chart, 8 of them like ______.',
      subPrompt: 'Select the activity with 8 pupils:',
      options: [
        { key: 'A', text: 'playing volleyball' },
        { key: 'B', text: 'texting their friends' },
        { key: 'C', text: 'going cycling' },
        { key: 'D', text: 'reading newspapers' },
      ],
      correctKey: 'B',
    },
    {
      id: 2,
      prompt: 'According to the Class 4B survey chart, 6 pupils like ______.',
      subPrompt: 'Select the activity with 6 pupils:',
      options: [
        { key: 'A', text: 'playing volleyball' },
        { key: 'B', text: 'playing the piano' },
        { key: 'C', text: 'going rock climbing' },
        { key: 'D', text: 'texting their friends' },
      ],
      correctKey: 'A',
    },
    {
      id: 3,
      prompt: 'According to the Class 4B survey chart, 5 of them like ______.',
      subPrompt: 'Select the activity with 5 pupils:',
      options: [
        { key: 'A', text: 'playing the piano' },
        { key: 'B', text: 'reading newspapers' },
        { key: 'C', text: 'going cycling' },
        { key: 'D', text: 'going rock climbing' },
      ],
      correctKey: 'C',
    },
    {
      id: 4,
      prompt: 'According to the Class 4B survey chart, 3 pupils like ______.',
      subPrompt: 'Select the activity with 3 pupils:',
      options: [
        { key: 'A', text: 'texting their friends' },
        { key: 'B', text: 'going cycling' },
        { key: 'C', text: 'playing the piano' },
        { key: 'D', text: 'playing volleyball' },
      ],
      correctKey: 'C',
    },
    {
      id: 5,
      prompt: 'According to the Class 4B survey chart, only one pupil likes ______.',
      subPrompt: 'Select the activity with 1 pupil:',
      options: [
        { key: 'A', text: 'going cycling' },
        { key: 'B', text: 'reading newspapers' },
        { key: 'C', text: 'playing the piano' },
        { key: 'D', text: 'going rock climbing' },
      ],
      correctKey: 'D',
    },
  ],
};
