"use client";
import React, { useState } from "react";
import { ThemeProvider as NextThemeProvider } from "next-themes";
import Header from "@/components/custom/Header";
import { MessagesContext } from "@/context/MessagesContext";

function Provider({ children }) {
  const [messages, setMessages] = useState();
  return (
    <div>
      <MessagesContext.Provider value={{ messages, setMessages }}>
        <NextThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
        </NextThemeProvider>
      </MessagesContext.Provider>
    </div>
  );
}

export default Provider;
