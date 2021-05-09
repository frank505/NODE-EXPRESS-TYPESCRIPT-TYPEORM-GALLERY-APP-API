
 export const validateSingleImage = (req:any) =>
 {
   const acceptedFileTypes:Array<string> = ['image/jpeg','image/jpg','image/png'];
   if(req.files[0]==undefined)
   {
    return false;
   }


  let mimeType:string = req.files[0].mimetype;
  let fileSizeLimit:number = 2 * 1024 *1024; //2mb in binary
  let fileSize:number = req.files[0].size;
  /**
   * check against mimetype
   */
   if(!acceptedFileTypes.includes(mimeType))
   {
      return false;
   }      
      /**
       * check file size
       */
      if(fileSize > fileSizeLimit)
      {
          return false;
      }
        return true; 
 }

