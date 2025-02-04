"use server"

import { revalidatePath } from "next/cache";

export async function createRecipeAction(_, formData) {
    
    const name = formData.get("title");
    const recipe = formData.get("recipe");
    const category = formData.get("category");

    await fetch("https://v1.appbackend.io/v1/rows/VevHTaXM6iJf", {
        
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify([{name,recipe,category}])
    })

    revalidatePath("/");

}