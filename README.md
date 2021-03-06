Virtual World Framework
=====================

---------------------

The Virtual World Framework (VWF) is a fast, light-weight, web-based architecture for creating and distributing secure, scalable, component-based, and collaborative virtual spaces. It leverages existing web-based standards, infrastructure, and emerging technologies with the intent of establishing a powerful yet simple to use platform that is built on top of the next generation of web browsers. These technologies include:

* HTML 5 – a significant upgrade in expressive power for the web
* WebGL – an integrated 3D graphics capability
* WebSockets – providing a full TCP/IP connection between the client and server
* JavaScript – the programming language of the web  

The VWF serves as a replicated computing platform for multi-user interactive 2D and 3D components with a high degree of customizability of the environment and high bandwidth communication between users. These are environments that are focused on work and working together – whether for training, collaboration and/or entertainment. It is a zero-install platform, where additional software components can be added dynamically. VWF spaces can be embedded in virtually any application including web pages and emails. Furthermore, VWF spaces can embed existing applications and browsers. The next big 3D platform is simply the current world wide web with additional capabilities, and the Virtual World Framework embraces this ever growing technology.

---------------------

Installation/Upgrade Instructions
=====================

Windows
-
Download the latest VWF Windows Build zip file from: 
<pre><code>http://virtualworldframework.com/web/downloads.html
</code></pre>

and then execute the _run.bat_ file provided at the root level of the extracted folder.

Development Environment Setup and Manual Installation 
-
For additional information please visit: http://www.virtual.wf/web/docs/install.html

Macintosh OS X
-
NOTE: For OSX, please make sure you have XCode, and XCode Command Line Tools installed prior to executing the script below (https://developer.apple.com/xcode/).

Perform the following shell command at a user shell prompt:
<pre><code>sudo curl https://raw.github.com/virtual-world-framework/vwf/master/support/build/Scripts/build_osx.sh  | bash
</code></pre>

This command may be re-executed to upgrade the installation to the latest version of VWF at any time.

Ubuntu/Debian
-
Perform the following shell command at a user shell prompt:
<pre><code>sudo curl https://raw.github.com/virtual-world-framework/vwf/master/support/build/Scripts/build_debian.sh  | bash
</code></pre>

This command may be re-executed to upgrade the installation to the latest version of VWF at any time.

Red Hat Enterprise Linux
-
Perform the following shell command at a user shell prompt:
<pre><code>sudo curl https://raw.github.com/virtual-world-framework/vwf/master/support/build/Scripts/build_redhat.sh  | bash
</code></pre>

This command may be re-executed to upgrade the installation to the latest version of VWF at any time.


VWF Examples
=====================

Upon installation completion, VWF examples may be executed via the browser at http://servername/web/catalog.html. Demo application code is located in the public directory. Please refer to http://virtual.wf/web/docs/readme.html for additional information.


VWF Branches
=====================

There are currently four VWF branches available on github:
* master 		- This branch contains a stable release of VWF. 
* integration 	- This branch serves as the main location for merging features from development into the stable baseline. 
* development 	- This branch contains the latest development and new features of the framework. 

For more information on Branches, and our available subdomains for your usage, please visit: http://forum.virtualworldframework.com/viewtopic.php?f=3&t=1841