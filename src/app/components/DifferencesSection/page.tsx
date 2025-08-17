import { ClockIcon, StarIcon, SparklesIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Qualidade Premium',
    description:
      'Impressões nítidas e cores vibrantes que duram muito mais, garantindo produtos de alta qualidade e resistência.',
    icon: StarIcon,
  },
  {
    name: 'Produção Rápida',
    description:
      'Seu pedido é produzido com agilidade e cuidado, pronto em tempo recorde, sem abrir mão da qualidade que você merece.',
    icon: ClockIcon,
  },
  {
    name: 'Exclusividade',
    description:
      'Oferecemos criações exclusivas que você não encontra em nenhum outro lugar, garantindo a singularidade de cada peça.',
    icon: SparklesIcon,
  },
  {
    name: 'Atendimento Personalizado',
    description:
      'Um suporte rápido, atento e dedicado, acompanhando você em todas as etapas para garantir a melhor experiência de compra.',
    icon: ChatBubbleLeftRightIcon,
  },
]

export default function DifferencesSection() {
  return (
    <div id='diferenciais' className="bg-[#041F3F] py-24 sm:py-42">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="relative rounded-full py-1 text-sm/6 italic font-semibold text-[#EFA531]">
            Nossos Diferenciais
          </h2>
        <h2 className="w-full text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl">
          Detalhes que fazem a <span className="text-[#EFA531]">diferença</span>
        </h2>
          <p className="mt-4 text-lg/8 text-gray-400">
            Conheça o que consideramos essencial para transformar sua compra em uma experiência única e inesquecível.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-16 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="relative rounded-2xl bg-gray-800 border border-[#EFA531]/40 p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <dt className="text-lg font-semibold text-white flex items-center gap-3">
                  <div className="flex size-12 items-center justify-center rounded-lg bg-[#EFA531]">
                    <feature.icon aria-hidden="true" className="size-6 text-white" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-3 text-base text-gray-300">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
