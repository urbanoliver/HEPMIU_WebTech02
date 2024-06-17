import { Component, inject, signal } from '@angular/core';
import { WeaponService } from '../../service/weapon-service/weapon.service';
import { AsyncPipe, CommonModule, CurrencyPipe, UpperCasePipe } from '@angular/common';
import { Weapon } from '../../model/weapon';
import { Router, RouterLink } from '@angular/router';
import { SearchPipe } from '../../pipe/search.pipe';
import { NavigationComponent } from '../../common/navigation/navigation.component';

@Component({
  selector: 'app-weapon',
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
  templateUrl: './weapon.component.html',
  styleUrl: './weapon.component.css'
})
export class WeaponComponent {

  weaponService = inject(WeaponService);

  router = inject(Router);

  list$ = this.weaponService.getAll();

  filterText = signal<string>('');

  onDelete(weapon: Weapon): void{
    if(confirm('Are you sure?')){
      this.weaponService.delete(weapon.id).subscribe(
        () => this.list$ = this.weaponService.getAll()
        
      );
      this.router.navigateByUrl('/home');
    }
  }
}
