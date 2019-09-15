import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
})
export class ServerComponent implements OnInit {
  username: string;

  serverStatus = 'online';

  showSecret: boolean;

  log = [];

  onToggleDetails() {
    this.showSecret = !this.showSecret;

    this.log.push(new Date());
  }

  moreThen() {
    return this.log.length > 5;
  }

  getColor() {
    return this.log.length > 5 ? 'red' : 'blue';
  }

  constructor() {}

  ngOnInit() {
  }

  onDoSomething() {
    this.username = '';
  }
}
