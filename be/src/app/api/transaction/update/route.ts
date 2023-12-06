import { NextRequest, NextResponse } from 'next/server'
import transactionService from '@/services/transaction.service'

export async function POST(request: NextRequest) {
  const id = Number(request.nextUrl.searchParams.get('id') as string)
  const data = JSON.parse(request.nextUrl.searchParams.get('data') as string)

  try {
    const response = await transactionService.update({ where: { id }, data })
    if (response) {
      return Response.json(response, { status: 200 })
    }
  } catch (error) {
    console.log(error)
    return Response.json(error, { status: 400 })
  }
}
