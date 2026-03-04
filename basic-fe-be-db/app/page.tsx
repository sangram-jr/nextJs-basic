import Link from "next/link";


export default function Home() {
  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <div className="text-2xl">
        <h1>Todo Application</h1>
      </div>
      <div className="flex flex-col">
        <Link className="m-2 p-2 border" href="/signup">signUp</Link>
        <Link className="m-2 p-2 border" href="/signin">signIn</Link>
      </div>
    </div>
  );
}
