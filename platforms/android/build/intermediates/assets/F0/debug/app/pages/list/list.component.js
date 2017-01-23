"use strict";
var core_1 = require("@angular/core");
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
var router_1 = require("@angular/router");
var ListPage = (function () {
    function ListPage(router, http) {
        this.router = router;
        this.http = http;
        this.pokemon = [];
        this.isLoading = false;
        this.listLoaded = false;
    }
    ListPage.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = true;
        this.http.get("http://pokeapi.co/api/v2/pokemon?limit=150")
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.pokemon = data["results"];
        }, function (err) {
            console.error(err);
            alert("Failed to load the data:" + JSON.stringify(err));
        }, function () {
            _this.isLoading = false;
            _this.listLoaded = true;
        });
    };
    ListPage.prototype.showDetails = function (args) {
        var selectedPokemon = this.pokemon[args.index];
        this.router.navigate(["/pokemon", encodeURIComponent(selectedPokemon["url"])]);
    };
    ListPage = __decorate([
        core_1.Component({
            selector: "list",
            providers: [],
            templateUrl: "pages/list/list.component.html"
        }), 
        __metadata('design:paramtypes', [router_1.Router, http_1.Http])
    ], ListPage);
    return ListPage;
}());
exports.ListPage = ListPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEscUJBQTBCLGVBQWUsQ0FBQyxDQUFBO0FBQzFDLHFCQUFxQixlQUFlLENBQUMsQ0FBQTtBQUNyQyxRQUFPLHVCQUF1QixDQUFDLENBQUE7QUFDL0IsdUJBQXFCLGlCQUFpQixDQUFDLENBQUE7QUFPdkM7SUFLRSxrQkFBb0IsTUFBYyxFQUFVLElBQVU7UUFBbEMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLFNBQUksR0FBSixJQUFJLENBQU07UUFKdEQsWUFBTyxHQUFlLEVBQUUsQ0FBQztRQUN6QixjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLGVBQVUsR0FBRyxLQUFLLENBQUM7SUFFc0MsQ0FBQztJQUUxRCwyQkFBUSxHQUFSO1FBQUEsaUJBZUM7UUFkQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN0QixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyw0Q0FBNEMsQ0FBQzthQUN4RCxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDO2FBQ3RCLFNBQVMsQ0FBQyxVQUFDLElBQUk7WUFDZCxLQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNqQyxDQUFDLEVBQ0QsVUFBQyxHQUFHO1lBQ0YsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNuQixLQUFLLENBQUMsMEJBQTBCLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzFELENBQUMsRUFDRDtZQUNFLEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1lBQ3ZCLEtBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVNLDhCQUFXLEdBQWxCLFVBQW1CLElBQVM7UUFDeEIsSUFBSSxlQUFlLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxVQUFVLEVBQUUsa0JBQWtCLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUUsQ0FBQyxDQUFDO0lBQ3BGLENBQUM7SUFoQ0g7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU07WUFDaEIsU0FBUyxFQUFFLEVBQUU7WUFDYixXQUFXLEVBQUUsZ0NBQWdDO1NBQzlDLENBQUM7O2dCQUFBO0lBNkJGLGVBQUM7QUFBRCxDQUFDLEFBNUJELElBNEJDO0FBNUJZLGdCQUFRLFdBNEJwQixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgSHR0cCB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XHJcbmltcG9ydCB7Um91dGVyfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbiBcclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwibGlzdFwiLFxyXG4gIHByb3ZpZGVyczogW10sXHJcbiAgdGVtcGxhdGVVcmw6IFwicGFnZXMvbGlzdC9saXN0LmNvbXBvbmVudC5odG1sXCJcclxufSlcclxuZXhwb3J0IGNsYXNzIExpc3RQYWdlIHtcclxuICBwb2tlbW9uOiBBcnJheTxhbnk+ID0gW107XHJcbiAgaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgbGlzdExvYWRlZCA9IGZhbHNlO1xyXG4gXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBodHRwOiBIdHRwKSB7fVxyXG4gXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XHJcbiAgICB0aGlzLmh0dHAuZ2V0KFwiaHR0cDovL3Bva2VhcGkuY28vYXBpL3YyL3Bva2Vtb24/bGltaXQ9MTUwXCIpXHJcbiAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgICAgIC5zdWJzY3JpYmUoKGRhdGEpID0+IHtcclxuICAgICAgICB0aGlzLnBva2Vtb24gPSBkYXRhW1wicmVzdWx0c1wiXTtcclxuICAgICAgfSxcclxuICAgICAgKGVycikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICBhbGVydChcIkZhaWxlZCB0byBsb2FkIHRoZSBkYXRhOlwiICsgSlNPTi5zdHJpbmdpZnkoZXJyKSk7XHJcbiAgICAgIH0sXHJcbiAgICAgICgpID0+IHtcclxuICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubGlzdExvYWRlZCA9IHRydWU7XHJcbiAgICAgIH0pXHJcbiAgfVxyXG4gXHJcbiAgcHVibGljIHNob3dEZXRhaWxzKGFyZ3M6IGFueSkge1xyXG4gICAgICBsZXQgc2VsZWN0ZWRQb2tlbW9uID0gdGhpcy5wb2tlbW9uW2FyZ3MuaW5kZXhdO1xyXG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvcG9rZW1vblwiLCBlbmNvZGVVUklDb21wb25lbnQoc2VsZWN0ZWRQb2tlbW9uW1widXJsXCJdKSBdKTtcclxuICB9XHJcbn0iXX0=