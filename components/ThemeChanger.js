import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const themes = [{name: 'Dark'}, {name: 'Light'}];

const ThemeChanger = () => {
    const [mounted, setMounted] = useState(false);
    const [show, setShow] = useState(false)
    const {theme, setTheme} = useTheme();
    useEffect(() => {
      setMounted(true)
    }, [])

    if (!mounted) return null;

    return (
            <div>
                <select name="" id=""
                className="bg-transparent w-full text-color border-0 hover:border-none hover:ring-0 ring-0 outline-0 cursor-pointer"
                onChange={(e) => setTheme(e.currentTarget.value)}
                onClick={() => setShow(true)}
                >
                    <option value="" hidden>{theme}</option>
                    {show  && (
                        <>
                        {themes.map((theme) => (
                            <option className="bg-theme border-0" value={theme.name.toLowerCase()} key={theme.name.toLowerCase()}>
                                {theme.name.toLowerCase()}
                            </option>
                        ))}
                        
                        </>
                    )}
                </select>
            </div>
    )
    
}

export default ThemeChanger;