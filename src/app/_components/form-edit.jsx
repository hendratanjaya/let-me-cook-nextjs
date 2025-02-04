"use client"
import { useActionState } from "react";
import { editRecipeAction } from "../_actions/action-edit";

export const FormEdit = ({recipe}) => {

    const [state, formAction,pending] = useActionState(editRecipeAction, null);

    return (
        <div className="space-y-2 w-full">
            <h3 className="text-lg font-bold text-center">Edit Recipe</h3>
            <form action={formAction} className="space-y-4">
                <input type="text" required className="p-2" defaultValue={recipe._id} name="id" hidden/>
                <input type="text" required className="p-2" placeholder="Input product name" defaultValue={recipe.name} name="title" />
                <textarea className="p-2" defaultValue={recipe.recipe} name="recipe" placeholder="Input product recipe"/>
                <select name="category" defaultValue={recipe.category} >
                    <option value="Food" >Food</option> 
                    <option value="Beverage">Beverage</option>
                </select>
                <button className="button-edit" disabled={pending} >{pending ? "Saving..." : "Edit"}</button>
            </form>
        </div>
    )

}