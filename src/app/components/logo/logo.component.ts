import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {
  @Input() ImagePath: string = ''
  constructor() { 
    this.ImagePath = '../../../assets/imgs/first-stage-img.svg'
  }
  ngOnInit(): void {
  }

}
