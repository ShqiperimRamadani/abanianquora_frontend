import '@styles/globals.css'
// import { Children } from 'react/cjs/react.production.min'
import React from 'react'
import Pytje_Feed from './components/pytje_Feed'

export const metadata= {
    title: 'AlbanianQuora',
    descritpio: 'Get your answers, you wanted to know about'
}

const RootLayout = () => {
  return (
    <html en="en">
        <body>
            <div className='main'>
                <div className='gradient'></div>
            </div>

            <main className='app'>
                {/* {Children} */}
                <h1>Hello World!</h1>
            </main>

            <Pytje_Feed title='What is your favorite color?' numPergjigje={10} numVota={4} />

        </body>
    </html>
  )
}

export default RootLayout