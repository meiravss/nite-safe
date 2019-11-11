import { Component, OnInit } from '@angular/core';

import { ProofreadingSystemService } from './proofreading-system.service';

@Component({
  selector: 'app-proofreading-system',
  template: `
    <div class="row">
      <div class="col-xs-10 text-right">
        <h3>מערכת הגהות... תיבנה בעתיד</h3>
      </div>
    </div>
  `,
  styleUrls: ['./proofreading-system.component.css']
})
export class ProofreadingSystemComponent implements OnInit {

  constructor(private slService: ProofreadingSystemService) { }

  ngOnInit() {
  }
}
