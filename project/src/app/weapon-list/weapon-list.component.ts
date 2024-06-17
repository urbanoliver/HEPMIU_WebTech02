import { Component, OnInit, inject, signal } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { WeaponDTO } from '../../../models';
import { WeaponService } from '../service/weapon-service/weapon.service';
import { AsyncPipe, CommonModule, CurrencyPipe, UpperCasePipe } from '@angular/common';
import { SearchPipe } from '../pipe/search.pipe';
import { NavigationComponent } from '../common/navigation/navigation.component';


@Component({
  selector: 'app-weapon-list',
  standalone: true,
  imports: [
    NavigationComponent,
    AsyncPipe,
    CommonModule,
    RouterLink,
    SearchPipe,
    UpperCasePipe,
    CurrencyPipe
  ],
  templateUrl: './weapon-list.component.html',
  styleUrl: './weapon-list.component.css'
})
export class WeaponListComponent implements OnInit {

  weaponService = inject(WeaponService);

  router = inject(Router);

  weapons: WeaponDTO[] = [];

  list$ = this.weaponService.getAll();
  
  filterText = signal<string>('');

  ngOnInit(): void {
    this.weaponService.getAll().subscribe({
      next: (weapons) => this.weapons = weapons,
      error: (err) => console.error(err)
    });
  }


  goToWeaponForm(id:number) {
      this.router.navigate([ 'edit-weapon', id ]);
  }



  deleteWeapon(weapon: WeaponDTO) {
      this.weaponService.delete(weapon.id).subscribe({
        next: () => {
          const index = this.weapons.indexOf(weapon);
          if (index > -1){
            this.weapons.splice(index, 1);

          }

        },
        error: (err) => {
          //TODO notification
          console.error(err);
        }
      });
  }

}
