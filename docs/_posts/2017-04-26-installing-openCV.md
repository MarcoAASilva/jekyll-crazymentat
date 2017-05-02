---
layout: post
title:  "Installing OpenCV"
date:   2017-04-26 15:50:00 +0100
categories: openCV
author: dreamcaster
location: Porto Alegre, Brazil
description: installing OpenCV on Windows
---
---
[Installing OpenCV on Windows 10](http://docs.opencv.org/master/d3/d52/tutorial_windows_install.html) can be a bit tricky.  Nothing too fancy, but yes, it can be a bit tiresome, especially for the 3rd party libraries.

Here is my walkthrough.

# CMake
Install [CMake](https://cmake.org/download/) via the MSI

```
$ cmake --version
cmake version 3.8.0

CMake suite maintained and supported by Kitware (kitware.com/cmake).
```

# Clone the Repo

Obtain the [OpenCV repo from GitHub](https://github.com/opencv/opencv.git):

```
git clone git@github.com:opencv/opencv.git

set OPENCV_REPO=D:\pub\opencv

```

# Install Python, Pip and Numpy

All this weird python jargon is a bit tiresome, but amounts nothing much than to install a few required modules with the usual command-line dependency manager.

```
$ python --version
Python 3.6.1

$ pip --version
pip 9.0.1 from d:\python\python36\lib\site-packages (python 3.6)

$ pip install numpy
Collecting numpy
  Downloading numpy-1.12.1-cp36-none-win_amd64.whl (7.7MB)
Installing collected packages: numpy
Successfully installed numpy-1.12.1

$ pip freeze
numpy==1.12.1

```

# Intel Libraries

Download the Windows versions for these babies to **%OPENCV_REPO%\deps**

[Intel(R) Threading Building Blocks 2017 Update 5](https://github.com/01org/tbb/releases)

[Intel® Integrated Performance Primitives] (https://software.intel.com/en-us/intel-ipp) *beware, this library is huge, and requires registration*

Intel IPP Asynchronous C/C++ mentioned at the base tutorial is unavailable at the moment. [Apparently, it has been withdrawn from public preview by Intel more than two years ago](https://software.intel.com/en-us/forums/intel-integrated-performance-primitives/topic/594325).




