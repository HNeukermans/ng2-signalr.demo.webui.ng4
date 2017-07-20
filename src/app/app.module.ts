import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Http, HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared';

import { SignalRModule, SignalRConfiguration, ConnectionTransports } from 'ng2-signalr';
import { TabsModule } from 'ngx-bootstrap';


export function getSignalrConfiguration() : SignalRConfiguration {
	let signalrConfiguration = new SignalRConfiguration();
	signalrConfiguration.hubName = 'Ng2SignalRHub';
	signalrConfiguration.logging = true;
	signalrConfiguration.url =   'http://ng2-signalr-backend.azurewebsites.net/'; //'http://localhost:10772/';//
    signalrConfiguration.qs = { user: 'donald' };
    signalrConfiguration.transport = ConnectionTransports.longPolling;
	return signalrConfiguration;
}


// AoT requires an exported function for factories
export function HttpLoaderFactory(http: Http) {
//     for development
//     return new TranslateHttpLoader(http, '/start-angular/SB-Admin-BS4-Angular-4/master/dist/assets/i18n/', '.json');
    return new TranslateHttpLoader(http, '/assets/i18n/', '.json');
}
@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpModule,
        AppRoutingModule,
        SignalRModule.forRoot(getSignalrConfiguration),
        TabsModule.forRoot(),
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [Http]
            }
        })
    ],
    providers: [AuthGuard],
    bootstrap: [AppComponent]
})
export class AppModule {
}
