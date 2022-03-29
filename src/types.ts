import { Store } from "./store";

export interface Position {
  top: number;
  left: number;
}

export const createPosition = (model?: Partial<Position>): Position => ({
  top: 0,
  left: 0,
  ...model,
});

export interface Box {
  color: string;
  position: Position;
}

export const createBox = (model?: Partial<Box>): Box => ({
  color: "black",
  position: createPosition(),
  ...model,
});

export interface Card {
  color: string;
  position: Position;
}

export const createCard = (model?: Partial<Card>): Card => ({
  color: "black",
  position: createPosition(),
  ...model,
});

export interface WithStore {
  store: Store | undefined;
}
