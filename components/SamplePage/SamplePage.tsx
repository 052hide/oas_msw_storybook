import React, { useEffect, useState } from 'react'

export const SamplePage = () => {
  const [pets, setPets] = useState(null)

  const addPet = (d: any) => {
    fetch('/pets', {
      method: 'post',
      body: d
    })
  }

  useEffect(() => {
    let completed = false
    if (!completed) {
      fetch('/pets').then(r => {
        setPets(r)
      })
    }
    return () => {
      completed = true
    }
  }, [])

  return (
    <div>
      <ul>
        {
          pets.map(pet => (
            <li>{pet.name}</li>
          ))
        }
      </ul>

      <form onSubmit={addPet}>
        <button type={'submit'}>Submit</button>
      </form>
    </div>
  )
}