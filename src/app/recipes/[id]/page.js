

import { Recipe } from "@/app/_components/data-recipe";
import { FormEdit } from "@/app/_components/form-edit";


export default async function Home({params}){

    const {id} = await params;
    const res = await fetch(`https://v1.appbackend.io/v1/rows/VevHTaXM6iJf/${id}`);

    const recipe = await res.json();

    return (
        <div className="max-w-4xl m-auto">
            <div className="w-full text-center pt-10">
                <h3 className="text-4xl font-bold"> Let Me Cook</h3>
            </div>
            <div className="py-12 grid grid-cols-1 lg:grid-cols-12 gap-10 p-4">
                <div className="lg:col-span-7">
                    <Recipe recipe={recipe} />
                </div>
                <aside className="lg:col-span-5">
                    <FormEdit recipe={recipe}/>
                </aside>
            </div>
        </div>
    )

}