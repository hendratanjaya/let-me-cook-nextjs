
"use client"
import Link from "next/link"
import { DataActionDelete, ExitBtn } from "./data-action"
import { useActionState } from "react"
import { deleteRecipeAction } from "../_actions/action-delete"

export const Recipe = ({recipe}) => {

    const [state, formAction, pending] = useActionState(deleteRecipeAction, null);

    return(
        <div className="space-y-2">
            <h3 className="text-xl font-bold text-center">My Recipe</h3>
            <div className="grid grid-cols-1">
                <div key={recipe._id} className="border-2 col-span-1 p-2 h-40 rounded-lg">
                    <div className="border-b-2 flex justify-between">
                        <div className="px-2">
                            <h3 className="text-sm font-bold">{recipe.name}</h3>
                            <small>{recipe.category}</small>
                        </div>   
                        <div className="flex gap-3">
                            <form action={formAction}>
                                <input type="text" name="id" defaultValue={recipe._id} hidden/>
                                <button type="submit" className="button-action">
                                    <DataActionDelete /> 
                                </button>
                            </form>
                            <Link href={"/"}>
                                <ExitBtn />
                            </Link>
                        </div>
                    </div>
                    <div className="p-2">{recipe.recipe}</div>
                </div>
            </div>
        </div>
    )
}