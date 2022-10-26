import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
  
export class HeroService {

  private readonly API = 'https://superheroapi.com/api/5033128890082701/search/id/'


  constructor(private http: HttpClient) { }

  getHero(id: number): Observable<Hero> {
    return this.http.get<Hero>(`https://app.sketchdeck.com/api/hero?id=${id}`);

  }


}
