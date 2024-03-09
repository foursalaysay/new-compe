import React from 'react'

import Link from 'next/link'

export default function SideBar() {

    const getUserURL = ""

  async function getUser(){
    try {
        const getUser = await fetch(getUserURL)
        return getUser.json
    } catch (error) {
        console.log("error fetching data")
    }
  }

  return (
    <div className='w-60 h-screen '>
      <Link href="org-list">Organization List</Link>
      <Link href="com-list">Company List</Link>
      <Link href="tran-list">Transaction History</Link>

    </div>
  )
}
