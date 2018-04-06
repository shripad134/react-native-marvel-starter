import axios from 'axios';
import md5 from 'md5';
axios.defaults.headers.common['Content-Type'] = 'application/json';

export default class MarvelService {

    baseUrl;
    endpoint;
    url;
    client;

    constructor(endpoint, baseUrl = 'http://gateway.marvel.com/v1/public/', client = axios.create()){
        this.endpoint = endpoint;
        this.baseUrl = baseUrl;
        this.url = this.baseUrl+this.endpoint+this.generateCredentials()
        this.client = client;
    }

    generateCredentials(){
      let publicKey = process.env.MARVEL_PUBLIC_KEY;
      let privateKey = process.env.MARVEL_PRIVATE_KEY;
      let timestamp = +new Date(); // same new Date().getTime()
      let hash = md5(`${timestamp}${privateKey}${publicKey}`);
      return `?ts=${timestamp}&apikey=${publicKey}&hash=${hash}`
    }

    getCharacters(name = ""){
      let search = "";
      if(name){
        search = `&nameStartsWith=${name}`;
      }
      
      return this.client.get(`${this.url}${search}`)
    }  

}