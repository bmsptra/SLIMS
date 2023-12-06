import { NextRequest, NextResponse } from 'next/server'
import userService from '@/services/user.service'
import { validator } from '@/utils/validator'

export async function POST(request: NextRequest) {
  const name = request.nextUrl.searchParams.get('name') as string
  const nim = request.nextUrl.searchParams.get('nim') as string
  const alamat = request.nextUrl.searchParams.get('alamat') as string
  const confirmPassword = request.nextUrl.searchParams.get(
    'confirmPassword',
  ) as string
  const email = request.nextUrl.searchParams.get('email') as string
  const nohp = request.nextUrl.searchParams.get('nohp') as string
  const password = request.nextUrl.searchParams.get('password') as string

  const isValid = validator({ password, confirmPassword })
  if (isValid.status === 'invalid') return isValid.description

  try {
    const response = await userService.signup({
      name,
      alamat,
      email,
      nim,
      password,
      nohp,
    })
    console.log({ response })

    if (response) {
      return Response.json(response)
    }
  } catch (error) {
    console.log(error)
    return Response.json(error)
  }
}
