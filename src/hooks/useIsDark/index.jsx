import {useContext} from 'react'
import { Context as IsDarkContext } from '../../context/isDark'


const UseIsDark = (setterOnly) => {
    const ctx = useContext(IsDarkContext);
    const { isDark, setIsDark } = ctx;
    return setterOnly ? [setIsDark] : [isDark, setIsDark];
}

export default UseIsDark