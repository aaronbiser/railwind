
### Railwind
*React components on rails*

A React component library built on top of [tailwind css](https://tailwindcss.com/) using TypeScript.


#### Goal
The purpose of this library is to generate a core set of React components that are statically typed using tailwind configuration options.


#### What is the point?
A benefit of using [tailwind css](https://tailwindcss.com/) is that you don't write css, you select it from existing prebuilt classes. If these types are then mapped to TypeScript types and assigned to props we now can control the styling of components at the code level as the compiler will not allow for any props that do not exist in the generated types. We can then expose these types in a visual editor to streamline the ui workflow by presenting the options in the editor when building ui components. 

![May-19-2021 06-27-13](https://user-images.githubusercontent.com/8157657/118805815-f963a280-b86b-11eb-830e-86839b4d7ab0.gif)


#### Using Railwind
Railwind should be imported into a project in order to generate a design system for a specific use case. Example: A ui library for a specific organization that is used in several applications where the styling and theme are consistent.



#### Editing railwind core components

- Run `yarn run build-watch`

- run the `playground` script to visually test changes

  

#### Using the playground

`cd` to `playground` directory and run `yarn run start` to start up the example playground to test railwind components

  

#### Updating Railwind Options

Example: Adding a new color

- Add new color to `tailwind.config.js`

- Run `yarn run scripts:generateTailwindTypes` to generate updates types

- Run `yarn run build:railwind` to generate new stylesheet



#### Build for deployment

- Bump the version in `package.json`

- Run `yarn run build` to build a production package

- Run `npm publish`
