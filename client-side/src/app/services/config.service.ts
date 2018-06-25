export class ConfigService{
    
    private urlService:string;
    
    constructor(){
        this.urlService = 'http://localhost:80';
    }

    getUrlService():string{
        return this.urlService;
    }

}
