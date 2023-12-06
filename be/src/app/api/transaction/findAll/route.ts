import { NextRequest, NextResponse } from 'next/server'
import transactionService from '@/services/transaction.service'

export async function POST(request: NextRequest) {
  const take = Number(request.nextUrl.searchParams.get('take') as string)
  const orderBy = JSON.parse(
    request.nextUrl.searchParams.get('orderBy') as string,
  )

  try {
    const response = await transactionService.findAll({ take, orderBy })
    if (response) {
      return Response.json(response, { status: 200 })
    }
  } catch (error) {
    console.log(error)
    return Response.json(error, { status: 400 })
  }
}
