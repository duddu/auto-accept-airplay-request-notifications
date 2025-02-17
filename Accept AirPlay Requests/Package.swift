// swift-tools-version: 6.0

import PackageDescription

let package = Package(
  name: "Accept AirPlay Requests Package",
  platforms: [.macOS(.v13)],
  targets: [
    .executableTarget(
      name: "Accept AirPlay Requests"
    ),
    .testTarget(
      name: "Accept AirPlay Requests Tests",
      dependencies: ["Accept AirPlay Requests"]
    )
  ]
)
