import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
  
export class HeroService {

  constructor(private http: HttpClient) { }


  // getHeros(): Hero[] {
  //   return [
  //     { id: 12, name: 'Dr. Nice' },
  //     { id: 13, name: 'Bombasto' },
  //     { id: 14, name: 'Celeritas' },
  //     { id: 15, name: 'Magneta' },
  //     { id: 16, name: 'RubberMan' },
  //     { id: 17, name: 'Dynama' },
  //     { id: 18, name: 'Dr. IQ' },
  //     { id: 19, name: 'Magma' },
  //     { id: 20, name: 'Tornado' }
  //   ]
  // }

  getHero(id: number): Observable<Hero> {
    return this.http.get<Hero>(`https://app.sketchdeck.com/api/hero?id=${id}`);

  }
}
