import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-calc-result',
  templateUrl: './calc-result.component.html',
  styleUrls: ['./calc-result.component.scss']
})
export class CalcResultComponent implements OnInit, OnDestroy {
  title = 'Result';
  sum = 0;
  constructor(private activatedRoute: ActivatedRoute) {
    console.log('CalcResulctComponent created.');
  }

  ngOnInit() {
    // const x = +this.activatedRoute.snapshot.params.xValue;
    // const y = +this.activatedRoute.snapshot.params.yValue;
    // this.sum = x * y;

    this.activatedRoute.params.subscribe(p => {
      console.log('Url parameters changed.');
      const x = +p.xValue;
      const y = +p.yValue;
      this.sum = x * y;

    });

    this.activatedRoute.queryParams.subscribe(qsp => {
      if (qsp.title) {
        this.title = qsp.title;
      }
    });
  }
  ngOnDestroy() {
    console.log('CalcResultComponent Destroy.');

  }

}
