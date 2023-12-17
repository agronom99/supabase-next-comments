// import Image from 'next/image'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers';
import AuthButton from './components/auth-button';

export default async function Home() {
  const supabase = createServerComponentClient({cookies})
  const { data} = await supabase.from("comments").select('*, profiles(*)');
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <AuthButton/>
     <pre>{JSON.stringify(data, null, 2)}</pre>
    </main>
  )
}




