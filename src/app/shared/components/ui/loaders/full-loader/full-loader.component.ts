import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-full-loader',
  templateUrl: './full-loader.component.html',
  styleUrls: ['./full-loader.component.scss'],
  standalone: true,
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FullLoaderComponent  implements OnInit {

  @Input() splashHiding!: boolean;
  constructor() { }

  ngOnInit() {}

}
