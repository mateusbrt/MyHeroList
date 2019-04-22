import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Hero } from '../models/hero-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  public baseUrl = 'http://localhost:3000/heroes/'
  constructor(
    private _http: HttpClient
  ) { }

  public getHeroes(): Observable<Hero[]>{
    return this._http.get<Hero[]>(this.baseUrl);
  }

  public postHeroes(hero: Hero) {
    return this._http.post(this.baseUrl, hero);
  }
}
