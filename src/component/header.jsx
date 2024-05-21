function Header(){
    return(
        <>
            <div className="bg-black w-full h-18 py-4 flex justify-around text-white">
                <h2 className="font-extrabold text-2xl">FItGuru</h2>
                <ul className="flex gap-4">
                    <li className="cursor-pointer">Home</li>
                    <li className="cursor-pointer">Exercise</li>
                </ul>
            </div>

        </>
    )
}
export default Header;
