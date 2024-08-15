import React from 'react'

export default function Course() {
  return (
    <div className="flex h-[calc(100vh-68px)] items-center justify-center text-white">
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
          <p className="text-justify text-lg">
            O Bacharel em Enfermagem está habilitado a atuar em todos os níveis
            de assistência à saúde nas mais diversas áreas, compreendendo:
            atividades de promoção, prevenção, cuidado integral do ser humano,
            ensino, pesquisa, tomada de decisões, liderança (trabalho em
            equipe), administração e gerenciamento (do cuidado, de serviços e
            sistemas), e educação permanente (capacidade de aprender pela
            experiência em coletivos e seguir aprimorando-se em toda a vida
            profissional).
          </p>
        </div>
        <div className="flex w-auto flex-col justify-items-start text-lg">
          <p className="mb-3 text-xl font-semibold">
            ADMISSÃO E FUNCIONAMENTO:
          </p>
          <p>
            <span className="font-semibold">Número de vagas:</span> 40
          </p>
          <p>
            <span className="font-semibold">Modalidade:</span> Presencial
          </p>
          <p>
            <span className="font-semibold">
              Tempo mínimo de integralização curricular:
            </span>{' '}
            5 anos
          </p>
        </div>
      </div>
    </div>
  )
}
