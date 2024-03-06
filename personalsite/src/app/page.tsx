import Image from 'next/image'

import { NavBar } from './_components/NavBar'

export default function Home() {
  return (
    <main className={'main'}>
      <div className='leftroundedaccent'>
        <div className='myname'>
          <div className='firstlast'>
            <p className='firstlast'>IAN</p>
          </div>
          <div className='firstlast'>
            <p className='firstlast'>WEINHOLTZ</p>
          </div>
        </div>
      </div>
      <div className='rightroundedaccent'>
        <div className='aboutme'>
            <p>
              Hello world! Im Ian Weinholtz, A proficient Full-Stack Developer based in St. Louis, Missouri, with specialization in React, Typescript, and Express, complemented by a solid foundation in GraphQL, SQL databases like PostgreSQL, and NoSQL databases like MongoDB. Experience includes developing web applications, enhancing software performance through caching solutions like Redis, and improving code maintainability. Significant contributions have been made to open-source projects, notably enhancing the Quell library by optimizing GraphQL query caching and increasing test coverage. Projects highlight the ability to develop efficient, user-centric applications using modern web technologies and security practices. Educational background from Webster University and hands-on software development skills demonstrate a valuable asset to tech teams, as shown by a dynamic project portfolio and active GitHub contributions.
            </p>
        </div>
      </div>
    </main>
  )
} 
