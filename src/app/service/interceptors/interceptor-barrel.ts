import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {TokenInterceptorService} from "@src/app/service/interceptors/token-interceptor.service";
import {LoggingInterceptorService} from "@src/app/service/interceptors/logging-interceptor.service";
import {CustomJsonInterceptor} from "@src/app/service/interceptors/custom-json-interceptor.service";

/**
 * @author : Damika Anuapama Nanayakkara <damikaanupama@gmail.com>
 * @since : 13/06/2021
 **/


/** "Barrel" of Http Interceptors
 Http interceptor providers in outside-in order */

export const httpInterceptorProvider = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }
  // ,{
  //   provide: HTTP_INTERCEPTORS,
  //   useClass: CustomJsonInterceptor,
  //   multi: true
  // }
    ,{
    provide: HTTP_INTERCEPTORS,
    useClass: LoggingInterceptorService,
    multi: true
  }
]
