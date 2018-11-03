import { Component, OnInit } from '@angular/core';
import {ArrayType} from '@angular/compiler';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-form-body',
  templateUrl: './form-body.component.html',
  styleUrls: ['./form-body.component.css']
})
export class FormBodyComponent implements OnInit {



  constructor(private sanitizer: DomSanitizer) { }


  dataList = [];
  dataid = [];
  i = 0;


  ngOnInit() {
    this.dataList = [];
  }
  Onchange(filed) {

    let inp = '';
    if (filed === 1) {
      inp = '<div class="col l10 m10 s10 input-field" style="margin-left: 50px;margin-bottom: 0px" >' +
        '<input  type="text" id="' + this.i + '">' +
        '<label for="' + this.i + '">Untitled Question</label>' +
        '</div>' +
        '<div class="col l10 m10 s10 disabled" style="margin-left: 50px;margin-top: 0px;margin-bottom: 0px">' +
        '<label class="disabled">Short answer text [ TestBox ]</label>' +
        '</div>';

    } else if (filed === 2) {
      inp = '<div class="col l10 m10 s10 input-field" style="margin-left: 50px;margin-bottom: 0px" >' +
        '<input  type="text" id="' + this.i + '">' +
        '<label for="' + this.i + '">Untitled Question</label>' +
        '</div>' +
        '<div class="col l10 m10 s10 disabled" style="margin-left: 50px;margin-top: 0px;margin-bottom: 0px">' +
        '<label class="disabled">Long answer text [ TextArea ]</label>' +
        '</div>';
    } else {
      console.log('filed', filed);
    }
    this.dataid.push(this.i);
    this.dataList.push(this.sanitizer.bypassSecurityTrustHtml(inp));
    this.i++;
  }


  Ondelete() {
    this.dataList.pop();
    this.dataid.pop();
    this.i--;
  }

  Ondeleteid(id) {
      this.dataid[id] = '-9';
   }

}
