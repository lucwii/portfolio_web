"use client"
import {
  FiEdit,
  FiChevronDown,
  FiTrash,
  FiShare,
  FiPlusSquare,
  FiMenu,
} from "react-icons/fi";
import { motion } from "framer-motion";
import { Dispatch, SetStateAction, useState } from "react";
import { IconType } from "react-icons";
import Link from 'next/link';

type DropDownProps = {
  className?: string;
}

const DropDown = ({className}: DropDownProps) => {
  const [open, setOpen] = useState(false);
  
  return (
    <motion.div animate={open ? "open" : "closed"} className="relative">
      <button
        onClick={() => setOpen((pv) => !pv)}
        className="flex items-center gap-2 px-3 py-2 rounded-md text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-500 transition duration-1000"
      >
        <FiMenu className="w-4 h-5" />
        <motion.span variants={iconVariants}>
          <FiChevronDown />
        </motion.span>
      </button>
      
      <motion.ul
        initial={wrapperVariants.closed}
        variants={wrapperVariants}
        style={{ originY: "top", translateX: "-50%" }}
        className="flex flex-col gap-2 p-2 rounded-lg bg-popover border shadow-xl absolute top-[120%] left-[50%] w-48 overflow-hidden z-50"
      >
        <NavOption setOpen={setOpen} text="About Me" href="#aboutme" />
        <NavOption setOpen={setOpen} text="Projects" href="#projects" />
        <NavOption setOpen={setOpen} text="Links" href="" />
        <div className="border-t border-border my-2"></div>
        <ContactOption setOpen={setOpen} text="Contact Me" />
      </motion.ul>
    </motion.div>
  );
};

const NavOption = ({
  text,
  href,
  setOpen,
}: {
  text: string;
  href: string;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <motion.li variants={itemVariants}>
      <Link
        href={href}
        onClick={() => setOpen(false)}
        className="flex items-center gap-2 w-full p-2 text-sm font-medium whitespace-nowrap rounded-md hover:bg-blue-100 dark:hover:bg-blue-900 text-foreground hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
      >
        <span>{text}</span>
      </Link>
    </motion.li>
  );
};

const ContactOption = ({
  text,
  setOpen,
}: {
  text: string;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <motion.li variants={itemVariants}>
      <button
        onClick={() => setOpen(false)}
        className="flex items-center gap-2 w-full p-2 text-sm font-medium whitespace-nowrap rounded-md bg-blue-600 hover:bg-blue-700 text-white transition-colors cursor-pointer"
      >
        <span>{text}</span>
      </button>
    </motion.li>
  );
};

export default DropDown;

const wrapperVariants = {
  open: {
    scaleY: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1,
    },
  },
};

const iconVariants = {
  open: { rotate: 180 },
  closed: { rotate: 0 },
};

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
    },
  },
  closed: {
    opacity: 0,
    y: -15,
    transition: {
      when: "afterChildren",
    },
  },
};