# Log Aggregator

Publically accessible website: http://diy-logger-aggregator-hosted-bucket.s3-website-us-east-1.amazonaws.com

Because of issues configuring CORS, this website is best accessed using a CORS browser extentsion

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```
## Build and Deploy AWS Infrastructure

```sh
sam build
```

```sh
sam deploy --guided
```

## API Information

https://32va3d78l4.execute-api.us-east-1.amazonaws.com/Stage/trigger will write a semi-randomized log. Below is an example:

```
{
  "severity": "critical", //randomized severity level
  "timestamp": "1651842088923", //timestamp of request in epoch time
  "requestId": "8aa9557a-257d-4277-aa3f-94355923e7fa", //requestId from Lambda context
  "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36", //user agent of request source
  "domainName": "32va3d78l4.execute-api.us-east-1.amazonaws.com", //domain of request source
 }
```
https://32va3d78l4.execute-api.us-east-1.amazonaws.com/Stage/logs will return all logs from the data store

