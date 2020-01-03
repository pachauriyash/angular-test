import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { TestComponent } from "./test/test.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChild(TestComponent, {static: false}) child;
  constructor() { }
  title = 'angular-test';
  parentMessage = "message from parent";
  message:string;

  ngAfterViewInit() {
    this.message = this.child.message
  }
}
