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

    this.identityConfigService.getIdentities()
    .then(i => this.identities = i);
    
  }

  onDeleteIdentity(i: Identity){
    //todo -i item has to be removed from array here
    this.identityConfigService.delete(i)
      .then(i => console.log("deleted"))
  }

  onAddIdentity() {
    this.identities.push(new Identity())
  }

  onSaveIdentity(i: Identity) {
      if(i._links.self.href === "new"){
        this.identityConfigService.save(i)
          .then(i => console.log("saved")
          //this.identities[idx] = i todo -i replace mechanism
          );
      } else {
        this.identityConfigService.update(i)
          .then(i => console.log("updated")
            //i => this.identities[idx] = i todo -i replace mechanism
          );
      }
    }
}
