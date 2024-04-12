import '@styles/globals.css'
// import { Children } from 'react/cjs/react.production.min'

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
        </body>
    </html>
  )
}

export default RootLayout