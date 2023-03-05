import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedfeature = 'recipe'
  onFeatureSelected(feature:string){
    console.log("klip",feature);
    this.loadedfeature = feature;
  }
}
