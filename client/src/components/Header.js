import React from 'react'

export default function Header({user}) {
  return (
    <div className="welcome-back">Welcome back, {user.full_name}!</div>
  )
}
