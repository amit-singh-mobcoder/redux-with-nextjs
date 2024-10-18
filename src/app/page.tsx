"use client"
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const navigation = (page: string) => {
    router.push(page);
  };

  return (
    <div className="min-h-screen bg-yellow-950 flex flex-col justify-center items-center px-4 md:px-0">
      <h2 className="font-bold text-[30px] md:text-[40px] text-center">
        Learning Redux Toolkit with Next.js{" "}
        <span className="font-extrabold text-[35px] md:text-[45px] text-yellow-200">
          14.2.15
        </span>
      </h2>
      <div className="flex flex-col sm:flex-row gap-4 mt-6">
        <button
          onClick={() => navigation("todos")}
          className="font-bold text-[20px] md:text-[25px] rounded-lg border-4 bg-yellow-100 text-yellow-800 border-yellow-600 px-6 py-3 hover:bg-yellow-200 duration-200"
        >
          Go to Todos
        </button>
        <button
          onClick={() => navigation("counter")}
          className="font-bold text-[20px] md:text-[25px] rounded-lg border-4 bg-yellow-100 text-yellow-800 border-yellow-600 px-6 py-3 hover:bg-yellow-200 duration-200"
        >
          Go to Counter
        </button>
      </div>
    </div>
  );
}
