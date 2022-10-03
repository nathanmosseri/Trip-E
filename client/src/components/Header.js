import React from 'react'

export default function Header({user}) {
  return (
    <div>Welcome back, {user.full_name}!</div>
  )
}
