
const getList = async(req,res)=>{
    try {
        return fetch(`http://localhost:3000/movies/List`).then((res) => res.json());
      } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server Error" });
      }
}

const addToList = async(name,summary,image,genres,url)=>{
    const options = {
        method: "POST",
        body: JSON.stringify({name,summary,image,genres,url}),
        headers: { "Content-Type": "application/json" },
      };
    try {
        return fetch(`http://localhost:3000/movies/List`,options);
      } catch (error) {
        console.log(error);
      }
}

export {getList,addToList};