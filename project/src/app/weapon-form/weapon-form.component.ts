import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { WeaponService } from '../service/weapon-service/weapon.service';
import { WeaponDTO } from '../../../models';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from '../common/navigation/navigation.component';

@Component({
  selector: 'app-weapon-form',
  standalone: true,
  imports: [ 
    NavigationComponent,
    ReactiveFormsModule,
    CommonModule,
    FormsModule
  ],
  templateUrl: './weapon-form.component.html',
  styleUrl: './weapon-form.component.css'
})
export class WeaponFormComponent  implements OnInit{

    formBuilder = inject(FormBuilder);

    weaponService = inject(WeaponService);

    router  = inject(Router);

    activetedRoute = inject(ActivatedRoute);

    weaponForm = this.formBuilder.group<WeaponDTO>({
      id: 0,
      Name: '',
      Price: 0,
      Manufacturer: '',
      Quantity: 0
    });

    isNewWeapon = true;
    saveWeapon() {
      const weapon = this.weaponForm.value as WeaponDTO;

      if(this.isNewWeapon){
        this.weaponService.create(weapon).subscribe({
          next: (weaponCreated) => {
            // TODO notification
              this.router.navigateByUrl('/weapon');
          },
          error: (err) => {
            // TODO notification
  
            console.error(err);
          }
        });
      }
      else {
        this.weaponService.update(weapon).subscribe({
          next: (weaponCreated) => {
            // TODO notification
              this.router.navigateByUrl('/weapon');
          },
          error: (err) => {
            //TODO notification
  
            console.error(err);
          }
        });

      }

      
    }

    ngOnInit(): void {
      const id = this.activetedRoute.snapshot.params['id'];

      if (id) {
        this.isNewWeapon = false;

        this.weaponService.getOne(id).subscribe({
          next: (weapon) => this.weaponForm.setValue(weapon),
          error: (err) => {
            //TODO notification

            console.error(err)
          }
        });
      }
    }

}
