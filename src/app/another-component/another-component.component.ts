import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-another-component',
  templateUrl: './another-component.component.html',
  styleUrls: ['./another-component.component.css']
})
export class AnotherComponentComponent implements OnInit {

  @Input() potato;

  @Output() somethingHappened = new EventEmitter();

  favoritePotato = "Russett";

  constructor() { }

  ngOnInit() {
  }

  buttonClicked(){
    this.somethingHappened.emit();
  }

}
