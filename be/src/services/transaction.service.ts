import { Prisma, PrismaClient } from '@prisma/client'
import closeDb from '../utils/closeDb'

const prisma = new PrismaClient()

const add = async (args: Prisma.TransactionCreateArgs) => {
  try {
    const transaction = await prisma.transaction.create(args)
    if (transaction !== null) return transaction
  } catch (error) {
    return error
  }
}

const findAll = async (args: Prisma.TransactionFindManyArgs) => {
  try {
    const transactions = await prisma.transaction.findMany(args)
    if (transactions !== null) return transactions
  } catch (error) {
    return error
  }
}

const findUnique = async (args: Prisma.TransactionFindUniqueArgs) => {
  try {
    const transaction = await prisma.transaction.findUnique(args)
    if (transaction !== null) return transaction
  } catch (error) {
    return error
  }
}

const update = async (args: Prisma.TransactionUpdateArgs) => {
  try {
    const transaction = await prisma.transaction.update(args)
    if (transaction !== null) return transaction
  } catch (error) {
    return error
  }
}

const remove = async (args: Prisma.TransactionDeleteManyArgs) => {
  try {
    const transaction = await prisma.transaction.deleteMany(args)
    if (transaction !== null) return transaction
  } catch (error) {
    return error
  }
}

closeDb(prisma)

export default {
  add,
  findAll,
  findUnique,
  update,
  remove,
}
