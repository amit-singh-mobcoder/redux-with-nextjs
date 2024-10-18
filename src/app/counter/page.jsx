"use client"
import React, { use } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from '@/features/counter/counterSlice'

const Counter = () => {
    const dispatch = useDispatch()
    const count = useSelector((state) => state.counter.count)

    const handleIncrement = () => {
        dispatch(increment())
    }
  return (
    <div className='min-h-screen bg-yellow-950 flex flex-col items-center justify-start'>
      <div className='bg-yellow-800 min-h-[100px] w-full flex justify-center items-center py-2 px-4'>
        <h2 className='font-bold text-[50px]'>Counter Playground</h2>
      </div>
      <div className='mt-8 min-w-[900px] border px-4 py-4'>
        <p className='text-center'>Counter: {count}</p>
      </div>
      <div className='mt-4 min-w-[900px] flex justify-center items-center'>
            <button onClick={handleIncrement} className='border px-4 py-2'>Increment +</button>
      </div>
    </div>
  )
}

export default Counter