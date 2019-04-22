import { Component, OnInit, Input } from '@angular/core';
import { Hero } from 'src/core/models/hero-model';

@Component({
  selector: 'mhl-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  @Input() hero: Hero;

  constructor() { }

  ngOnInit() {
  }

}
