import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-title',
  templateUrl: './header-title.component.html',
  styleUrls: ['./header-title.component.scss'],
  standalone: true,
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderTitleComponent  implements OnInit {
  @Input() title!:string;
  @Input() subTitle!:string;

  constructor() { }

  ngOnInit() {}

}
