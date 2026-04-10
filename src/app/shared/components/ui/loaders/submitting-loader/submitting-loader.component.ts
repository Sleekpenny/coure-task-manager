import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-submitting-loader',
  templateUrl: './submitting-loader.component.html',
  styleUrls: ['./submitting-loader.component.scss'],
  standalone: true,
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SubmittingLoaderComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
