import { Component, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dock',
  templateUrl: './dock.component.html',
  styleUrls: ['./dock.component.scss']
})
export class DockComponent implements OnInit {

  constructor(
    public router: Router,
    private activatedRoute: ActivatedRoute
    ) { }


  ngOnInit(): void {
    console.log(this.router.url)
  }

}
