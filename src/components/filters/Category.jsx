import { useEffect, useState } from "react"
import { axiosEcommerce } from "../../utils/configAxios"


export const Category = ({handleClickCategory}) => {

    const [categories, setCategories] = useState([])
    useEffect(()=> {
      axiosEcommerce.get('categories')
      .then(res => setCategories(res.data))
    }, [])

  return (
    <div className="hidden sm:block" >
        <h2 className=" font-bold">Category</h2>
        <ul>
          <li onClick={handleClickCategory} data-category={0}>All</li>
          {
            categories.map(category => (
              <li onClick={handleClickCategory} data-category={category.id} key={category.id}>{category.name}</li>
            ) )
          }
        </ul>

    </div>
  )
}
