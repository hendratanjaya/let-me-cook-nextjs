"use server"


import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function deleteRecipeAction(_, formData) {
    
    const id = formData.get("id");
    
    await fetch("https://v1.appbackend.io/v1/rows/VevHTaXM6iJf", {

        method: "DELETE",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify([id])

    })
    revalidatePath("/")
    redirect("/")

}
