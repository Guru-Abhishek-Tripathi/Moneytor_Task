import { Component } from '@angular/core';
import { ApicallService } from './apicall.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Moneytor';
  response:any;
  i:number = 1;
  startI=0;
  endI=4;

  constructor(public service: ApicallService){}
  Mastertableslice:any[]=[];

  ngOnInit(): void {
    this.service.getTop().then(res=>{
      this.response = res;
      console.log(this.response)
      this.service.Mastertable  = this.response.items;
      this.Mastertableslice = this.service.getSlice(this.startI,this.endI);
      console.log(this.Mastertableslice);
    });;
  }

  prev(){
    if(this.startI - 4 >= 0)
    {
      this.endI = this.startI;
      this.startI = this.startI-4;
      this.i--;
      this.Mastertableslice = this.service.getSlice(this.startI,this.endI);
    }
  }

  next(){
    if(this.endI+4<=this.service.Mastertable.length)
    {
      this.startI = this.endI;
      this.endI = this.endI+4;
      this.i++;
      this.Mastertableslice = this.service.getSlice(this.startI,this.endI);
    }
  }

}
