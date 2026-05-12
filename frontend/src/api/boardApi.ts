import type { Board, Card } from '../types/board'

export async function fetchBoard(boardId: number): Promise<Board> {
  const res = await fetch(`/api/boards/${boardId}`)
  if (!res.ok) {
    throw new Error(`ボードの取得に失敗しました (status: ${res.status})`)
  }
  return res.json()
}

export async function createCard(columnId: number, title: string): Promise<Card> {
  const res = await fetch(`/api/columns/${columnId}/cards`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title }),
  })
  if (!res.ok) {
    throw new Error(`カードの作成に失敗しました (status: ${res.status})`)
  }
  return res.json()
}
