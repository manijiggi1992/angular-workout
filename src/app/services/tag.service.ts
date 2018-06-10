import { Injectable } from '@angular/core';
import { Http,Headers} from '@angular/http';
import { Observable } from 'rxjs/Observable'; 
import '../rxjs-extensions';


@Injectable()
export class TagService{
    private _serviceUrl = "http://localhost:3000/tagList";

    constructor(private http:Http){

    }

    getTags():Observable<string[]>{
        let url = this._serviceUrl;
        return this.http.get(url)
            .map(result => result.json());

    }
}