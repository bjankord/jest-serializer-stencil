# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [1.0.0]
### Changed
- Initial Stable Release
- If there is more than 1 attribute on a DOM Node, all the attributes will display on a new line (Breaking Change from 0.x versions)
  - If there is only 1 attribute on the DOM Node, it will stay on the same line as the open tag
  - This change is to help make it easier to diff changes in the generated snapshots
