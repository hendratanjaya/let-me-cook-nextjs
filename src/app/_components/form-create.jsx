"use client"
import { useActionState } from "react";
import { createRecipeAction } from "../_actions/action-create";



export const FormCreate = () => {

    const [state, formAction,pending] = useActionState(createRecipeAction, null);

    return (
        <div className="space-y-2">
            <h3 className="text-lg font-bold text-center">Create Recipe</h3>
            <form action={formAction} className="space-y-4">
                <input type="text" required className="p-2" placeholder="Input product name" name="title" />
                <textarea className="p-2" required name="recipe" placeholder="Input product recipe"/>
                <select name="category">
                    <option value="Food" >Food</option> 
                    <option value="Beverage" >Beverage</option>
                </select>
                <button className="button-create" disabled={pending} >{pending ? "Saving..." : "Create"}</button>
            </form>
        </div>
    )

}