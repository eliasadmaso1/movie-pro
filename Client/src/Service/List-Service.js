const getList = async(req,res)=>{
    try {
        return fetch(`http://localhost:3000/movies/List`).then((res) => res.json());
      } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server Error" });
      }
}

const addToList = async(name,image,genres,movieId)=>{
    const options = {
        method: "POST",
        body: JSON.stringify({name,image,genres,movieId}),
        headers: { "Content-Type": "application/json" },
      };
    try {
        return fetch(`http://localhost:3000/movies/List`,options);
      } catch (error) {
        console.log(error);
      }
}

const deleteFromList = async(movieId)=>{
  const options = {
    method: "DELETE",
    body: JSON.stringify({movieId}),
    headers: { "Content-Type": "application/json" },
  };
try {
    return fetch(`http://localhost:3000/movies/List`,options);
  } catch (error) {
    console.log(error);
  }
}




export {getList,addToList,deleteFromList};