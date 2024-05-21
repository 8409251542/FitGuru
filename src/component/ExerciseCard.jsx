function ExerciseCard({ exercise }) {
    return (
        <div className="border rounded-lg p-4 shadow-md">
            <img src={exercise.gifUrl} alt="" />
            <h2 className="text-2xl font-bold mb-2">{exercise.name.toUpperCase()}</h2>
            <p className="text-gray-700">Body Part: {exercise.bodyPart}</p>
            <p className="text-gray-700">Target: {exercise.target}</p>
            <p className="text-gray-700">Equipment: {exercise.equipment}</p>
        </div>
    );
}

export default ExerciseCard;
