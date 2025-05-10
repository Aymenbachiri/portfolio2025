import { useEffect, useState } from "react";

type useNavbarReturn = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  scrolled: boolean;
};

export function useNavbar(): useNavbarReturn {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { isOpen, setIsOpen, scrolled };
}
