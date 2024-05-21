import { useState } from "react";
import { fetchData, exersiceOption } from "./fetchdata";
import ExerciseCard from "./ExerciseCard";

function Search({ setExercises }) {
    const [search, setSearch] = useState("");
    const [exerciseData, setExerciseData] = useState([]);

    const handleSearch = async () => {
        if (search) {
            const exeData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${search}`, exersiceOption);
            console.log(exeData);
            setExerciseData(exeData);
            setSearch("");
        }
    };

    return (
        <>
            <div className="flex gap-4 items-center justify-center min:h-[50vh] py-10">
                <div className="w-full max-w-lg mb-6">
                    <h1 className="text-5xl font-bold my-4 leading-tight mb-4">SEARCH
                        <span className="text-orange-600"> EXERCISES</span>
                    </h1>
                    <div className="flex gap-2">
                        <input
                            id="q"
                            name="q"
                            className="inline w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-3 leading-5 placeholder-gray-500 focus:border-orange-500 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-orange-500 sm:text-sm"
                            placeholder="back|neck|cardio or bodyparts"
                            type="search"
                            value={search}
                            onChange={(e) => setSearch(e.target.value.toLowerCase())}
                        />
                        <button
                            className="bg-orange-600 text-gray-900 hover:bg-orange-400 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
                            onClick={handleSearch}
                        >
                            Search
                        </button>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {exerciseData.map((exercise) => (
                    <ExerciseCard key={exercise.id} exercise={exercise} />
                ))}
            </div>
        </>
    );
}

export default Search;
