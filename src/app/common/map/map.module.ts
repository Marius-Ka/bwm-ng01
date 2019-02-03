import { NgModule } from '@angular/core';
import { MapComponent } from './map.component';
import { AgmCoreModule } from '@agm/core';

import { MapService } from './map.service';

@NgModule({
  declarations: [
    MapComponent
  ],
  exports: [
      MapComponent
  ],
  imports: [
    AgmCoreModule.forRoot({
        apiKey: 'AIzaSyDODEQWg4-0iO-xIp7IqvHNsLqFfRszBaw'
      })
  ],
  providers: [
      MapService
  ]
})
export class MapModule { }
