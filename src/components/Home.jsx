
const Home = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4">
      <div className="text-center space-y-4 max-w-xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
          Hey there, welcome to <span className="text-yellow-300">OYI.AI</span> Home page
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl">
          Click on the <span className="font-semibold">Chat</span> icon to ask questions about <span className="font-semibold">Uba bank</span>.
        </p>
      </div>
    </div>
  )
}

export default Home
