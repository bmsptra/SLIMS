import { NextRequest, NextResponse } from 'next/server'
import userService from '@/services/user.service'

export async function POST(request: NextRequest) {
  const nim: string = request.nextUrl.searchParams.get('nim') as string
  const password: string = request.nextUrl.searchParams.get(
    'password',
  ) as string

  try {
    const response = await userService.signin(nim, password)
    if (response) {
      return Response.json(response, { status: 200 })
    }
  } catch (error) {
    console.log(error)
    return Response.json(error, { status: 400 })
  }
}
