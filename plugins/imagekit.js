import Vue from "vue";
import ImageKit from "imagekitio-vue"

Vue.use(ImageKit, {
  urlEndpoint: "https://ik.imagekit.io/your_imagekit_id", // Required. Default URL-endpoint is https://ik.imagekit.io/your_imagekit_id
  // publicKey: "test", // optional
  // authenticationEndpoint: "https://www.your-server.com/auth" // optional
  // transformationPosition: "path" // optional
})
