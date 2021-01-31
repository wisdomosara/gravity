import React, { ReactNode, useState } from "react";
// import Link from 'next/link'
import Head from "next/head";
import styles from "./Header/Header.module.scss";
import { motion } from "framer-motion";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const style = {
    borderRight: "3px solid black",
    borderTop: "1px solid black",
    borderBottom: "3px solid black",
    borderLeft: "1px solid black",
    borderRadius: "8px",
  };

  return (
    <div className="xl:px-32 md:px-10 lg:px-20 px-5 overflow-hidden">
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="preload"
          href="/fonts/sf/sfDisplay.ttf"
          as="font"
          crossOrigin=""
        />
      </Head>
      <header className="w-full">
        <nav
          className="flex justify-between items-center py-10"
          style={{ zIndex: 3 }}
        >
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                scale: 0.8,
                opacity: 0,
              },
              visible: {
                scale: 1,
                opacity: 1,
                transition: {
                  delay: 0.4,
                },
              },
            }}
          >
            <h2 className="text-2xl md:text-4xl font-bold">Gravity</h2>
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                scale: 0.8,
                opacity: 0,
              },
              visible: {
                scale: 1,
                opacity: 1,
                transition: {
                  delay: 0.6,
                },
              },
            }}
          >
            <div className="hidden md:block">
              <ul className="flex items-center">
                <li className="pl-10 font-bold text-xl hover:opacity-50">
                  Features
                </li>
                <li className="pl-10 font-bold text-xl hover:opacity-50">
                  Pricing
                </li>
                <li className="pl-10 font-bold text-xl hover:opacity-50">
                  Why Gravity
                </li>
                <li
                  className="pl-10 font-bold text-xl hover:opacity-50"
                  style={{ color: "#71A89E" }}
                >
                  Sign In
                </li>
              </ul>
            </div>
            <div className="relative md:hidden">
              <button
                className="flex items-center w-24  justify-center py-2 hover:outline-none"
                style={style}
                onClick={() => setShowMenu(!showMenu)}
              >
                <img src="/images/menu.svg" width="11px" height="11px" alt="" />{" "}
                <p className="ml-4 font-bold text-xs">Menu</p>
              </button>
              <div className={showMenu ? styles.absolute : styles.noAbsolute}>
                <ul>
                  <li className="text-center py-2 hover:bg-white">Features</li>
                  <li className="text-center py-2 hover:bg-white">Pricing</li>
                  <li className="text-center py-2 hover:bg-white">
                    Why Gravity
                  </li>
                  <li
                    className="text-center py-2 hover:bg-white"
                    style={{ color: "#71A89E" }}
                  >
                    Sign In
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </nav>
      </header>
      {children}
    </div>
  );
};

export default Layout;
