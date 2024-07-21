import { useState } from "react";

const useMenu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    return { isMenuOpen, setIsMenuOpen };
}

export default useMenu;