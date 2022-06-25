# Giphy

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

================================================================================
If you get an error 
Run Chrome browser without CORS .Just do follow steps:

    B1:Right click on desktop, add new shortcut
    B2:Add the target as "[PATH_TO_CHROME]\chrome.exe" --disable-web-security --disable-gpu --user-data-dir=~/B3:chromeTemp
    B4:Click OK.
OR
    Run CMD with ADM 
    RUN 
        "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" --disable-web-security --disable-gpu --user-data-dir=~/chromeTemp
        OR
        "C:\Program Files\Google\Chrome\Application\chrome.exe" --disable-web-security --disable-gpu --user-data-dir=~/chromeTemp
============================================================================
If you can't seen data. PLS check "GIPHY_FE_WEB_API_KEY" at response network GET:https://giphy.com/ .You can seen it URL :https://giphy.com/

EXAMPLE
<script>
            var Giphy = Giphy || {};
            window.STATIC_URL = "https://giphy.com/static/";
            window.ASSET_DOMAIN = "giphy.com";
            window.DOMAIN = "giphy.com";
            window.HOSTNAME = "";
            window.REAL_HOSTNAME = "giphy.com"
            window.CURRENT_VERSION = "68fc0ef75e"
            window.GIPHY_API_CREATE_BASE_URL = "https://api.giphy.com/v1/create/"
            window.GIPHY_API_URL = "https://api.giphy.com/v1/"
            window.GIPHY_PINGBACK_URL = "https://pingback.giphy.com"
            window.SERVICE_GATEWAY_URL = "https://x.giphy.com/"
            window.IMAGING_SERVICE_URL = "https://imaging.giphy.com"
            window.GIPHY_FE_MOBILE_API_KEY = "L8eXbxrbPETZxlvgXN9kIEzQ55Df04v0"
            window.GIPHY_FE_WEB_API_KEY = "Gc7131jiJuvI7IdN0HZ1D7nh0ow5BU6g"
            window.GIPHY_FE_FOUR_O_FOUR_API_KEY = "MRwXFtxAnaHo3EUMrSefHWmI0eYz5aGe"
            window.GIPHY_FE_STORIES_AND_GIPHY_TV_API_KEY = "3eFQvabDx69SMoOemSPiYfh9FY0nzO9x"
            window.GIPHY_FE_DEFAULT_API_SERVICE_KEY = "5nt3fDeGakBKzV6lHtRM1zmEBAs6dsIc"
            window.GIPHY_FE_GET_POST_HEADERS_KEY = "e0771ed7b244ec9c942bea646ad08e6bf514f51a"
            window.GIPHY_FE_MEDIUM_BLOG_API_KEY = "i3dev0tcpgvcuaocfmdslony2q9er7tvfndxcszm"
            window.GIPHY_FE_EMBED_KEY = "eDs1NYmCVgdHvI1x0nitWd5ClhDWMpRE"
        </script>
============================================================================
Note: I only handle with gifs,trend gifs with tag (img,video muted) , it won't have Stickers,Videos ...
Note: I only handle search with key word, it won't have search with @username ,#tag 
THANK YOU
