<img src="assets/com.github.johnfactotum.Foliate.svg" align="left" style="margin-right:8px"> 
<br><br>

# Foliate-Webui
Read book in browser with PWA like `Foliate`


## Installation
### Check the Dependencies
- `python3`, recommended version is 3.10 or later
- `a web browser`, Chrome and Edge is be tested and works well
- `git` command line tool

### First Time Setup
1. Clone and run the project
```bash
git clone https://www.github.com/WuJunkai2004/foliate-webui.git
cd foliate-webui
python3 -m api
```
then open `http://localhost:18000` in your web browser. You now have a running Foliate WebUI instance.  

2. Install it as a PWA
Different browsers have different ways to install a PWA, but they all have a similar process:
- In Chrome, click the three dots in the top right corner, then select "Install Foliate WebUI".
- In Edge, click the three dots in the top right corner, then select "Install Foliate WebUI".
- In Firefox, click the three dots in the top right corner, then select "Install Foliate WebUI".
After installation, you can find the app in your application menu or desktop.  
And most times, It can work without the backend server running.


## License
Since the upstream project operates under the [GNU General Public License](https://www.gnu.org/licenses/gpl.html), I am consequently bound to adopt the same licensing framework.  

The following libraries as references, and certain portions of code were directly drawn from their codebases.

- [foliate](https://github.com/johnfactotum/foliate-js), whick is GPL licensed.
- [foliate-js](https://github.com/johnfactotum/foliate-js), which is MIT licensed.
- [adwaita-icon-theme](https://gitlab.gnome.org/GNOME/adwaita-icon-theme/), which is licensed under the Creative Commons Attribution Share Alike 3.0 Unported license.
- [zip.js](https://github.com/gildas-lormeau/zip.js), which is licensed under the BSD-3-Clause license.
- [fflate](https://github.com/101arrowz/fflate), which is MIT licensed.
- [PDF.js](https://github.com/mozilla/pdf.js), which is licensed under Apache License 2.0.