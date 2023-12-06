import { NextRequest, NextResponse } from 'next/server'
import transactionService from '@/services/transaction.service'

export async function POST(request: NextRequest) {
  const isReturned =
    request.nextUrl.searchParams.get('isReturned') === 'true' ? true : false
  const dateBorrow = new Date(
    request.nextUrl.searchParams.get('dateBorrow') as string,
  )
  const dateReturn = new Date(
    request.nextUrl.searchParams.get('dateReturn') as string,
  )
  const userId = request.nextUrl.searchParams.get('userId') as string

  try {
    const response = await transactionService.add({
      data: {
        isReturned,
        dateBorrow,
        dateReturn,
        userId,
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
