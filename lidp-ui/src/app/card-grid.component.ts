import { Component } from '@angular/core';

export interface Card {
  title: string;
  subtitle: string;
  imgPath: string;
}

@Component({
  selector: 'app-card-grid',
  templateUrl: 'card-grid.html'
})

export class CardGridComponent {
  cards: Card[] = [
    {
      title: 'Asian Spiny Zebra',
      subtitle: 'Nerite Snail',
      imgPath: 'assets/img/AsianSpinyZebraNerite.jpg' },
    {
      title: 'Green Tiger',
      subtitle: 'Nerite Snail',
      imgPath: 'assets/img/GreenTigerNerite.jpg'
    },
    {
      title: 'Red Racer',
      subtitle: 'Nerite Snail',
      imgPath: 'assets/img/RedRacerNerite.jpg'
    }
  ];
}
