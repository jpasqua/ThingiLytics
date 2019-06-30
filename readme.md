# ThingiLytics

Thingiverse.com doesn't provide a way to download analytics. ThingiLytics is a Chrome Browser extension which allows you to download a .csv of your analytics data.

**This is a work in progress - including this README**. Use this at your own risk. It has had minimal testing. 

## Getting Started

Because this is a work-in-progress, at this point you must be comfortable manually installing an extension rather than getting one from the Chrome store.

### Prerequisites

* Chrome
* An account on thingiverse
* At least one thing that you've created on which to gather analytics 

### Installing

1. **Download**
   1. Clone the repository. All the files of interest are in the src directory
   2.  Place the src directory anywhere you would like. You may rename it.
2. **Install into Chrome**
   1. Open the Chrome extensions page by entering chrome://extensions/ into the address field of Chrome, or by using the Chrome menu > More Tool > Extensions.
   2. In the upper right hand corner of the extensions page, make sure that "Developer Mode" is on. When it is on, you'll see a button labeled "Load Unpacked".
   3. Press the "Load Unpacked" button.
      1. You'll be presented with a File dialog asking you to "Select the extension directory".
      2. Navigate into the src directory that you downloaded earlier (you may have renamed it). You'll see files like content.js and manifest.json.
      3. Select this directory.
3. **Double Check**
   1. At this point you'll see a new extension called "Thingiverse Analytics Downloader".
   2. Make sure it is turened on.

## Use

* **Log in** to your thingiverse account
* **Navigate to the analytics page**.
  * It will have a URL of the form: https://www.thingiverse.com/YOUR_USER_NAME/analytics/
  * You can get there multiple ways including selecting the account menu (upper left), choose "My Things" and then "View your analytics" (lower left). 
* **Choose Dates**
  * Ensure that the date range displayed is the range for which you want analytics.
  * If it is not, use the date controls on the page to select the range of interest you. Thingiverse can be slow. It may take a moment for it to update to the selected date range.
* **Display all items**
  * Thingiverse will only display the first 10 of your things until you scroll to the bottom of the page - it paginates your list
  * You need all of your items displayed, so you may have to scroll repeatedly to make them appear. 
  * Do this before downloading your analytics.
* **Download**
  * Once the proper date range is displayed, select the "T" icon to the right of the address bar. This is where Chrome displays extension icons.
  * No interface will be displayed, and a file download will begin almsot immediately.
  * A file named thingilytics.csv will be placed in your specified download directory.
* Open thingilytics.csv using an application of your choosing. There is nothing Excel-specific. 

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Authors

* **[Joe Pasqua](https://github.com/jpasqua)** - *Initial work*

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* This code was pieced together using a number of tutorials for guidance as this is my first Chrome extension.
* It also leverages the [sample code](https://medium.com/@danny.pule/export-json-to-csv-file-using-javascript-a0b7bc5b00d2) from Danny Pule on generating CSV from JSON in Javascript.
