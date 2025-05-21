export default function Home() {
  const days = Array.from({ length: 10 }, (_, i) => i + 1);
  
  return (
    <div>
      <div className="h-screen mx-auto max-w-screen-lg justify-center items-center flex flex-col">
        {days.map((day) => (
          <a key={day} href={`/day/${day}`} className="p-2 my-1 hover:underline bg-purple-400 px-5 py-2 text-center rounded-2xl text-white font-medium">
            Day {day}
          </a>
        ))}
      </div>
    </div>
  )
}