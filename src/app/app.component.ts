import { Component, OnInit } from '@angular/core';
import { IdentityConfigService } from './identity-config.service';
import {Identity} from './identity'; 


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app works!';
  identities: Identity[] = [];

  constructor(private identityConfigService: IdentityConfigService){}
  ngOnInit() { 
    this.title = 'on init works!';
    this.identities.push(new Identity("namee"))

    this.identityConfigService.getIdentities()
    .then(i => this.identities = i);
    
  }
}
