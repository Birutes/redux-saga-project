export const fetchData = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/albums");
      const data = await response.json();
      return data;
    } catch (e) {
      console.log(e);
    }
}; 

export const createPost = async (postData) => {
  try{
    const fetchResponse = await fetch('https://jsonplaceholder.typicode.com/albums', {
      method: 'POST',
      body: JSON.stringify(postData),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })  
    const data = await fetchResponse.json();
    return data;
  } catch (e) {
    console.log(e);
  }
}; 