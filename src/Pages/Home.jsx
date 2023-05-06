import axios from "axios"
import { useEffect, useState } from "react"

const Home = () => {

const [categories, setCategories] = useState([])

useEffect(() => {
  const URL = "https://e-commerce-api-v2.academlo.tech/api/v1/categories"
  axios.get(URL)
   .then((res) => setCategories(res.data))
   .catch((err) => console.log(err))
},[])

  return (
  <main> 
    <form>
      <div>
        <input type="text" placeholder="What are you looking for ?"/>
        <button> <i className='bx bx-search'></i></button>
      </div>

      <ul>
        <li>All</li>
        {
          categories.map(category => <li>{category.name}</li>)
        }
      </ul>
    </form>
  </main>
  )
}
export default Home