import { AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { BiBox } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { changeIsShowCart } from "../../store/slices/cart.slices";


const Header = () => {

  const { token } = useSelector((store) => store.userInfo);
  const dispatch = useDispatch();
  const navigate = useNavigate()

const handleOpenCart = () => {

  if (!token) {
    return navigate('/login')
  }
  dispatch(changeIsShowCart())
}

  return (
    <header className=" flex justify-between items-center h-20 border border-b-2">
      <Link to="/" className=" text-2xl w-[60%] flex justify-center hover:translate-x-1 ">
      <img  className="w-[60px]" src="/picture/lospicudazos.png" alt="" />
        <span className="font-extrabold hover:text-red-700">
        E-commerce
        </span>
      </Link>
      <nav className="w-[40%] ">
        <ul className=" flex justify-evenly">
          <li className=" text-2xl">
            <Link to="/login">
              {" "}
              <AiOutlineUser />{" "}
            </Link>
          </li>
          <li className=" text-2xl">
            <Link to="/purchases">
              {" "}
              <BiBox />{" "}
            </Link>
          </li>
          <li className=" text-2xl">
            <button onClick={handleOpenCart}>
              {" "}
              <AiOutlineShoppingCart />{" "}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  )
}
export default Header