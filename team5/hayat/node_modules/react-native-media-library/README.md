
# react-native-media-library

## Getting started

`$ npm install react-native-media-library --save`

### Mostly automatic installation

`$ react-native link react-native-media-library`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-media-library` and add `RNMediaLibrary.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNMediaLibrary.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.reactlibrary.RNMediaLibraryPackage;` to the imports at the top of the file
  - Add `new RNMediaLibraryPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-media-library'
  	project(':react-native-media-library').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-media-library/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-media-library')
  	```

#### Windows
[Read it! :D](https://github.com/ReactWindows/react-native)

1. In Visual Studio add the `RNMediaLibrary.sln` in `node_modules/react-native-media-library/windows/RNMediaLibrary.sln` folder to their solution, reference from their app.
2. Open up your `MainPage.cs` app
  - Add `using Media.Library.RNMediaLibrary;` to the usings at the top of the file
  - Add `new RNMediaLibraryPackage()` to the `List<IReactPackage>` returned by the `Packages` method


## Usage
```javascript
import RNMediaLibrary from 'react-native-media-library';

// TODO: What to do with the module?
RNMediaLibrary;
```
  