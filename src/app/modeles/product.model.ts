import { CategoryModel } from "./category.model";
interface ProductModel{
    id:number;
    name:string;
    prince_:number;
    description:string;
    category:CategoryModel;
}