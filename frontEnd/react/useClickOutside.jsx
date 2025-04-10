import { useRef, useEffect, useState } from "react";
function useClickOutside(onClickOutside) {
  const ref = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        onClickOutside();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, onClickOutside]);
  return ref;
}

function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  const menuRef = useClickOutside(closeMenu);
  return (
    <div>
      <button onClick={toggleMenu}>Toggle Menu</button>
      {isMenuOpen && (
        <ul ref={menuRef}>
          <li>Menu Item 1</li>
          <li>Menu Item 2</li>
          <li>Menu Item 3</li>
        </ul>
      )}
    </div>
  );
}
export default Component;
