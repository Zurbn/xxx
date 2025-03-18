import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MomentumDashboardPageComponent } from './pages/momentum-dashboard-page/momentum-dashboard-page.component';
import { MomentumDetailsPageComponent } from './pages/momentum-details-page/momentum-details-page.component';
import { MomentumAddANewTaskComponent } from './pages/momentum-add-a-new-task/momentum-add-a-new-task.component';
import { MomentumHeaderComponent } from './core/components/momentum-header/momentum-header.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { MomentumStoreModule } from 'src/stores/momentum-store';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [
    AppComponent,
    MomentumDashboardPageComponent,
    MomentumDetailsPageComponent,
    MomentumAddANewTaskComponent,
    MomentumHeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    MomentumStoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
