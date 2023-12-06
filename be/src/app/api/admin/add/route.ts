import { NextRequest, NextResponse } from 'next/server'
import adminService from '@/services/admin.service'

export async function POST(request: NextRequest) {
  const name = request.nextUrl.searchParams.get('name') as string
  const email = request.nextUrl.searchParams.get('email') as string
  const password = request.nextUrl.searchParams.get('password') as string

  try {
    const response = await adminService.add({
      data: {
        name,
        email,
        password,
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
