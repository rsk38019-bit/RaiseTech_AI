import type { Board } from '../types/board'

export async function fetchBoard(boardId: number): Promise<Board> {
  const res = await fetch(`/api/boards/${boardId}`)
  if (!res.ok) {
    throw new Error(`ボードの取得に失敗しました (status: ${res.status})`)
  }
  return res.json()
}
