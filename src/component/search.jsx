function Search(){
    return(
        <>
            <div className="flex gap-4 items-center justify-center h-32 py-10">
            <div className="w-full max-w-lg  mb-6">
            <h1 className="text-5xl font-bold my-4 leading-tight mb-4">SEARCH
                    <span className="text-orange-600"> EXERSICES</span></h1>
            <form className="mt-5 sm:flex sm:items-center gap-2">
                <input id="q" name="q" className="inline w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-3 leading-5 placeholder-gray-500 focus:border-orange-500 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-orange-500 sm:text-sm" placeholder="Keyword" type="search" value=""/><button type="submit" className="bg-orange-600 text-gray-900 hover:bg-orange-400 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">Search</button>
            </form>
            </div>
            </div>
        
        </>
    )
}
export default Search;