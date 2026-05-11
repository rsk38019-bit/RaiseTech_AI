export interface Card {
  id: number
  title: string
  position: number
}

export interface BoardColumn {
  id: number
  title: string
  position: number
  cards: Card[]
}

export interface Board {
  id: number
  title: string
  columns: BoardColumn[]
}
