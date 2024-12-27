import { Fragment, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import IMAGES from "../../../Images/index";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const history = useHistory();

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };



  return (
    <Fragment>
   
      <nav className="bg-blue-700 text-white border-b border-gray-200 lg:px-20 px-2">
        <div className="mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center py-6">
              <img
                src={IMAGES.imgTwo}
                alt="E-Clothes"
                className="h-10 w-20 mr-2"
              />
              <span className="font-bold text-white text-lg">E-Clothes</span>
            </Link>

            {/* Navigation menu */}
            <ul className="hidden md:flex items-center space-x-4">
            
              <li>
                <Link to="/men" className="font-medium text-white hover:text-black">
                  Men
                </Link>
              </li>
              <li>
                <Link to="/women" className="font-medium text-white hover:text-black">
                  Women
                </Link>
              </li>
              <li>
                <Link to="/" className="font-medium text-white hover:text-black">
                  Home
                </Link>
              </li>
           
            </ul>

         

            <div className="flex">
              <span className="px-2">User</span>
              <span className="px-2">Cart</span>
            </div>

        
          </div>
        </div>
      </nav>

    
    </Fragment>
  );
}

export default Navbar;
