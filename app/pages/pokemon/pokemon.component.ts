import { Component } from "@angular/core";
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Router, ActivatedRoute} from "@angular/router";
 
@Component({
  selector: "pokemon-page",
  providers: [],
  templateUrl: "pages/pokemon/pokemon.component.html"
})
export class PokemonPage {
  name: string = "";
  pokeimg: string = "";
  weight: number = 0;
  height: number = 0;
 
  isLoading: boolean = false;
  dataLoaded:boolean = false;
 
  constructor(private router: Router, private route: ActivatedRoute, private http: Http) {  }
 
  ngOnInit() {
    this.isLoading = true;
 
    this.route.params
      .map(params => decodeURIComponent(params['url']))
      .subscribe(url => {
        this.http.get(url)
        .map(res => res.json())
        .subscribe((data) => {
          this.name = data["name"];
          this.pokeimg = data["sprites"]["front_default"];
          this.weight = data["weight"];
          this.height= data["height"];
        },
        (err) => {
          console.error(err);
        },
        () => {
          this.isLoading = false;
          this.dataLoaded = true;
        })
    })
  }
 
  navigateBack() {
    this.router.navigate(["/"]);
  }
}