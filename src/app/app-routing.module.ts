import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MealViewComponent } from './meal/meal-view/meal-view.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/menu',
        pathMatch: 'full'
    },
    {
        path: 'menu',
        component: MealViewComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
