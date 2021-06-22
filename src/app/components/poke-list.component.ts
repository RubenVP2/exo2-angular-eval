import { Component } from '@angular/core';
import {map, mergeMap, tap} from 'rxjs/operators';
import { Pokemon } from '../models';
import { PokeAPIService } from '../poke-api.service';

@Component({
  selector: 'app-poke-list',
  template: `
    <button (click)="pagePrevious()" [disabled]="offset == 0" [ngStyle]="offset == 0 ? {'background-color': 'grey'} : null">Previous</button>
    <button (click)="pageNext()">Next</button>
    <span>{{ page }} / {{ totalPage }}</span>
    <app-poke-card
      *ngFor="let pokemon of pokemons"
      [pokemon]="pokemon"
    ></app-poke-card>
  `,
  styles: [`
    :host {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 40px;
      margin: 40px auto;
    }
  `]
})
export class PokeListComponent {
  pokemons: Pokemon[] = [];

  limit: number = 10;
  offset: number = 0;
  page:number = 1;
  totalPage: number = 0;

  constructor(
    public pokeService: PokeAPIService
  ) {
    this.recupererPokemon();
  }

  pagePrevious() {
    this.offset = this.offset-10;
    this.page--;
    this.recupererPokemon()
  }

  pageNext() {
    this.offset = this.offset+10;
    this.page++;
    this.recupererPokemon()
  }

  recupererPokemon() {
    this.pokeService
      .fetchPokemons(this.limit, this.offset)
      .pipe(
        // Transformation sur le flux
        // On transforme chaque valeur (PagedAPIResult<PokemonInfo>) en liste de pokemon (Pokemon[])
        // Merge map nous permet de faire la transformation
        tap(response => this.totalPage = Math.round(response.count / this.limit)),
        mergeMap(pagedResult => this.pokeService.fetchFullPokemonForPage(pagedResult) )
      )
      .subscribe(pokemons => this.pokemons = pokemons)
  }
}
