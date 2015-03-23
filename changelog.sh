#!/bin/bash

# Get repo base and name.
REPO=`git remote show origin | perl -ne 'if (/Fetch URL:/) { $_=~s/^.+Fetch URL:\s*.+?:(.+)(\.git)$/$1/; print $_ }'`

# Make changelog based on commit history.
git log --date=short --pretty=format:'<li> <i>%ad</i>: %s%d [%an] <a href="http://github.com/'$REPO'/commit/%H">view commit </a> </li> ' > CHANGELOG.md
