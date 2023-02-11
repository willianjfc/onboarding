import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub-title',
  templateUrl: './sub-title.component.html',
  styleUrls: ['./sub-title.component.scss']
})
export class SubTitleComponent implements OnInit {
  @Input() subTitle: string = 'Escreva uma breve explicação do que vai ser a novidade e de como vai funcionar'
  constructor() { }

  ngOnInit(): void {
  }

}
