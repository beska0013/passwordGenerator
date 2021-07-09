import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  template: `
    <main>
    <router-outlet></router-outlet>
    </main>
  `,
  // styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() { }
  // copy(){
  //   if (typeof this.input === "string") {
  //     navigator.clipboard.writeText(this.input).then(() => this.isCopy = true);
  //   }
  // }
  ngOnInit(): void {
  }

}
