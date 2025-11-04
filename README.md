# Getting Started with lucas-website

## Host the Website locally

Run `npm start`

To view on an external device, make sure the devices are connected to the same network and that the network allows peer 2 peer connections.

## Deployment

Deployment to github pages happens through GitHub actions (see [deploy.yml](./.github/workflows/deploy.yml))

Run `npm run build` to make sure the production version can be built to the `build/` folder
