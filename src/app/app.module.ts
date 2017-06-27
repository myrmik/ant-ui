import "hammerjs";
import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MomentModule} from 'angular2-moment';
import {MdCardModule, MdButtonModule, MdIconModule, MdToolbarModule, MdDialogModule} from '@angular/material';
import {HttpModule}    from '@angular/http';
import {AppComponent} from "./app.component";
import {RuleService} from "./rules/shared/rule.service";
import {NotificationService} from "./rules/shared/notification.service";
import {RuleHistoryComponent} from "./rules/rule-history/rule-history.component";
import {RulesComponent} from "./rules/rules.component";

@NgModule({
  entryComponents: [
    RuleHistoryComponent
  ],
  declarations: [
    AppComponent,
    RulesComponent,
    RuleHistoryComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    BrowserAnimationsModule,

    MomentModule,

    MdCardModule,
    MdButtonModule,
    MdIconModule,
    MdToolbarModule,
    MdDialogModule,
  ],
  providers: [
    RuleService,
    NotificationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
