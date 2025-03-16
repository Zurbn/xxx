import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MomentumDashboardPageComponent } from './pages/momentum-dashboard-page/momentum-dashboard-page.component';
import { MomentumDetailsPageComponent } from './pages/momentum-details-page/momentum-details-page.component';
import { MomentumAddANewTaskComponent } from './pages/momentum-add-a-new-task/momentum-add-a-new-task.component';
import { MomentumHeaderComponent } from './core/components/momentum-header/momentum-header.component';
import { MomentumTaskColumnComponent } from './core/components/momentum-task-column/momentum-task-column.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './modules/material.module';
import { HttpClientModule } from '@angular/common/http';

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
    MomentumTaskColumnComponent,
    BrowserAnimationsModule,
    MatButtonModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
