import Realm from 'realm';
import HouseSchamas from '../schemas/house';
//Iniciando a conexão com RealmDB
export async function getRealm() {

return Realm.open({ 
    path: 'myrealm',
    //Todos os schemas é colcoado dentro do schema no array
    schema: [HouseSchamas],
    schemaVersion:1,
})

}