// import React from 'react'
// import classes from "./Header.module.css"
// import { IoCartOutline } from "react-icons/io5";
// import { IoSearch } from "react-icons/io5";
// import LowerHeader from './LowerHeader';

// export default function Header() {
//   return (
//     <div>
//       <section className="red">
//         <section className={classes.header_container}>
//           <div className={classes.logo_container}>
//             {/*logo*/}
//             <a href="/">
//               <img
//                 src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
//                 alt=""
//               />
//             </a>
//             {/*delivery*/}
//             <div className={classes.delivery}>
//               <span>{/*icon*/}</span>
//               <div>
//                 <p>Delivered to</p>
//                 <span>Ethiopia</span>
//               </div>
//             </div>
//           </div>
//           {/*search*/}
//           <div className={classes.search}>
//             <select name="" id="">
//               <option value="">All</option>
//             </select>
//             <input type="text" name="" id="" placeholder="search product" />
//             <IoSearch size={25} />
//           </div>
//           {/*right side link*/}
//           <div>
//             <div className={classes.order_container}>
//               <a href="" className={classes.language}>
//                 <img
//                   src="https://uxwing.com/wp-content/themes/uxwing/download/flags-landmarks/united-states-flag-icon.png"
//                   alt=""
//                 />
//                 <section>
//                   <option value="">EN</option>
//                 </section>
//               </a>

//               {/*three components*/}
//               <a href="">
//                 <p>sign in</p>
//                 <span>Account & Lists &</span>
//               </a>
//               {/*orders*/}
//               <a href="">
//                 <p>returns </p>
//                 <span>orders</span>
//               </a>
//               {/*cart*/}
//               <a href="" className={classes.cart}>
//                 <IoCartOutline size={35} />
//                 <span>0</span>
//               </a>
//             </div>
//           </div>
//         </section>
//       </section>
//       <LowerHeader />
//     </div>
//   );
// }




// Header.js
import classes from "./Header.module.css";
import { SlLocationPin } from "react-icons/sl";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import LowerHeader from "./LowerHeader";
import { DataContext } from "../DataProvider/DataProvider";
import { useContext } from "react";
// Uncomment and import auth if necessary
// import { auth } from "../../Utility/firebase";

function Header() {
  const [{ user, basket }, dispatch] = useContext(DataContext) || [{}];

  const totalItem = basket?.reduce((amount, item) => amount + item.amount, 0) || 0;

  return (
    <section className={classes.fixed}>
      <section>
        <div className={classes.header__container}>
          {/* Logo and Delivery Info */}
          <div className={classes.logo__container}>
            <Link to="/">
              <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG25.png"
                alt="amazon logo"
              />
            </Link>

            <div className={classes.delivery}>
              <SlLocationPin />
              <div>
                <p>Delivered to</p>
                <span>Ethiopia</span>
              </div>
            </div>
          </div>

          {/* Search Bar */}
          <div className={classes.search}>
            <select>
              <option value="">All</option>
            </select>
            <input type="text" />
            <BsSearch size={35} />
          </div>

          {/* Right Side Links */}
          <div className={classes.order__container}>
            {/* Language */}
            <div className={classes.language}>
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/800px-Flag_of-the_United_States.svg.png?20151118161041"
                alt="US flag"
              />
              <select>
                <option value="">EN</option>
              </select>
            </div>

            {/* Sign In */}
            <Link to={!user ? "/auth" : "#"} className={classes.account}>
              <div>
                {user ? (
                  <>
                    <p>Hello {user.email.split("@")[0]}</p>
                    {/* Ensure auth is defined */}
                    <span onClick={() => auth && auth.signOut()}>Sign Out</span>
                  </>
                ) : (
                  <>
                    <p>Hello, Sign In</p>
                    <span>Account & Lists</span>
                  </>
                )}
              </div>
            </Link>

            {/* Returns & Orders */}
            <Link to="/order" className={classes.orders}>
              <p>Returns</p>
              <span>& Orders</span>
            </Link>

            {/* Cart */}
            <Link to="/cart" className={classes.cart}>
              <BiCart size={35} />
              <span>{totalItem}</span>
            </Link>
          </div>
        </div>
      </section>
      <LowerHeader />
    </section>
  );
}

export default Header;


