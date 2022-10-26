import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  
  heroes: Hero[] = [];

  
  selectedHero?: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    const heroIds = [12, 13, 14, 15, 16, 17, 18, 19, 20];
    
    for (var id of heroIds) {
      let imageUrl = `https:\/\/www.superherodb.com\/pictures2\/portraits\/10\/100\/${id}.jpg`
      this.heroService.getHero(id).subscribe(resp => {
        resp.image = imageUrl
        this.heroes.push(resp)
      })
      this.heroes.sort((a, b)=> a.id - b.id)
    }

    

    // this.heroes = this.heroService.getHeros();
  }

}
