import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-javascript1',
  templateUrl: './javascript1.component.html',
  styleUrls: ['./javascript1.component.css']
})
export class Javascript1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ischanged() {

    let data ="hemu,raja,sai,rush,raja";
    console.log(data.length)
    console.log(data.split(','))
    console.log(data.substring(5,9))
    console.log(data.slice(5,9))
    console.log(data.indexOf('r'))
    console.log(data.lastIndexOf('r'))
   // data.replaceAll('raja','rajesh')
    console.log(data)

    let data1="hemanth"
    let data2 ="sai"
    let data3 = data1.concat(",",data2)
    console.log(data3)

    let simple ="   hello world!    "
    console.log(simple)
    console.log(simple.trim())
    console.log(data1.charAt(2))

    let data12 ="hellow hemanth";

      console.log(data12[4]) // same as charAt
      console.log(data12.search("hema"))

      let data123 = "hemanth is coding data"
      console.log(data123.includes('coding123'))
      console.log(data123.startsWith('hemanth'))
      console.log(data123.startsWith('is',9))
      console.log(data123.toLowerCase())
      console.log(data123.endsWith('data'))
      console.log(data123.endsWith('is',10))
      console.log(data123.repeat(2))
      // let item='23';
      // console.log(typeof item.toString())



  }

}
