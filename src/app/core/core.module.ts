import { NgModule, Optional, SkipSelf } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { LogService } from './services/logger.service';

/**
 * From the Angular style guide: The purpose of this module is for collecting numerous,
 * auxiliary, single-use classes inside a core module to simplify the apparent
 * structure of a feature module.
*/

@NgModule({
   declarations: [
      /*Add components here*/
   ],
   imports: [
      SharedModule
   ],
   providers: [
      LogService
   ]
})
export class CoreModule {
   // @Optional specifies that parentModule is an optional parameter. @SkipSelf makes the
   // dependency resolution start from the parent injector.
   constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
      this.throwIfAlreadyLoaded(parentModule);
   }

   throwIfAlreadyLoaded(parentModule: any) {
      if (parentModule) {
         throw new Error(`CoreModule has already been loaded.`);
      }
   }
}
