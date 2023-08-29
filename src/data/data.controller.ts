import { Controller, Get, Post, Render, UseInterceptors } from "@nestjs/common";
import { FilesInterceptor, UploadedFiles, MemoryStorageFile } from '@blazity/nest-file-fastify';

@Controller('data')
export class DataController {
    constructor(){}


    @Get('upload')
    @Render('upload')
    async get_data_upload(){
        return {
            title:'Veri Yükle'
        }
    }

    @Post('upload')
    @UseInterceptors(FilesInterceptor('files',5,{
        dest:'src/assets/public/uploads'
    } ))

    async post_upload_data(@UploadedFiles() files: MemoryStorageFile[]){
        console.log(files);
        return{
            title:'Veri Yükle'
        } 
    }
}