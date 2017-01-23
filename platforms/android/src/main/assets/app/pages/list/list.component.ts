import { Component } from "@angular/core";
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Router} from "@angular/router";
 
@Component({
  selector: "list",
  providers: [],
  templateUrl: "pages/list/list.component.html"
})
export class ListPage {
  pokemon: Array<any> = [];
  isLoading = false;
  listLoaded = false;
 
  constructor(private router: Router, private http: Http) {}
 
  ngOnInit() {
    this.isLoading = true;
    this.http.get("http://pokeapi.co/api/v2/pokemon?limit=150")
      .map(res => res.json())
      .subscribe((data) => {
        this.pokemon = data["results"];
      },
      (err) => {
        console.error(err);
        alert("Failed to load the data:" + JSON.stringify(err));
      },
      () => {
        this.isLoading = false;
        this.listLoaded = true;
      })
  }
 
  public showDetails(args: any) {
      let selectedPokemon = this.pokemon[args.index];
      this.router.navigate(["/pokemon", encodeURIComponent(selectedPokemon["url"]) ]);
  }
}