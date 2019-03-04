import { Component, OnInit } from '@angular/core';

export interface Card {
  title: string;
  subtitle: string;
  imgPath: string;
  descr: string;
}

@Component({
  selector: 'app-card-grid',
  templateUrl: '../html/card-grid.html',
  styleUrls: ['../css/card-grid.css']
})

export class CardGridComponent implements OnInit {
  breakpoint: number;
  ratio: string;

  cards: Card[] = [
    {
      title: 'Asian Spiny Zebra',
      subtitle: 'Nerite Snail',
      imgPath: 'assets/img/AsianSpinyZebraNerite.jpg',
      descr: 'These snails have a whorl of short, slightly curved spines around the apex of the shell. In nature their habitat ' +
        'is in small streams where they dine on algae covered stones and on vegetation stalks.'
    },
    {
      title: 'Green Tiger',
      subtitle: 'Nerite Snail',
      imgPath: 'assets/img/GreenTigerNerite.jpg',
      descr: 'These little snails are actually about the size of a dime or a marble. Nerites are the best algae eating snail ' +
        'for aquariums in the world, as they DO NOT reproduce in freshwater, but only in brackish or saltwater.'
    },
    {
      title: 'Red Racer',
      subtitle: 'Nerite Snail',
      imgPath: 'assets/img/RedRacerNerite.jpg',
      descr: 'Red Nerites have a truly striking and beautiful shell and are also relatively rare. The amount of red varies on ' +
        'these shells from nearly fully red to orange and yellow with red stripes.'
    }
  ];

  ngOnInit() {
    if (window.innerWidth <= 798) {
      this.breakpoint = 1;
      this.ratio = '1:1.2';
    } else {
      this.breakpoint = this.cards.length;
      this.ratio = '1:1.5';
    }
  }

  onResize(event) {
    if (event.target.innerWidth <= 798) {
      this.breakpoint = 1;
      this.ratio = '1:1.2';
    } else {
      this.breakpoint = this.cards.length;
      this.ratio = '1:1.5';
    }
  }


}
