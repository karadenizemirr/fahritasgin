import { HttpException, HttpStatus, Injectable } from "@nestjs/common";

@Injectable()
export class UserService {
    private userRepository:any

    constructor(){}

    async register(data:any){
        try{

            

        }catch(err){
            throw new HttpException('Register error', HttpStatus.BAD_REQUEST)
        }
    }
}