export const exersiceOption={
    method: 'GET',
    // url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/back',
    // params: {limit: '10'},
    headers: {
      'X-RapidAPI-Key': 'f5aec54075mshf780f5a6cd00b0bp1b1557jsn6f3f94fc3f6a',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
};
export const fetchData=async (url,option)=>{
    const respose=await fetch(url,option);
    const result = await respose.json();

    return result;
}