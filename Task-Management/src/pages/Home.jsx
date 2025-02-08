import React, { useState } from 'react'
import List from './List'
import Taskselecter from '../components/Taskselecter'
import SchaduleList from '../components/SchaduleList'

export default function Home() {
      const [select, setselect] = useState('Task')
  return (
   <>
     <main className="mt-10 pb-10">

         <Taskselecter select={select} setselect={setselect} />
         {
            select == 'Task' ? <List /> : <SchaduleList />
         }
         

     </main>
   
   </>
  )
}
