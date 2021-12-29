const addUser = async(firstName,lastName,userName,email,password)=>{
    const options = {
        method: "POST",
        body: JSON.stringify({firstName,lastName,userName,email,password}),
        headers: { "Content-Type": "application/json" },
      };
    try {
        return fetch(`http://localhost:3000/users/registration`,options);
      } catch (error) {
        console.log(error);
      }
}

const logedUser = async(email,password)=>{
  const options = {
    method: "POST",
    body: JSON.stringify({email,password}),
    headers: { "Content-Type": "application/json" },
  };
  try {
    return fetch(`http://localhost:3000/users/login`,options);
  } catch (error) {
    console.log(error);
  }
}

export {addUser,logedUser};