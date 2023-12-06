import { NextRequest, NextResponse } from 'next/server'
import commentService from '@/services/comment.service'

export async function POST(request: NextRequest) {
  const content = request.nextUrl.searchParams.get('content') as string
  const date = new Date(request.nextUrl.searchParams.get('date') as string)
  const userId = request.nextUrl.searchParams.get('userId') as string
  const bookId = Number(request.nextUrl.searchParams.get('bookId') as string)

  try {
    const response = await commentService.add({
      data: {
        content,
        date,
        userId,
        Book: { connect: { id: bookId } },
      },
    })

    if (response) {
      return Response.json(response, { status: 200 })
    }
  } catch (error) {
    console.log(error)
    return Response.json(error, { status: 400 })
  }
}
