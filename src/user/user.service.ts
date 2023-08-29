import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { AppDataSource } from "src/customService/mysql.service";
import { User } from "./user.model";
import * as bcrypt from 'bcrypt'
import { JwtService } from "src/customService/jwt.service";

@Injectable()
export class UserService {
    private userRepository:any


    constructor(private jwtSerivce:JwtService){
        this.userRepository = AppDataSource.getRepository(User)
    }

    async register(data:any){
        try{

            // Control
            const userControl = await this.userRepository.findOne({
                where: {
                    username: data.username
                }
            })

            if (userControl){
                throw new HttpException('User already exists', HttpStatus.BAD_REQUEST)
            }else{
                const user = new User()
                user.name = data.name
                user.surname = data.surname
                user.username = data.username
                user.password = await bcrypt.hash(data.password, 5)
                user.email = data.email
                user.phone_number = data.phone_number
                this.userRepository.save(user)
    
                return true
            }


            
        }catch(err){
            throw new HttpException('Register error', HttpStatus.BAD_REQUEST)
        }
    }

    async login(data:any){
        try{

            const control = await this.userRepository.findOne({
                where: {
                    username: data.username
                }
            })

            if (!control){
                throw new HttpException('User not found', HttpStatus.BAD_REQUEST)
            }else {
                if (await bcrypt.compare(data.password, control.password)){
                    const token = this.jwtSerivce.generateToken({id: control.id})
                    return token
                }else{
                    throw new HttpException('Password error', HttpStatus.BAD_REQUEST)
                }
            }

        }catch(err){
            throw new HttpException('Login error', HttpStatus.BAD_REQUEST)
        }
    }
}