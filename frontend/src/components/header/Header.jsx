import Logo from "./../../assets/images/logo/logo.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaShoppingBag } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { setIsOpen } from "../../redux/slices/mainSlice";

function Header() {
  const isOpenStatus = useSelector((state) => state.forDev.isOpen);
  const dispatch = useDispatch();
  const handleSetToggleMenuStatus = () => {
    dispatch(setIsOpen(!isOpenStatus));
  };
  return (
    <>
      <header>
        {/* NEW RELEASE ALERT */}
        <section className="bg-black text-white text-center py-2">
          <a className="inline-block" href="#TODO">
            <p className="border-b border-white hover:text-primary">
              NEW THING LAUNCHED!
            </p>
          </a>
        </section>
        {/* RESPONSIVE HEADER LAYOUT */}
        <section className="flex justify-between m-4 xl:mx-10 items-center">
          {/* HAMBURGER BTN */}
          <div className="xl:hidden">
            {isOpenStatus ? (
              <RxHamburgerMenu
                onClick={handleSetToggleMenuStatus}
                className="w-10 h-10 m-1"
              />
            ) : (
              <IoClose
                onClick={handleSetToggleMenuStatus}
                className="w-10 h-10 m-1"
              />
            )}
          </div>

          {/* LOGO */}
          <Link to="">
            <img src={Logo} className="w-44" alt="Logo image" />
          </Link>

          {/* CAROUSEL LINK */}
          <div>
            <Link to="/carousel">
              <FaShoppingBag className="w-9 h-9 m-3" />
            </Link>
          </div>
        </section>
      </header>
    </>
  );
}

export default Header;
