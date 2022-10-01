import React from 'react'
import { Link } from 'react'
import TripDetails from './TripDetails'
import TripCarousel from './TripCarousel'

export default function Itinerary() {
  return (
    <>
    <div>itinerary</div>
    <Link to='/'>back</Link>
    <TripDetails/>
    <TripCarousel/>
    </>
  )
}
