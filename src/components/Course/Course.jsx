import React from 'react'

export default function Course() {
  return (
    <div className="flex h-screen items-center justify-center bg-zinc-800 text-gray-300">
      <div className="flex w-3/5 flex-col gap-5 ">
        <p className="text-center text-5xl font-semibold text-orange-800">
          ENFERMAGEM
        </p>
        <p className="text-justify text-lg">
          O enfermeiro é habilitado a assistir o indivíduo ou a comunidade com
          relação à prevenção de agravos, a exercer cuidados específicos durante
          o tratamento e reabilitação do indivíduo com enfermidade. É capaz de
          dirigir órgão de enfermagem integrante da estrutura básica da
          instituição de saúde, chefiando serviços e unidades específicas de
          enfermagem.
        </p>
        <div>
          <p className=" mb-3 box-border text-xl font-semibold">
            CAMPO DE ATUAÇÃO:
          </p>
          <ul className="list-outside list-disc pl-20 text-justify text-lg">
            <li>
              O Bacharel em Enfermagem está habilitado a atuar em todos os
              níveis de assistência à saúde nas mais diversas áreas,
              compreendendo: atividades de promoção, prevenção, cuidado integral
              do ser humano, ensino, pesquisa, tomada de decisões, liderança
              (trabalho em equipe), administração e gerenciamento (do cuidado,
              de serviços e sistemas), e educação permanente (capacidade de
              aprender pela experiência em coletivos e seguir aprimorando-se em
              toda a vida profissional).
            </li>
          </ul>
        </div>
        <div>
          <p className="mb-3 text-xl font-semibold">
            ADMISSÃO E FUNCIONAMENTO:
          </p>
          <ul className="flex  w-auto list-outside list-disc flex-col justify-items-start pl-20 text-lg">
            <li>
              <span className="font-semibold">Número de vagas:</span> 40
            </li>
            <li>
              <span className="font-semibold">Modalidade:</span> Presencial
            </li>
            <li>
              <span className="font-semibold">
                Tempo mínimo de integralização curricular:
              </span>{' '}
              5 anos
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
