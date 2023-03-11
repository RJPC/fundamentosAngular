import { NgModule } from '@angular/core';
import { RouterModule, Routes, /*PreloadAllModules*/ } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
// import { CustomPreloadingStrategyService } from "./services/custom-preloading-strategy.service";

import { QuicklinkStrategy } from "ngx-quicklink";
import { AdminGuard } from './guards/admin.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./website/website.module').then((m) => m.WebsiteModule),
  },
  {
    path: 'cms',
    canActivate: [AdminGuard],
    loadChildren: () => import('./cms/cms.module').then((m) => m.CmsModule),
  },
  {
    path: '**',
    component: NotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: QuicklinkStrategy
  })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
