import { Prisma, PrismaClient } from '@prisma/client'
import closeDb from '../utils/closeDb'

const prisma = new PrismaClient()

const add = async (args: Prisma.BookCreateArgs) => {
  try {
    const book = await prisma.book.create(args)
    if (book !== null) return book
  } catch (error) {
    return error
  }
}

const findAll = async (args: Prisma.BookFindManyArgs) => {
  try {
    const book = await prisma.book.findMany(args)
    if (book !== null) return book
  } catch (error) {
    return error
  }
}

const findUnique = async (args: Prisma.BookFindUniqueArgs) => {
  try {
    const book = await prisma.book.findUnique(args)
    if (book !== null) return book
  } catch (error) {
    return error
  }
}

const update = async (args: Prisma.BookUpdateArgs) => {
  try {
    const book = await prisma.book.update(args)
    if (book !== null) return book
  } catch (error) {
    return error
  }
}

const remove = async (args: Prisma.BookDeleteManyArgs) => {
  try {
    const book = await prisma.book.deleteMany(args)
    if (book !== null) return book
  } catch (error) {
    return error
  }
}

closeDb(prisma)

export default { add, findAll, findUnique, update, remove }
