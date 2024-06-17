import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, Input, OnInit, inject, numberAttribute } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WeaponService } from '../../service/weapon-service/weapon.service';
import { Observable, of } from 'rxjs';
import { Weapon } from '../../model/weapon';
import { Router } from '@angular/router';
import { NavigationComponent } from '../../common/navigation/navigation.component';

@Component({
  selector: 'app-weapon-edit',
  standalone: true,
  imports: [
    NavigationComponent,
    CommonModule,
    AsyncPipe,
    FormsModule,

  ],
  templateUrl: './weapon-edit.component.html',
  styleUrl: './weapon-edit.component.css'
})
export class WeaponEditComponent implements OnInit{

  @Input({ required: true, transform: numberAttribute}) id: number = 0;

  weaponService = inject(WeaponService);

  weapon$: Observable<Weapon> = of(new Weapon());

  router = inject(Router);

  ngOnInit(): void {
    if(this.id){
      
      this.weapon$ = this.weaponService.getOne(this.id);
    }

  }

  onUpdate(weapon: Weapon): void{

    if(this.id){
      this.weaponService.update(weapon).subscribe(
        () => this.router.navigateByUrl('/home')
      );
    } 

  }
}
