import { Response, Request } from "express";
import { GalleryEntity } from "../database/entities/GalleryEntity";
import GalleryService from '../services/GalleryService';


const galleryContent:GalleryService = new GalleryService();

export class GalleryController 
{

// private galleryService:GalleryService;

//  constructor()
//  {
//     this.galleryService = new GalleryService();
//  }


public async index(req:Request,res:Response)
{
   const Gallery = await galleryContent.index();
   res.send(Gallery).json();
}

public async create(req:Request,res:Response)
{
   const Gallery = req['body'] as GalleryEntity;
    const newGallery = await galleryContent.create(Gallery);
    res.send(newGallery)
}


public async update(req:Request,res:Response)
{
   const Gallery = req['body'] as GalleryEntity;
   const id =  req['params']['id'];
   
   res.send(galleryContent.update(Gallery, Number(id)));
}

public async delete(req:Request,res:Response)
{
   const id =  req['params']['id'];
   res.send(galleryContent.delete(Number(id)));
}



}