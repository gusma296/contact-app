# contact-app android

clone project
- git clone https://github.com/gusma296/contact-app.git
- cd contact-app
- yarn install

running app android
- yarn android

for running release or generate apk
- copy file contact-app-key.keystore to android/app
- for run release yarn android --variant=release

generate apk release
- cd android
- ./gradlew clean
- ./gradlew assembleRelease

