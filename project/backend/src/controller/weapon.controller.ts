import { Controller } from "./base.controller";
import { AppDataSource } from "../data-source";
import { Weapon } from "../entity/Weapon";

export class WeaponController extends Controller{

    repository = AppDataSource.getRepository(Weapon);
}