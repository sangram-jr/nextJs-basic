import { PrismaClient } from "@prisma/client";


//create a db connection
const PrismaClientSingleton=()=>{
    return new PrismaClient();
}

//define type
declare global{
    var prisma:undefined | ReturnType<typeof PrismaClientSingleton>
}

const prisma=globalThis.prisma ?? PrismaClientSingleton()
if(process.env.NODE_ENV!=='production') globalThis.prisma=prisma

export default prisma
