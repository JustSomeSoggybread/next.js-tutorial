import { auth, signIn, signOut } from "@/auth";

export default async function GoogleForm() {
    const session = await auth();
    console.log(session);
    const user = session?.user;
    
    return user?(
        <>
            <h1 className="text-2xl">Welcome {user.name}</h1>
            <form action={async () => {
                "use server";
                await signOut();
                }}
            > <button className="p-2 border-2 bg-blue-400">Sign Out</button>
            </form>            
        </>
    )
    :
    (
        <>
        <h1 className="text-xl">You are not authenticated</h1>
        <form action={async() => {
            "use server";
            await signIn("google", {redirectTo: "/secret"});
        }}
        ><button className="p-2 border-2 bg-blue-400">Sign in</button></form>
        </>
    )
}