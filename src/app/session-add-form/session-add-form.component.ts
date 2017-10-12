import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-session-add-form',
  templateUrl: './session-add-form.component.html',
  styleUrls: ['./session-add-form.component.css']
})
export class SessionAddFormComponent implements OnInit {
  public add: boolean;
  added() {
    this.add = !this.add;
  }
  onSubmit(sessionItem) {
    console.log(sessionItem);
  }
  constructor() {
    this.add = false;
  }

  ngOnInit() {

  }

}
