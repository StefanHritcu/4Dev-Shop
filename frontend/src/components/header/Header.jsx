import Logo from "./../../assets/images/logo/logo.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaShoppingBag } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { setIsOpen } from "../../redux/slices/mainSlice";
import { CiUser } from "react-icons/ci";
import ItalyIcon from "./../../assets/images/italy.png";
import { FiBox } from "react-icons/fi";
import { TbArrowBack } from "react-icons/tb";
import { FaStar } from "react-icons/fa6";

function Header() {
  const isOpenStatus = useSelector((state) => state.forDev.isOpen);
  const dispatch = useDispatch();
  const handleSetToggleMenuStatus = () => {
    dispatch(setIsOpen(!isOpenStatus));
  };

  const isLogged = useSelector((state) => state.forDev.isLogged);
  const numberArticlesSelected = useSelector(
    (state) => state.forDev.articlesSelected
  );

  const location = useLocation();

  return (
    <>
      <header>
        <div>
          {/* NEW RELEASE ALERT */}
          <section className="bg-black text-white text-center py-2">
            <a
              className="inline-block"
              href="#TODO"
              aria-label="New release announcement"
            >
              <p className="border-b border-white hover:text-primary">
                NEW THING LAUNCHED!
              </p>
            </a>
          </section>

          {/* RESPONSIVE HEADER LAYOUT */}
          <section className="flex justify-between m-4 xl:mx-10 items-center">
            {/* HAMBURGER BTN */}
            <nav className="xl:hidden" aria-label="Main navigation">
              <button
                onClick={handleSetToggleMenuStatus}
                aria-label={isOpenStatus ? "Close menu" : "Open menu"}
              >
                {isOpenStatus ? (
                  <RxHamburgerMenu className="w-10 h-10 m-1" />
                ) : (
                  <IoClose className="w-10 h-10 m-1" />
                )}
              </button>
            </nav>

            {/* LOGO */}
            <Link to="">
              <img src={Logo} className="w-44" alt="Logo image" />
            </Link>

            {/* USER & SHOPPING CART LINKS */}
            <div className="relative flex justify-center items-center">
              <Link
                to={isLogged ? "/profile" : "/login"}
                aria-label={isLogged ? "Go to profile" : "Go to login"}
              >
                <CiUser className="w-9 h-9 m-3" />
              </Link>

              <Link to="/carousel" aria-label="Shopping cart">
                <FaShoppingBag className="w-9 h-9 m-3" />
              </Link>

              {/* ARTICLES SELECTED BADGE */}
              <div
                className="absolute ml-24 top-2 bg-red-600 rounded-full w-7 h-7 flex items-center justify-center"
                aria-label="Number of selected articles"
              >
                <span className="text-white text-sm">
                  {numberArticlesSelected}
                </span>
              </div>
            </div>
          </section>
        </div>
        <hr />
        {/* SECOND HEADER ROW OF VARIOUS LINKS */}
        <div className="hidden xl:block py-2">
          <nav className="flex justify-center items-center">
            <Link
              className={`group flex justify-between items-center py-2 mx-6 ${
                location.pathname === "/" ? "border-b-2 border-yellow-500" : ""
              }`}
              aria-label="Go to Homepage"
              to="/"
            >
              <h2 className="text-2xl transition-transform duration-300 group-hover:scale-105">
                Home
              </h2>
            </Link>
            <Link
              className={`group flex justify-between items-center py-2 mx-6 ${
                location.pathname === "/shop"
                  ? "border-b-2 border-yellow-500"
                  : ""
              }`}
              aria-label="Go to Shop"
              to="/shop"
            >
              <h2 className="text-2xl transition-transform duration-300 group-hover:scale-105">
                Shop
              </h2>
            </Link>
            <Link
              className={`group flex justify-between items-center py-2 mx-6 ${
                location.pathname === "/aboutus"
                  ? "border-b-2 border-yellow-500"
                  : ""
              }`}
              aria-label="Go to About Us"
              to="/aboutus"
            >
              <h2 className="text-2xl transition-transform duration-300 group-hover:scale-105">
                About Us
              </h2>
            </Link>
            <Link
              className={`group flex justify-between items-center py-2 mx-3 ${
                location.pathname === "/contactus"
                  ? "border-b-2 border-yellow-500"
                  : ""
              }`}
              aria-label="Go to Contact Us"
              to="/contactus"
            >
              <h2 className="text-2xl transition-transform duration-300 group-hover:scale-105">
                Contact Us
              </h2>
            </Link>
          </nav>
        </div>
        {/* Third header row with additional customer information */}
        <nav
          className="flex justify-center items-center py-1 bg-gray-200"
          aria-label="Customer information navigation"
        >
          <section className="group" aria-label="Italian Design">
            <Link
              to="italiandesign"
              className="flex items-center justify-center mx-6 transition-transform duration-300 group-hover:scale-105"
              aria-label="Learn more about Italian design"
            >
              <img
                className="w-6 h-auto mr-2"
                src={ItalyIcon}
                alt="Icon representing Italian design"
              />
              <span className="text-sm">ITALIAN DESIGN</span>
            </Link>
          </section>

          <section className="group" aria-label="Fast Shipping">
            <Link
              to="shipping"
              className="flex items-center justify-center mx-6 transition-transform duration-300 group-hover:scale-105"
              aria-label="Learn more about fast shipping"
            >
              <FiBox className="mr-2" aria-hidden="true" />
              <span className="text-sm">FAST SHIPPING</span>
            </Link>
          </section>

          <section className="group" aria-label="Easy Returns">
            <Link
              to="return"
              className="flex items-center justify-center mx-6 transition-transform duration-300 group-hover:scale-105"
              aria-label="Learn more about easy returns"
            >
              <TbArrowBack className="mr-2" aria-hidden="true" />
              <span className="text-sm">EASY RETURNS</span>
            </Link>
          </section>

          <section className="group" aria-label="Customer Reviews">
            <Link
              to="reviews"
              className="flex items-center justify-center mx-6 transition-transform duration-300 group-hover:scale-105"
              aria-label="Read over 100 customer reviews"
            >
              <FaStar className="mr-2 text-green-800" aria-hidden="true" />
              <span className="text-sm">100+ REVIEWS</span>
            </Link>
          </section>
        </nav>
      </header>
    </>
  );
}

export default Header;
