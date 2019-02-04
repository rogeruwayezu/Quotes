import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {


  quotes = [
    new Quote(1,'Watch Finding Nemo', 'Andrew', 'Roger', 0, 0),
    new Quote(2,'Buy Cookies', 'Jefferson', 'Cynthia', 0, 0),
    new Quote(3, 'Get new Phone Case', 'Chinua Achebe', 'Aristote', 0, 0),
    new Quote(4, 'Get Dog Food', 'Push T', 'Saphani', 0, 0),
    new Quote(5, 'Solve math homework', 'Teacher', 'Kwasi', 0, 0),
    new Quote(6, 'Plot my world domination plan', 'Luc', 'Unknown', 0, 0),
]

toogleDetails(index){
  this.quotes[index].showDescription = !this.quotes[index].showDescription;
}

addNewQuote(quote){
  let quoteLength = this.quotes.length;
  quote.id=quoteLength+1;
  this.quotes.push(quote)

}
upVote(isUpVoted, index){
  if (isUpVoted){
   let quote = this.quotes[index];
    let quoteUpVotes = quote.upvote
    quoteUpVotes+=1
    this.quotes[index].upvote = quoteUpVotes

  }

}

downVote(isDownVoted, index){
  if (isDownVoted){
   let quote = this.quotes[index];
    let quoteDownVotes = quote.downvote
    quoteDownVotes-=1
    this.quotes[index].downvote = quoteDownVotes
  }

}


  constructor() { }

  ngOnInit() {
  }

}
