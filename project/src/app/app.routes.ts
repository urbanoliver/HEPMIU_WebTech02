import { Routes } from '@angular/router';
import { WeaponFormComponent } from './weapon-form/weapon-form.component';
import { WeaponListComponent } from './weapon-list/weapon-list.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [

    { 
        path: '', 
        component: LoginComponent 

    }
    ,
    {
        path: 'home',
        component: HomeComponent
    },

    {
        path: 'weapon',
        component: WeaponListComponent
    },

    {
        path:'add-weapon',
        component: WeaponFormComponent
    },

    {
        path:'edit-weapon/:id',
        component: WeaponFormComponent
    }
];
