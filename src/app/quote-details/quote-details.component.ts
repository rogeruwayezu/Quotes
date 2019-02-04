import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

  @Input() quote:Quote;
  @Output() isUpVoted= new EventEmitter<boolean>();
  @Output() isDownVoted= new EventEmitter<boolean>();

  quoteUpVoted(complete:boolean){
    this.isUpVoted.emit(complete);
  }
  
  quoteDownVoted(complete:boolean){
    this.isDownVoted.emit(complete);
  }

  constructor() { }

  ngOnInit() {
  }

}
