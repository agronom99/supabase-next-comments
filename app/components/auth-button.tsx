"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";


const AuthButton = () => {
  const supabase = createClientComponentClient();
  const router = useRouter();

  const onLogIn = () => {
    supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: "http://localhost:3000/auth/callback",
      },
    });
  };

  const onLogOut = async () => {
    await supabase.auth.signOut();
    router.refresh();
  };

  return (
    <div className=" flex flex-col">
      <button className=" bg-orange-500 m-3 p-2 rounded-xl hover:bg-red-500 font-bold text-white" onClick={onLogIn}>Log in</button>
      <button className=" bg-orange-500 m-3 p-2 rounded-xl hover:bg-red-500 font-bold text-white" onClick={onLogOut}>Log out</button>
    </div>
  );
};

export default AuthButton;