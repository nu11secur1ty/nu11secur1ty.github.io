<h1> <img src="https://raw.githubusercontent.com/nu11secur1ty/nu11secur1ty.github.io/refs/heads/master/DownGit/res/images/downgit.png" width="20" height=auto /> DownGit </h1>

[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.com/donate/?business=5KR6BA9MYTM62&no_recurring=0&currency_code=USD)

#### Create GitHub Resource Download Link

With this tool you can directly download or create download link to any GitHub **public directory or file**.

### Website

[DownGit ↑](https://nu11secur1ty.github.io/DownGit/#/home)

### How to Use?

<table><tr><td> <img src="https://raw.githubusercontent.com/nu11secur1ty/nu11secur1ty.github.io/refs/heads/master/DownGit/docs/Screenshot%202025-05-08%20103106.png" /> </td></tr></table>

##### Advanced Usage

A typical download URL will look like this- `https://github.com/nu11secur1ty/nu11secur1ty.github.io/tree/master/DownGit/#/home?url=<link>&fileName=<name>&rootDirectory=<true or false or name>`

Now, if you want to download this directory- **`https://github.com/nu11secur1ty/nu11secur1ty.github.io/tree/master/DownGit/res/images`** with this file name- **`DownGit-Images.zip`** and this root directory name- **`ImagesOfDownGit`**, then the URL will be- https://github.com/nu11secur1ty/nu11secur1ty.github.io/tree/master/DownGit#/home?url=https://github.com/nu11secur1ty/nu11secur1ty.github.io/tree/master/DownGit/tree/master/res/images&fileName=DownGit-Images&rootDirectory=ImagesOfDownGit

In default, value of `fileName` and `rootDirectory` is set to the name of the downloading file or directory. If you do not want to add the directory itself in the zip, then set `rootDirectory=false`. Like: this link- /#/home?url=https://github.com/nu11secur1ty/nu11secur1ty.github.io/tree/master/DownGit/tree/master/res/images&rootDirectory=false, will download a file named **`images.zip`**; however the root directory- `"images"`, will not be included in the zip.

If you want to download file- **`https://github.com/nu11secur1ty/nu11secur1ty.github.io/blob/master/DownGit/res/images/downgit.png`** with name- **`DownGitIcon.zip`**, then the link will be- https://github.com/nu11secur1ty/nu11secur1ty.github.io/tree/master/DownGit/#/home?url=https://github.com/nu11secur1ty/nu11secur1ty.github.io/tree/master/DownGit/blob/master/res/images/downgit.png&fileName=DownGitIcon

### License
<a rel="license" href="https://opensource.org/licenses/MIT"><img alt="MIT License" src="https://cloud.githubusercontent.com/assets/5456665/18950087/fbe0681a-865f-11e6-9552-e59d038d5913.png" width="60em" height=auto/></a><br/><a href="https://github.com/nu11secur1ty/nu11secur1ty.github.io/tree/master/DownGit">DownGit</a> is licensed under <a rel="license" href="https://opensource.org/licenses/MIT">MIT License</a>.
