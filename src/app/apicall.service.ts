import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApicallService {

  constructor(private http:HttpClient) { }
  response:any;
  readonly baseurltop = "https://api.github.com/search/repositories?q=stars:>=100000&sort=forks_count&order=desc";
  readonly baseurljava = "https://api.github.com/search/repositories?q=stars:>=150000+language:go&sort=forks_count&order=desc";
  readonly baseurljavascript = "https://api.github.com/search/repositories?q=stars:>=150000+language:go&sort=forks_count&order=desc";
  readonly baseurlpython = "https://api.github.com/search/repositories?q=stars:>=150000+language:go&sort=forks_count&order=desc";
  Mastertable:any[]=[];
  
  getTop(){
    return this.http.get(this.baseurltop).toPromise();
    
  }
  getSlice(i:number, j:number):any[]{
    return this.Mastertable.slice(i,j);
  }
}
