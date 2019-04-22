import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/core/services/heroes.service';
import { Hero } from 'src/core/models/hero-model';
import { MatDialog } from '@angular/material/dialog';
import { DialogCreateHeroComponent } from './dialog-create-hero/dialog-create-hero.component';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.scss']
})
export class MainScreenComponent implements OnInit {

  public heroes: Hero[];
  public rows: Hero[];
  constructor(
    private _heroesService: HeroesService,
    private _dialog: MatDialog
  ) { }

  ngOnInit() {
    this.obterHerois();
  }

  public obterHerois() {
    this._heroesService.getHeroes().subscribe(heroes => {
      this.heroes = heroes;
      this.rows = this.criarGrid(this.heroes);
    });
  }

  public abrirModal(): void {
    const dialogRef = this._dialog.open(DialogCreateHeroComponent, {
      width: '500px',
      height: '500px'
    });
  }

  public criarGrid(heroes: Hero[]): Hero[] {
    const gridRows = [];
    const numeroColunas = 2;

    for (let i = 0; i < heroes.length; i += numeroColunas) {
      gridRows.push(heroes.slice(i, i + numeroColunas));
    }
    console.log(gridRows);
    return gridRows;
  }

}
