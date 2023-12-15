import Image from 'next/image'
import AddUser from './components/AddUser'
import DisplayUser from './components/DisplayUser'

export default function Home() {
  return (
    <main >
        <AddUser />
        <DisplayUser />
    </main>
  )
}
