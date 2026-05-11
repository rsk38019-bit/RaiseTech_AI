import type { Card as CardType } from '../types/board'

interface Props {
  card: CardType
}

export function Card({ card }: Props) {
  return (
    <div className="bg-white rounded-md shadow-sm border border-gray-200 px-3 py-2 text-sm text-gray-800">
      {card.title}
    </div>
  )
}
