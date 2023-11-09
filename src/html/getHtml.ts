import { getImage } from "./getImage";
import { getFavicon } from "./getFavicon";


export const getHtml = () => {
	return `
<!DOCTYPE html>
  <html>
    <head>
      <title>Hello, World!</title>
      <link rel="icon" href="data:image/x-icon;base64,${getFavicon()}" type="image/x-icon" />
      <link href='http://fonts.googleapis.com/css?family=Roboto' rel='stylesheet' type='text/css'>
      <style>
        body, html {
          height: 100%;
          margin: 0;
          padding: 0;
          font-family: 'Roboto', sans-serif;
          color: #ffffff;
          text-align: center;
        }
        .bgImage {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: -1;
        }
        .content {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 1;
        }
      </style>
    </head>
    <body>
      <img class="bgImage" src="data:image/jpeg;base64,${getImage()}" alt="bespinian background">
      <div class="content">
        <h1>Hello, World!</h1>
      </div>
    </body>
  </html>`;
};
