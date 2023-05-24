# Diagnal Assignment

It's a minimal content listing app developed using **LightningJS Core** and **TypeScript**. The app displays the `title` at the top-center, a `clock` at the top-right that displays the current time in 24 hours format. It also features a `rail` component that displays the list of movies from local JSON resources, we can press the right or left keys on the keyboard to scroll the list. Based on the selection, the movie name and description will be updated on the `banner`.

When the app loads initially, it doesn't fetch all the data at once, it loads the data gradually as we scroll through the list. The application has a few simple animations to enhance the user experience.

## Installation

```sh
npm install
npm start
```

## Considerations

- This app uses the base resolution of 1280x720. However, the LightningJS documentation suggest developing your TV App in a 1080p coordinate system. If the app needs to be displayed in a 1280x720 resolution, you can use the `precision` property to perform a global rescale of the coordinate system. For example, if you specify `precision: 2/3`, the 1920 x-position will be mapped to the 1280-output pixel coordinate. This downscaling generally works well and can improve quality (less pixel interpolation) while reducing memory usage.
- This app uses `LightningJS Core`, not the LightningJS SDK.
- All JSON data resources are inside of the `data` folder.
