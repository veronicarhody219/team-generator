import { Component, OnInit, Input } from '@angular/core';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss'],
})
export class TeamsComponent implements OnInit {
  @Input() team: string[] = [];
  @Input() index: number = 0;
  constructor() {}

  ngOnInit(): void {}
}
