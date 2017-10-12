import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-session-item',
  templateUrl: './session-item.component.html',
  styleUrls: ['./session-item.component.css']
})
export class SessionItemComponent implements OnInit {
  @Input() session;
  @Output() participantsChange = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }
  inscrire() {
    console.log('Nouvelle Inscription ...');
    this.session.participants = +this.session.participants + 1;
    console.log(this.session.participants + ' Participants');
    this.participantsChange.emit(this.session.participants);
    if (this.session.participants >= 20 ) {
      this.session.isCompleted = true;
    }
  }


}
