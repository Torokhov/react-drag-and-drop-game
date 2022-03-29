import { makeAutoObservable } from "mobx";
import { Box, Card, createBox, createCard, createPosition } from "./types";

export class Store {
  private readonly boxes: Box[];
  private readonly cards: Card[];

  constructor() {
    makeAutoObservable(this);
    this.boxes = [
      createBox({
        color: "red",
        position: createPosition({ top: 10, left: 10 }),
      }),
      createBox({
        color: "yellow",
        position: createPosition({ top: 10, left: 120 }),
      }),
      createBox({
        color: "green",
        position: createPosition({ top: 10, left: 240 }),
      }),
      createBox({
        color: "purple",
        position: createPosition({ top: 10, left: 360 }),
      }),
    ];

    this.cards = [
      createCard({
        color: "red",
        position: createPosition({ top: 120, left: 10 }),
      }),
      createCard({
        color: "yellow",
        position: createPosition({ top: 120, left: 120 }),
      }),
      createCard({
        color: "green",
        position: createPosition({ top: 120, left: 240 }),
      }),
      createCard({
        color: "purple",
        position: createPosition({ top: 120, left: 360 }),
      }),
    ];
  }

  get getBoxes() {
    return this.boxes;
  }

  get getCards() {
    return this.cards;
  }
}

export const store = new Store();
