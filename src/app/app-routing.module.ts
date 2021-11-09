import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'modal-failed',
    loadChildren: () => import('./pages/modal-failed/modal-failed.module').then( m => m.ModalFailedPageModule)
  },
  {
    path: 'modal-accepted',
    loadChildren: () => import('./pages/modal-accepted/modal-accepted.module').then( m => m.ModalAcceptedPageModule)
  },
  {
    path: 'detail',
    loadChildren: () => import('./pages/product-detail/product-detail.module').then( m => m.ProductDetailPageModule)
  },
  {
    path: 'listing',
    loadChildren: () => import('./pages/category-listing/category-listing.module').then( m => m.CategoryListingPageModule)
  },
  {
    path: 'onboarding',
    loadChildren: () => import('./pages/onboarding/onboarding.module').then( m => m.OnboardingPageModule)
  },
  {
    path: 'signin',
    loadChildren: () => import('./pages/signin/signin.module').then( m => m.SigninPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'filters',
    loadChildren: () => import('./pages/filters/filters.module').then( m => m.FiltersPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
