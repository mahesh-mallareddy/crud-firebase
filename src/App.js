import React from "react";
import reactDom from "react-dom/client";
import Navbar from "./components/Navbar";
import Addfromdata from "./components/Addformdata";
import Getformdata from "./components/Getformdata";

const root = reactDom.createRoot(document.getElementById("root"));

    const Nav = () => {
        return (
            <div className="navigation">
                    {/* <Navbar /> */}
                    <Addfromdata />
                    <Getformdata/>
            </div>
        )
    }

root.render(<Nav/>)