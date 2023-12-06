import { NextRequest, NextResponse } from 'next/server'
import bookService from '@/services/book.service'

export async function POST(request: NextRequest) {
  const title = request.nextUrl.searchParams.get('title') as string
  const description = request.nextUrl.searchParams.get('description') as string
  const author = request.nextUrl.searchParams.get('author') as string
  const publicationYear = request.nextUrl.searchParams.get(
    'publicationYear',
  ) as string
  const stock = request.nextUrl.searchParams.get('stock') as string
  const coverId = request.nextUrl.searchParams.get('coverId') as string

  try {
    const response = await bookService.add({
      data: {
        title,
        author,
        coverId,
        description,
        publicationYear,
        stock: Number(stock),
      },
    })
    console.log({ response })

    if (response) {
      return Response.json(response, { status: 200 })
    }
  } catch (error) {
    console.log(error)
    return Response.json(error, { status: 400 })
  }
}
