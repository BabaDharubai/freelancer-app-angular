import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  map, Observable } from 'rxjs';
import { Freelancer } from '../models/freelancer';
import { environment } from 'src/environments/environment';

type dataResponse={
  columns:string[],
  data:Freelancer[]
}

@Injectable({
  providedIn: 'root'
})
export class FreelancerService {

  constructor(private _http:HttpClient) { }

  private _getUrl=environment.getUrl;
  private _cudUrl=environment.cudUrl;

  getFreelacners=():Observable<dataResponse>=>{
    return this._http.get<Freelancer[]>(this._getUrl.concat("all")).pipe(
      map((response)=>{
        return {
          columns:Object.keys(response[0]),
          data:response
        }
      })
    );
  }

  getById=(id:string):Observable<Freelancer>=>{
    let url=this._getUrl+id;
    return this._http.get<Freelancer>(url);
  }

  saveFreelancer=(freelacner:Freelancer):Observable<Freelancer>=>{
    return this._http.post<Freelancer>(this._cudUrl,freelacner);
  }

  updateFreelancer=(freelancer:Freelancer):Observable<Freelancer>=>{
    return this._http.put<Freelancer>(this._cudUrl,freelancer);
  }

  deleteFreelancer=(freelancerId:string):Observable<Freelancer>=>{

    return this._http.delete<Freelancer>(this._cudUrl.concat(freelancerId));
  }

  getFreelancerPage=(key:string,sort:boolean,pageIndex:number,records:number):Observable<Freelancer[]>=>{
    return this._http.get<Freelancer[]>(`${this._getUrl}${key}/${sort}/${pageIndex}/${records}`);
  }
}
