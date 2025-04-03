import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import Colors from "@/data/Colors";
const Header = () => {
  return (
    <div className="p-4 flex justify-between items-center">
      <Image
        src={"/logo.png"}
        alt="logo"
        height={70}
        width={70}
        className="p-4"
        style={{ color: "white" }}
      />
      <div className="gap-5 flex">
        <Button variant="ghost">Sign in </Button>
        <Button
          className="text-white"
          style={{
            backgroundColor: Colors.BLUE,
          }}
        >
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default Header;
