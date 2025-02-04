"use server"

import { revalidatePath } from "next/cache"
import { headers } from "next/headers";

export async function editRecipeAction(_, formData) {

    const _id = formData.get("id");
    const name = formData.get("title");
    const recipe = formData.get("recipe");
    const category = formData.get("category");

    
    await fetch("https://v1.appbackend.io/v1/rows/VevHTaXM6iJf", {
        
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({_id,name,category,recipe})
    })

    revalidatePath(`/recipes/${_id}`);
    
}