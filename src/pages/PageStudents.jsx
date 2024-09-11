import React, { useState } from 'react'
import Header from '../components/Header/Header'

export default function PageStudents() {
  // Dados estáticos de exemplo
  const students = [
    { nome: 'João Silva', cidade: 'São Paulo', curso: 'Engenharia' },
    { nome: 'Maria Oliveira', cidade: 'Rio de Janeiro', curso: 'Medicina' },
    { nome: 'Pedro Santos', cidade: 'Belo Horizonte', curso: 'Direito' },
    { nome: 'Pedro Santos', cidade: 'Belo Horizonte', curso: 'Direito' },
    { nome: 'Pedro Santos', cidade: 'Belo Horizonte', curso: 'Direito' },
    { nome: 'Pedro Santos', cidade: 'Belo Horizonte', curso: 'Direito' },
    { nome: 'Pedro Santos', cidade: 'Belo Horizonte', curso: 'Direito' },
    { nome: 'Pedro Santos', cidade: 'Belo Horizonte', curso: 'Direito' },
    { nome: 'Pedro Santos', cidade: 'Belo Horizonte', curso: 'Direito' },
    { nome: 'Pedro Santos', cidade: 'Belo Horizonte', curso: 'Direito' },
    { nome: 'Pedro Santos', cidade: 'Belo Horizonte', curso: 'Direito' },
    { nome: 'Pedro Santos', cidade: 'Belo Horizonte', curso: 'Direito' },
    { nome: 'Pedro Santos', cidade: 'Belo Horizonte', curso: 'Direito' },
  ]

  const [searchTerm, setSearchTerm] = useState('')

  // Filtra os alunos com base no termo de pesquisa
  const filteredStudents = students.filter((student) =>
    student.curso.toLowerCase().includes(searchTerm.toLowerCase()),
  )

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
            placeholder="Pesquisar por curso"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="rounded border border-gray-300 p-2 outline-none"
          />
        </div>
        <div className="w-9/12 overflow-x-auto">
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
              {filteredStudents.map((student, index) => (
                <tr
                  key={index}
                  className="hover:cursor-pointer hover:bg-slate-100"
                >
                  <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                    {student.nome}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                    {student.cidade}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                    {student.curso}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
