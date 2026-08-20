// // import React, { useEffect } from "react";
// // import NavBar from "./NavBar";
// // import { Outlet, useNavigate } from "react-router";
// // import Footer from "./Footer";
// // import axios from "axios"
// // import { BASE_URL } from "../utils/constants";
// // import { addUser } from "../utils/userSlice";
// // import { useDispatch, useSelector } from "react-redux";

// // const Body = () => {
// //   const dispatch = useDispatch();
// //   const navigate = useNavigate();
// //   const userData = useSelector((store) => store.user);

// //   const fetchUser = async () => {
// //     if(userData) return;
// //     try {
// //       const res = await axios.get(BASE_URL + "/profile/view", {
// //         withCredentials: true,
// //       });
// //       dispatch(addUser(res.data));
// //     } catch (err) {
// //       if (err.response?.status === 401) {
// //         navigate("/login");
// //       }

// //       console.error(err);
// //     }
// //   };

// //   useEffect(() => {
// //     fetchUser();
// //   }, []);

// //   return (
// //     <div>
// //       <NavBar />
// //       <Outlet />
// //       <Footer />
// //     </div>
// //   );
// // };

// // export default Body;


// import React, { useEffect } from "react";
// import NavBar from "./NavBar";
// import { Outlet, useNavigate } from "react-router";
// import Footer from "./Footer";
// import axios from "axios";
// import { BASE_URL } from "../utils/constants";
// import { addUser } from "../utils/userSlice";
// import { useDispatch, useSelector } from "react-redux";

// const Body = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const userData = useSelector((store) => store.user);

//   const fetchUser = async () => {
//     if (userData) return;
//     try {
//       const res = await axios.get(BASE_URL + "/profile/view", {
//         headers: { Authorization: `Bearer ${userData?.token}` },
//       });
//       dispatch(addUser({ ...res.data.data, token: userData?.token }));
//     } catch (err) {
//       if (err.response?.status === 401) {
//         navigate("/login");
//       }
//       console.error(err);
//     }
//   };

//   useEffect(() => {
//     fetchUser();
//   }, []);

//   return (
//     <div>
//       <NavBar />
//       <Outlet />
//       <Footer />
//     </div>
//   );
// };

// export default Body;


import React, { useEffect } from "react";
import NavBar from "./NavBar";
import { Outlet, useNavigate } from "react-router";
import Footer from "./Footer";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { addUser } from "../utils/userSlice";
import { useDispatch, useSelector } from "react-redux";

const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((store) => store.user);

  const fetchUser = async () => {
    if (userData) return;

    try {
      const res = await axios.get(BASE_URL + "/profile/view", {
        withCredentials: true,
      });

      // Depending on whether your backend returns res.data or res.data.data
      dispatch(addUser(res.data.data || res.data));
    } catch (err) {
      if (err.response?.status === 401) {
        navigate("/login");
      }
      console.error(err);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Body;