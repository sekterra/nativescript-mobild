# Make mobile app with NativeScript-Vue

## 개발환경 설정
``` bash
# Install NativeScript CLI
npm install -g nativescript
```

# NativeScript Setup(재정리 예정)
https://docs.nativescript.org/start/ns-setup-win

# Set Templates
Nativescript의 템플릿은 두 종류가 있음
1. nativescript-vue/vue-cli-template
- .vue 파일 사용
- Vue Router 지원
``` bash
$ npm install -g @vue/cli @vue/cli-init
$ vue init nativescript-vue/vue-cli-template <project-name>
$ cd <project-name>
$ npm install
$ npm run watch:android
$ # or
$ npm run watch:ios
```

2. nativescript-vue/nativescript-vue-template
- Pure javascript : .vue 파일 지원 안함, import도 안 됨
- tns 명령어로 설치
``` bash
$ tns create <project-name> --template nativescript-vue-template
$ cd <project-name>
$ tns run android
$ # or
$ tns run ios
```
- vue-router는 동작하는 것을 확인했으나, Progess Nativescript는 사용시 오류가 발생함(http://docs.telerik.com/devtools/nativescript-ui/introduction)



## Usage

``` bash
# Install dependencies
npm install

# Build for production
npm run build
npm run build:<platform>

# Build, watch for changes and debug the application
npm run debug
npm run debug:<platform>

# Build, watch for changes and run the application
npm run watch
npm run watch:<platform>

# Clean the NativeScript application instance (i.e. rm -rf dist)
npm run clean
```

> When invoking the various npm scripts, omitting the platform will attempt to launch `tns` for both platforms, which will only work in a properly configured OSX environment.

For detailed instructions, see https://github.com/nativescript-vue/vue-cli-template
