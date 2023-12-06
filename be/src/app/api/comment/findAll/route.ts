import { NextRequest, NextResponse } from 'next/server'
import commentService from '@/services/comment.service'

export async function POST(request: NextRequest) {
  const take = Number(request.nextUrl.searchParams.get('take') as string)
  const orderBy = JSON.parse(
    request.nextUrl.searchParams.get('orderBy') as string,
  )

  try {
    const response = await commentService.findAll({ take, orderBy })
    if (response) {
      return Response.json(response, { status: 200 })
    }
  } catch (error) {
    console.log(error)
    return Response.json(error, { status: 400 })
  }
}