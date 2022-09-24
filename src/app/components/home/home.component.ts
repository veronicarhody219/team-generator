import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  newMemberName: string = '';
  members: string[] = [];
  errorMsg: string = '';
  numberOfTeams: number | '' = '';
  teams: string[][] = [];
  constructor() {}

  ngOnInit(): void {}
  onInput(member: string) {
    this.newMemberName = member;
  }
  addMember() {
    if (!this.errorMsg) {
      this.errorMsg = "Name can't be empty";
      return;
    }
    this.errorMsg = '';
    this.members.push(this.newMemberName);
    this.newMemberName = '';
  }
  onNumberOfTeamsInput(value: string) {
    this.numberOfTeams = Number(value);
  }
  generateTeams() {
    this.teams = [];
    this.errorMsg = '';
    const allMembers = [...this.members];
    if (!this.numberOfTeams || this.numberOfTeams <= 0) {
      this.errorMsg = 'Invalid number of teams';
      return;
    }
    if (this.members.length < this.numberOfTeams) {
      this.errorMsg = 'Not enough members';
      return;
    }

    while (allMembers.length) {
      for (let i = 0; i < this.numberOfTeams; i++) {
        const randomNumber = Math.floor(Math.random() * allMembers.length);
        const member = allMembers.splice(randomNumber, 1)[0];
        if (!member) break;
        if (this.teams[i]) {
          this.teams[i].push(member);
        } else {
          this.teams[i] = [member];
        }
      }
    }
    this.members = [];
    this.numberOfTeams = '';
    console.log(this.teams);
  }
}
