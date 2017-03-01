import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Identity } from './identity';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class IdentityConfigService {
  private identitiesUrl = 'http://localhost:8080/identity'; 

  constructor(private http: Http) { }

  getIdentities(): Promise<Identity[]> {
    return this.http.get(this.identitiesUrl)
               .toPromise()
               .then(response => response.json()._embedded.identity as Identity[])
               .catch(this.handleError);
  }

  update(i: Identity): Promise<Identity> {
    return this.http.put(i._links.self.href, i)
               .toPromise()
               .then(response => response.json() as Identity)
               .catch(this.handleError);
  }

  save(i: Identity): Promise<Identity> {
      return this.http.post(this.identitiesUrl, i)
               .toPromise()
               .then(response => response.json() as Identity)
               .catch(this.handleError);
  }

  delete(i: Identity): Promise<Identity> {
      return this.http.delete(i._links.self.href)
               .toPromise()
               .catch(this.handleError);
  }

    private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
