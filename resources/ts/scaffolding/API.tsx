import axios from 'axios';
export class API{

    public static getRoot(callback){

        API.makeCall('/hi', 'GET', null, callback);
    }

    public static makeCall(route, method, data, success, errorCallback?){

        let config:any = {
            method:method,
            headers:{
                'Content-Type':'application/json',
                'Authorization': 'Basic ZHJvZ2E1b25lOmdpcmw1LWNvdW50LTIwMTc='
            }
        };

        if(data){
            config.body = JSON.stringify(data);
        };


        axios({
          method: method,
          url: route,
          data: {
            firstName: 'Fred',
            lastName: 'Flintstone'
          }
        });

        // fetch(route, config)
        //   .then((e)=>API.checkStatus(e))
        //   .then((e)=>API.parseJSON(e))
        //   .then(function(data) {
        //     success(data)
        //   }).catch(function(error) {
        //         if(errorCallback){
        //             errorCallback(error);
        //         }else{
        //             console.error('request failed', error)
        //         }
        //   })
    }

    public static checkStatus(response) {
      if (response.status >= 200 && response.status < 300) {
        return response
      } else {
        var error:any = new Error(response.statusText)
        error.response = response
        throw error
      }
    }

    public static parseJSON(response) {
        return response.text().then(function(text) {
            return text ? JSON.parse(text) : {}
        })
    }
}

export default API;