import { Body, Controller, Get, Post, Render, Res, Session } from "@nestjs/common";
import { UserService } from "./user.service";
import { Response, response } from "express";
import * as secureSession from "@fastify/secure-session"

@Controller('user')
export class UserController {
    constructor(private userService: UserService){}

    @Get('register')
    @Render('register')
    async get_register(){
        return {
            title:'Kayıt Ol'
        }
    }

    @Post('register')
    async post_register(@Body() bodyData:any, @Res() res:Response){
        try{
            const register = this.userService.register(bodyData)
            res.redirect(302, '/')
        }
        catch(err){
            res.redirect(302, '/user/register')
        }
        
    }

    @Post('login')
    async post_login(@Body() bodyData:any, @Session() session: secureSession.Session, @Res() res:Response){
        const login = await this.userService.login(bodyData)
        if (login){
            session.set('user', login)
            res.redirect(302, '/')
        }

        res.redirect(302, '/')
    }

    @Get('logout')
    async get_logout(@Session() session:secureSession.Session, @Res() response:Response){
        session.delete()
        response.redirect(302, '/')

    }

}