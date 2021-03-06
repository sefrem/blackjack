export interface Card {
    rank: number | string;
    suit: Suits;
}

export type Suits = 'hearts' | 'spades' | 'diamonds' | 'clubs';

export interface InitialState {
    players: Player[];
    activePlayerId: string;
    status: GameStatus;
    dealer: Dealer;
}

export interface GameState {
    dealer: Dealer;
    players: Player[];
}

export type ChipsValues = '10' | '25' | '50' | '100';

export type Chips = Record<ChipsValues, number>;

export type PlayerStatus = 'busted' | 'win' | 'lose' | 'standoff' | 'gameLost' | 'bankrupt' | '';

export interface Player {
    id: string;
    name: string;
    hand: Card[];
    score: number;
    chips: Chips;
    status: PlayerStatus;
    bet: ChipsValues[];
}

export interface Dealer {
    id: number;
    name: string;
    hand: Card[];
    score: number;
    status: 'busted' | '';
}

export enum GameStatus {
    idle = 'idle',
    playing = 'playing',
    over = 'over',
}
