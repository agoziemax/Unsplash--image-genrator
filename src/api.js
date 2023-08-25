import axios from "axios";


const searchImages = async (term) =>{
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID xt9NTj_xPDgeck6g3J8In6ok1EL7Y0-CTI6E60R0kcQ',
    },
    params: {
      query: term,
    },
    
  });

  return response.data.results;
}

export default searchImages