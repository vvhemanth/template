import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-javascript',
  templateUrl: './javascript.component.html',
  styleUrls: ['./javascript.component.css']
})
export class JavascriptComponent implements OnInit {

  constructor() { }

public data ;
  ngOnInit() {
    console.log("came")
  //  document.getElementsByClassName('some1')[0].innerHTML === '\javascript works!\n'
 //  console.log(document.getElementsByClassName as <HTMLElement>('.some1').innerHTML)
  }

  isclicked() {
    document.getElementById('sub').innerHTML='<u>please submit<u>';
    document.getElementsByClassName('some1')[0].innerHTML = '<ul><li> hemanth</li><li> sai123</li></ul>'
  console.log(document.getElementById('item').children[0].children[0].children[0].innerHTML)

 // document.getElementById('item1').parentElement.innerHTML = 'cool buddy';

  console.log(document.querySelectorAll('button span p a')[0].innerHTML)
  console.log(document.querySelectorAll('button span .som a')[0].innerHTML)

 this.data = document.querySelectorAll('button span .som a')[0].innerHTML;
  // document.getElementById('item1').parentElement.innerHTML = 'cool buddy';
  
  
  }

}
