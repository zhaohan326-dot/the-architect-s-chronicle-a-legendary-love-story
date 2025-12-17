export interface Choice {
  text: string;
  nextScene: string;
  statChange?: {
    legendary?: number;
    romantic?: number;
  };
}
export interface Scene {
  narrator?: string;
  speaker?: string;
  dialogue: string;
  background: string;
  characters: { id: string; asset: string; position: 'left' | 'center' | 'right' }[];
  nextScene?: string;
  choices?: Choice[];
}
export const script: Record<string, Scene> = {
  intro: {
    narrator: "Future Architect",
    dialogue: "Kids, I'm going to tell you an incredible story. The story of how I met your mother.",
    background: 'title',
    characters: [],
    nextScene: 'pub_entry',
  },
  pub_entry: {
    speaker: "Marshall",
    dialogue: "Dude, you will not believe what just happened. I think I'm in love.",
    background: 'pub',
    characters: [
      { id: 'marshall', asset: 'marshall_neutral', position: 'left' },
      { id: 'lily', asset: 'lily_happy', position: 'right' },
    ],
    nextScene: 'barney_arrival',
  },
  barney_arrival: {
    speaker: "Barney",
    dialogue: "Haaaaave you met Ted? Architect, single, and ready to... well, you know the rest. Tonight is going to be legen—wait for it...",
    background: 'pub',
    characters: [
      { id: 'marshall', asset: 'marshall_neutral', position: 'left' },
      { id: 'lily', asset: 'lily_happy', position: 'right' },
      { id: 'barney', asset: 'barney_suit', position: 'center' },
    ],
    nextScene: 'first_choice',
  },
  first_choice: {
    speaker: "Barney",
    dialogue: "...dary! Legendary! So, what's the plan? We hitting the town or are you gonna sit here and draw buildings in your little sketchbook all night?",
    background: 'pub',
    characters: [
      { id: 'marshall', asset: 'marshall_neutral', position: 'left' },
      { id: 'lily', asset: 'lily_happy', position: 'right' },
      { id: 'barney', asset: 'barney_suit', position: 'center' },
    ],
    choices: [
      {
        text: "Suit up! It's time for an adventure.",
        nextScene: 'suit_up_outcome',
        statChange: { legendary: 1 },
      },
      {
        text: "Actually, I saw this girl across the bar...",
        nextScene: 'girl_across_bar_outcome',
        statChange: { romantic: 1 },
      },
    ],
  },
  suit_up_outcome: {
    speaker: "Barney",
    dialogue: "That's what I'm talking about! This is gonna be awesome. High five!",
    background: 'pub',
    characters: [{ id: 'barney', asset: 'barney_awesome', position: 'center' }],
    nextScene: 'end_of_pilot',
  },
  girl_across_bar_outcome: {
    speaker: "Lily",
    dialogue: "Aww, that's so sweet! You should totally go talk to her. We'll be right here.",
    background: 'pub',
    characters: [{ id: 'lily', asset: 'lily_excited', position: 'center' }],
    nextScene: 'end_of_pilot',
  },
  end_of_pilot: {
    narrator: "Future Architect",
    dialogue: "And that, kids, was just the beginning of the story... To be continued.",
    background: 'title',
    characters: [],
    // nextScene removed to end the game here
  },
};