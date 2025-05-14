import { Body, Controller, HttpCode, Post } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Controller('/accounts')
export class CreateAccountController {
    constructor(private prisma: PrismaService) { }

    @Post()
    @HttpCode(201)
    async handle(@Body() body : any) {
        console.log(body)
        const name = 'teste'
        const email = 'email teste'
        const password = '123456'

        await this.prisma.user.create({
            data: {
                name,
                email,
                password
            }
        })

    }
}