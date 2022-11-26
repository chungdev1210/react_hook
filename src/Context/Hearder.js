import React, {useContext} from 'react'
import { MyContext } from './DemoContext'

export default function Hearder() {
    const {theme, setTheme} = useContext(MyContext);
    const handleChange = (e) => {
        setTheme(theme == 'light' ? 'dark' : 'light')
    }
    return (
        <>
            <div>Hearder</div>
            <button onClick={handleChange}>Change Theme</button>
        </>
    )
}
