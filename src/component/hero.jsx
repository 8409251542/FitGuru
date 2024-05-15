function Hero(){
    return(
        <>
        <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden">
            <div className="absolute inset-0">
                <img src="https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?cs=srgb&dl=pexels-leonardho-1552242.jpg&fm=jpg" alt="Background Image" className="object-cover object-center w-full h-full" />
                <div className="absolute inset-0 bg-black opacity-70"></div>
            </div>
            
            <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
                <h1 className="text-5xl font-bold leading-tight mb-4">FASTER, STRONGER<br/>
                    <span className="text-orange-600">FIGHT</span> TO THE END</h1>
                <a href="#" className="bg-orange-600 text-gray-900 hover:bg-orange-400 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">Get All Exersices</a>
            </div>
        </div>

        </>
    )
}
export default Hero;