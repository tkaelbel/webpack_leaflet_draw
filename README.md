# webpack_leaflet_draw
 Just a test to get webpack going with leaflet and leaflet-draw. I had the problem that the icons from leaflet-draw weren't bundled by webpack. The option *`type: "asset/resource"`* for icons made it work. 

![image-20211024174410326](.\image-20211024174119082.png?raw=true)

## Try it out

Will start the webpack-dev-server on http://localhost:9000

 ```bash
yarn dev
 ```

Will build the application and put the files into the `/dist` folder

```
yarn build
```

