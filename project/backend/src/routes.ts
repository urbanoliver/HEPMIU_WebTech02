import express from "express";

import { WeaponController } from './controller/weapon.controller';


export function getRouter(){

    const router = express.Router();

    const weaponController = new WeaponController();

    router.get('/weapon', weaponController.getAll)
    router.get('/weapon/:id', weaponController.getOne)
    router.post('/weapon', weaponController.create)
    router.put('/weapon', weaponController.update)
    router.delete('/weapon/:id', weaponController.delete)


    return router;
}