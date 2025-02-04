"use client"
import Link from "next/link";
import { DataActionDelete } from "./data-action";
import { useActionState } from "react";
import { deleteRecipeAction } from "../_actions/action-delete";
export const DataList = ({data}) => {
    const [state, formAction, pending] = useActionState(deleteRecipeAction, null);
    
    //console.log(data.length)

    if(data.length === 0){
        return (
            <div className="space-y-2">
                <h3 className="text-xl font-bold text-center">My Recipe</h3>
                <div className="grid grid-cols-1 p-2 rounded-lg">
                    <div className="border-2 col-span-1 p-2 h-40 rounded-lg flex justify-center items-center">
                        No recipe avaible
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="space-y-2">
            <h3 className="text-xl font-bold text-center">My Recipe</h3>
            <div className="grid lg:grid-cols-3 overflow-auto max-h-48 gap-3 border-2 p-2 rounded-lg">
                {data.map((recipe,idx) =>{
                return (
                    <div key={recipe._id} className="transition duration-300 ease-in-out hover:rounded-xl lg:hover:scale-110 border-2 col-span-1 p-2 rounded-sm">
                        <div className="border-b-2 flex justify-between">
                            <div>
                                <Link  href={`recipes/${recipe._id}`}>
                                    <h3 className="transition-all duration-300 ease-in-out lg:hover:text-blue-500 lg:hover:tracking-wide text-sm font-bold">{recipe.name}</h3>
                                </Link>
                                <small>{recipe.category}</small>
                            </div>
                            <form action={formAction}>
                                <input name="id" defaultValue={recipe._id} hidden/>
                                <button className="button-action transition duration-300 ease-in-out hover:scale-100">
                                    <DataActionDelete />    
                                </button>
                            </form>
                        </div>
                        <div>{recipe.recipe}</div>
                    </div>
                );
            })}
            </div>
        </div>
    )
}
