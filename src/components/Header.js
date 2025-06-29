import React, { use } from "react";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { clearUser } from "../utlis/userSlice";
import { useDispatch,useSelector } from "react-redux";
import { unstable_HistoryRouter, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { setUser , setLanguage } from "../utlis/userSlice";
import { toggleSearch } from "../utlis/gptSearchSlice";
import { LANGUAGES } from "../utlis/constants";


export const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
 
  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(setUser({ uid, email, displayName }));
        navigate("/browse");
      } else {
        dispatch(clearUser(null));
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  const handleSignout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        dispatch(clearUser(null));
        navigate("/");

        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };
  const handleGpt = () => {
    dispatch(toggleSearch())
  }
  const languangeChoose = (e) => {
    const selectedLanguage = e.target.value;
    dispatch(setLanguage( selectedLanguage));
    console.log("Selected Language:", selectedLanguage);
  }
  
  return (
    <div className="w-screen absolute flex justify-between   px-10 py-100 bg-gradient-to-b from-black z-10">
      <img
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        className=""
        alt="Netflix Logo "
        style={{ width: "300px", height: "auto" }}
      />
      <div className="flex items-center gap-9">
        <select className="text-white text-lg  bg-black bg-opacity-50 px-5 py-2 rounded-md" onClick={(e) => {languangeChoose(e)}}>
          {LANGUAGES.map((lang) => (
            <option key={lang.code} value={lang.code} className="text-white">{lang.name}</option>))}
        </select>
        <button className="bg-red-600 text-white px-4 py-2 rounded-md " onClick={handleGpt}>GptSearch</button>
        <img
          src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg"
          style={{ width: "50px", height: "auto" }}
        />
        <button
          className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition duration-300"
          onClick={handleSignout}
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};
