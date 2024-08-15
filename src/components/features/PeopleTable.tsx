import { getPeople } from '@/services/endpoints'
import { useEffect, useState } from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { People } from '@/types/People'
import { Button } from '../ui/button'

export default function PeopleTable() {
  const [people, setPeople] = useState<People[]>([])

  const tableHeadArray = [
    'Nombre',
    'Género',
    'Ubicación',
    'Correo electrónico',
    'Fecha de nacimiento',
    'Fotografia',
  ]
  const loadPeople = async () => {
    try {
      const people = await getPeople()
      setPeople(people)
      console.log('🚀 ~ App ~ people:', people)
    } catch (error) {
      console.log('🚀 ~ loadPeople ~ error:', error)
    }
  }

  useEffect(() => {
    loadPeople()
  }, [])

  return (
    <>
      <Table>
        <TableCaption> Personas Generadas: 10</TableCaption>
        <TableHeader>
          <TableRow>
            {tableHeadArray.map((tableHead) => (
              <TableHead>{tableHead}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {people.map((persona) => (
            <TableRow>
              <TableCell>{persona.fullName}</TableCell>
              <TableCell>{persona.gender}</TableCell>
              <TableCell>{persona.location}</TableCell>
              <TableCell>{persona.email}</TableCell>
              <TableCell>{persona.birthdate}</TableCell>
              <TableCell>
                <img
                  className='size-[40px]'
                  src={persona.photoURL}
                  alt={persona.fullName}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Button onClick={loadPeople}> Generate another 10</Button>
    </>
  )
}
