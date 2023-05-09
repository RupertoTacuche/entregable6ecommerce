import { useEffect } from "react";
import { axiosEcommerce } from "../../utils/configAxios";

const SimilarProducts = ({categoryId}) => {

  useEffect(() =>{
    axiosEcommerce.get(`products?categoryId=${categoryId}`)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err))

  },[])

  return (
    <section>
        <h2>Discover similar items</h2>
        <section>

        </section>
    </section>
  );
};
export default SimilarProducts