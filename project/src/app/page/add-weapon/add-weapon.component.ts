import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, Input, OnInit, inject, numberAttribute } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WeaponService } from '../../service/weapon-service/weapon.service';
import { Observable, of } from 'rxjs';
import { Weapon } from '../../model/weapon';
import { Router } from '@angular/router';
import { NavigationComponent } from '../../common/navigation/navigation.component';

@Component({
  selector: 'app-add-weapon',
  standalone: true,
  imports: [
    NavigationComponent,
    AsyncPipe,
    FormsModule,
    CommonModule,
  ],
  templateUrl: './add-weapon.component.html',
  styleUrl: './add-weapon.component.css'
})
export class AddWeaponComponent implements OnInit {

  @Input({ required: true, transform: numberAttribute})

  weaponService = inject(WeaponService);

  weapon$: Observable<Weapon> = of(new Weapon());

  router = inject(Router);

  ngOnInit(): void {

  
  }

  onCreate(weapon: Weapon): void{
  
    this.weaponService.create(weapon).subscribe(
      (response) => {
        console.log('Weapon created successfully:', response);
        
        this.router.navigateByUrl('/home');
      },
      (error) => {
        console.error('Error creating weapon:', error);
        
      }
    );

  }

}
