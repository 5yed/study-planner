import { NextResponse } from "next/server"

type Task = {
  title: string
}

let tasks: Task[] = []

export async function GET() {
  return NextResponse.json(tasks)
}

export async function POST(req: Request) {
  const body = await req.json()
  tasks.push(body)
  return NextResponse.json(body)
}