"use client";
import Lookup from "@/data/Lookup";
import React, { useContext, useState } from "react";
import { ArrowRight, Link } from "lucide-react";
import Colors from "@/data/Colors";
import { MessagesContext } from "@/context/MessagesContext";

function Hero() {
  const [userInput, setUserInput] = useState();
  const { messages, setMessages } = useContext(MessagesContext);
  const onGenerate = (input) => {
    // we want to share the value across the application
    // using context API
    setMessages({
      role: "user",
      content: input,
    });
  };
  return (
    <div className="flex flex-col items-center mt-36 gap-2 xl:mt-42">
      <h2 className="font-bold text-4xl">{Lookup.HERO_HEADING}</h2>
      <p className="text-gray-400 font-medium">{Lookup.HERO_DESC}</p>

      <div
        className="p-5 border rounded-xl max-w-xl w-full mt-3 "
        style={{ background: Colors.BACKGROUND }}
      >
        {/* the entire box  */}
        <div className="flex gap-2">
          <textarea
            placeholder={Lookup.INPUT_PLACEHOLDER}
            className="
          outline-none bg-transparent w-full  h-32 max-h-56 resize-none
          "
            onChange={(event) => setUserInput(event.target.value)}
            value={userInput}
          />
          {userInput && (
            <ArrowRight
              onclick={() => onGenerate(suggestion)}
              className="bg-blue-500 p-2 h-8 w-8 rounded-md cursor-pointer"
            ></ArrowRight>
          )}
        </div>
        <div>
          <Link className="h-5 w-5"></Link>
        </div>
      </div>
      <div className="flex flex-wrap max-w-2xl items-center justify-center">
        {Lookup.SUGGSTIONS.map((suggestion, index) => (
          <h2
            className="p-1 px-2 border mb-1.5 cursor-pointer transition-colors rounded-full gap-3 text-sm text-gray-400 hover:text-white"
            key={index}
            onclick={() => onGenerate(suggestion)}
          >
            {suggestion}
          </h2>
        ))}
      </div>
    </div>
  );
}

export default Hero;
