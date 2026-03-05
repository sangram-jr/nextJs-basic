"use client"
import { SessionProvider, signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  return (
    <SessionProvider>
      <AnotherHome/>
    </SessionProvider> 
  );
}


function AnotherHome(){
  const session = useSession();
  return (
     <div>
       {/* If the user is authenticated, show a sign-out button */}
       {session.status === "authenticated" && <button onClick={() => signOut}>Sign Out</button>}

       {/* If the user is unauthenticated, show a sign-in button */}
       {session.status === "unauthenticated" && <button onClick={() => signIn()}>Sign In</button>}
     </div>
   );
}