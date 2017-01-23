"use strict";
var core_1 = require("@angular/core");
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
var router_1 = require("@angular/router");
var PokemonPage = (function () {
    function PokemonPage(router, route, http) {
        this.router = router;
        this.route = route;
        this.http = http;
        this.name = "";
        this.pokeimg = "";
        this.weight = 0;
        this.height = 0;
        this.isLoading = false;
        this.dataLoaded = false;
    }
    PokemonPage.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = true;
        this.route.params
            .map(function (params) { return decodeURIComponent(params['url']); })
            .subscribe(function (url) {
            _this.http.get(url)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.name = data["name"];
                _this.pokeimg = data["sprites"]["front_default"];
                _this.weight = data["weight"];
                _this.height = data["height"];
            }, function (err) {
                console.error(err);
            }, function () {
                _this.isLoading = false;
                _this.dataLoaded = true;
            });
        });
    };
    PokemonPage.prototype.navigateBack = function () {
        this.router.navigate(["/"]);
    };
    PokemonPage = __decorate([
        core_1.Component({
            selector: "pokemon-page",
            providers: [],
            templateUrl: "pages/pokemon/pokemon.component.html"
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, http_1.Http])
    ], PokemonPage);
    return PokemonPage;
}());
exports.PokemonPage = PokemonPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9rZW1vbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwb2tlbW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEscUJBQTBCLGVBQWUsQ0FBQyxDQUFBO0FBQzFDLHFCQUFxQixlQUFlLENBQUMsQ0FBQTtBQUNyQyxRQUFPLHVCQUF1QixDQUFDLENBQUE7QUFDL0IsdUJBQXFDLGlCQUFpQixDQUFDLENBQUE7QUFPdkQ7SUFTRSxxQkFBb0IsTUFBYyxFQUFVLEtBQXFCLEVBQVUsSUFBVTtRQUFqRSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFNO1FBUnJGLFNBQUksR0FBVyxFQUFFLENBQUM7UUFDbEIsWUFBTyxHQUFXLEVBQUUsQ0FBQztRQUNyQixXQUFNLEdBQVcsQ0FBQyxDQUFDO1FBQ25CLFdBQU0sR0FBVyxDQUFDLENBQUM7UUFFbkIsY0FBUyxHQUFZLEtBQUssQ0FBQztRQUMzQixlQUFVLEdBQVcsS0FBSyxDQUFDO0lBRStELENBQUM7SUFFM0YsOEJBQVEsR0FBUjtRQUFBLGlCQXNCQztRQXJCQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUV0QixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU07YUFDZCxHQUFHLENBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBakMsQ0FBaUMsQ0FBQzthQUNoRCxTQUFTLENBQUMsVUFBQSxHQUFHO1lBQ1osS0FBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDO2lCQUNqQixHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDO2lCQUN0QixTQUFTLENBQUMsVUFBQyxJQUFJO2dCQUNkLEtBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUN6QixLQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQztnQkFDaEQsS0FBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQzdCLEtBQUksQ0FBQyxNQUFNLEdBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzlCLENBQUMsRUFDRCxVQUFDLEdBQUc7Z0JBQ0YsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNyQixDQUFDLEVBQ0Q7Z0JBQ0UsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7Z0JBQ3ZCLEtBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1lBQ3pCLENBQUMsQ0FBQyxDQUFBO1FBQ04sQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsa0NBQVksR0FBWjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBMUNIO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFNBQVMsRUFBRSxFQUFFO1lBQ2IsV0FBVyxFQUFFLHNDQUFzQztTQUNwRCxDQUFDOzttQkFBQTtJQXVDRixrQkFBQztBQUFELENBQUMsQUF0Q0QsSUFzQ0M7QUF0Q1ksbUJBQVcsY0FzQ3ZCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBIdHRwIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcclxuaW1wb3J0IHtSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbiBcclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwicG9rZW1vbi1wYWdlXCIsXHJcbiAgcHJvdmlkZXJzOiBbXSxcclxuICB0ZW1wbGF0ZVVybDogXCJwYWdlcy9wb2tlbW9uL3Bva2Vtb24uY29tcG9uZW50Lmh0bWxcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgUG9rZW1vblBhZ2Uge1xyXG4gIG5hbWU6IHN0cmluZyA9IFwiXCI7XHJcbiAgcG9rZWltZzogc3RyaW5nID0gXCJcIjtcclxuICB3ZWlnaHQ6IG51bWJlciA9IDA7XHJcbiAgaGVpZ2h0OiBudW1iZXIgPSAwO1xyXG4gXHJcbiAgaXNMb2FkaW5nOiBib29sZWFuID0gZmFsc2U7XHJcbiAgZGF0YUxvYWRlZDpib29sZWFuID0gZmFsc2U7XHJcbiBcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSBodHRwOiBIdHRwKSB7ICB9XHJcbiBcclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcclxuIFxyXG4gICAgdGhpcy5yb3V0ZS5wYXJhbXNcclxuICAgICAgLm1hcChwYXJhbXMgPT4gZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtc1sndXJsJ10pKVxyXG4gICAgICAuc3Vic2NyaWJlKHVybCA9PiB7XHJcbiAgICAgICAgdGhpcy5odHRwLmdldCh1cmwpXHJcbiAgICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAuc3Vic2NyaWJlKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLm5hbWUgPSBkYXRhW1wibmFtZVwiXTtcclxuICAgICAgICAgIHRoaXMucG9rZWltZyA9IGRhdGFbXCJzcHJpdGVzXCJdW1wiZnJvbnRfZGVmYXVsdFwiXTtcclxuICAgICAgICAgIHRoaXMud2VpZ2h0ID0gZGF0YVtcIndlaWdodFwiXTtcclxuICAgICAgICAgIHRoaXMuaGVpZ2h0PSBkYXRhW1wiaGVpZ2h0XCJdO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgKGVycikgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgIHRoaXMuZGF0YUxvYWRlZCA9IHRydWU7XHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcbiAgfVxyXG4gXHJcbiAgbmF2aWdhdGVCYWNrKCkge1xyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL1wiXSk7XHJcbiAgfVxyXG59Il19