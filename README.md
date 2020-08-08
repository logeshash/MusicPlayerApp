# MusicPlayerApp
Music streaming app


<b>Build Android APK:</b>

Step 1: Go to project directory and run this command in terminal. This will bundle the assets to be able to build the app to run independent of the Metro server

react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res/

Step 2: Go to android directory

cd android/

Step 3: In android path run this command

./gradlew assembleDebug

Step 4 : Go to this folder and check the apk file

MusicPlayerApp-> android-> app-> build-> outputs-> apk-> debug-> app-debug.apk




