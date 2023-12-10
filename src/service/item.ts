import { Car } from "../interfaces/car.interface";
import ItemModel from "../models/item";


//Metodo post para crear un item
const intertCars= async (item: Car)=>{ //recibimos los datos que ya deben estar cumpliento con la interface
    const responseInsert = await ItemModel.create(item);// Insertando los datos en la base de datos
    return responseInsert; //Retornando respuesta
};

const getCars = async ()=>{ //Metodo para llamar a todos los items
    const responseItem = await ItemModel.find({}) // obtener respuesta de los items. Trae todo lo que esta en la db
    return responseItem;
};

const getCar = async (id: string)=>{ //Metodo para llamar a un solo item
    const responseItem = await ItemModel.findOne({_id:id}) //Optenemos por id, lo colocamos como tipo string
    return responseItem;
};

const updateCar = async (id: string, data: Car)=>{ 
    const responseItem = await ItemModel.findByIdAndUpdate//Busca por id y actualiza
    ({ _id: id}, //query(condicion de busqueda)
        data , //datos que vamos a actualizar
        { 
        new: true//nos responda el objeto ya actualizado
        }
    );
    return responseItem;
};

const deleteCar = async (id: string)=>{
    const responseItem = await ItemModel.deleteOne({ _id: id});
    return responseItem;
};

export {intertCars , getCars , getCar , updateCar , deleteCar };