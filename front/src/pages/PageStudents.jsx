import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Header from '../components/Header/Header'

export default function PageStudents() {
  const [students, setStudents] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get('http://localhost:3001/students')
        setStudents(response.data)
        console.log(response.data) // Verifica se os dados estão corretos
      } catch (error) {
        console.error('Erro ao buscar alunos:', error)
      }
    }

    fetchStudents()
  }, [])

  const filteredStudents = students.filter((student) => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase()

    // Verifique se 'name' e 'course' existem e não são nulos antes de chamar 'toLowerCase'
    const nameMatches =
      student.name && student.name.toLowerCase().includes(lowerCaseSearchTerm)
    const courseMatches =
      student.course &&
      student.course.toLowerCase().includes(lowerCaseSearchTerm)

    return nameMatches || courseMatches // Filtra por nome ou curso
  })

  return (
    <div className="h-screen text-black shadow-lg shadow-gray-500/50">
      <Header />
      <div className="sticky top-20 w-full bg-white py-4">
        <p className="text-center text-3xl font-semibold">Nossos Alunos</p>
      </div>
      <div className="flex flex-col items-center justify-center pt-24">
        <div className="mb-4 flex w-9/12 justify-end">
          <input
            type="text"
            placeholder="Filtre por nome ou curso"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="rounded border border-gray-300 p-2 outline-none"
          />
        </div>
        <div className="w-9/12 overflow-x-auto">
          {students.length === 0 ? (
            <p>Nenhum aluno cadastrado.</p>
          ) : (
            <table className="min-w-full divide-y divide-gray-400 text-center">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-center text-xl font-semibold uppercase tracking-wider text-black">
                    Nome
                  </th>
                  <th className="px-6 py-3 text-center text-xl font-semibold uppercase tracking-wider text-black">
                    Cidade
                  </th>
                  <th className="px-6 py-3 text-center text-xl font-semibold uppercase tracking-wider text-black">
                    Curso
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-400 bg-white">
                {filteredStudents.map((student) => (
                  <tr
                    key={student.id}
                    className="hover:cursor-pointer hover:bg-slate-100"
                  >
                    <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                      {student.name}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                      {student.city}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                      {student.course}{' '}
                      {/* Certifique-se de que a propriedade curso existe */}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  )
}
