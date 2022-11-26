import config from '../../Configs/Config.json';


export default function HttpClient() {
   const callApi = async (url, method, params = {}, body = null) => {
      const options = {
         method: method,
         headers: {
            "Content-Type": "application/json",
         },
      };

      if (body !== null) {
         options.body = JSON.stringify(body);
      }

      url = `${config.SERVER_API}${url}`;

      const response = await fetch(url, options);
      const data = await response.json();

      return {
         response: response,
         data: data,
      };
   }

   const get = (url, params = {}) => {
      return this.callApi(url, "GET", params);
   };

   const post = (url, body, params = {}) => {
      return this.callApi(url, "POST", params, body);
   };

   const put = (url, body, params = {}) => {
      return this.callApi(url, "PUT", params, body);
   };

   const patch = (url, body, params = {}) => {
      return this.callApi(url, "PATCH", params, body);
   };

   const deleted = (url, params = {}) => {
      return this.callApi(url, "DELETE", params);
   };
}