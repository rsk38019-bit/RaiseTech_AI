import type { BoardColumn } from '../types/board'
import { Card } from './Card'

interface Props {
  column: BoardColumn
}

export function Column({ column }: Props) {
  return (
    <div className="bg-gray-100 rounded-lg p-3 w-72 flex-shrink-0 flex flex-col gap-2">
      <div className="flex items-center gap-2 px-1">
        <h2 className="font-semibold text-gray-700 text-sm">{column.title}</h2>
        <span className="text-xs text-gray-400 bg-gray-200 rounded-full px-2 py-0.5">
          {column.cards.length}
        </span>
      </div>
      <div className="flex flex-col gap-2">
        {column.cards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </div>
    </div>
  )
}
