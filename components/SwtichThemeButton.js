import { Switch } from '@headlessui/react'
import {useState} from 'react'
import {RiSunFill,RiMoonFill} from 'react-icons/ri'
import {useTheme} from 'next-themes'
import { useEffect } from 'react';

const themes = [{name: 'Dark'}, {name: 'Light'}];


function SwitchThemeButton() {
    const [enabled, setEnabled] = useState(false)
    const {theme, setTheme} = useTheme();
    useEffect(() => {
      theme == "light" ? setEnabled(false) : setEnabled(true)
    }, [])
    
    
  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      onClick={() => theme == "light"? setTheme('dark'): setTheme("light")}
      className={`${
        enabled ? 'bg-gray-700' : 'bg-yellow-400'
      } relative inline-flex h-6 w-11 items-center rounded-full`}
    >
      <span className="sr-only">Enable notifications</span>
      <span
        className={`${
          enabled ? 'translate-x-6' : 'translate-x-1'
        } inline-block h-4 w-4 transform rounded-full transition`}
      >
        {
           enabled === true ? (
               <RiMoonFill className='h-4 w-4 text-white'/>
               ) : (
               <RiSunFill className='h-4 w-4 text-white'/>
           )
        }
        </span>
    </Switch>
  )
}

export default SwitchThemeButton