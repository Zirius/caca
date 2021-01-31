const path = require("path")
const fs = require ("fs")
const wallpaper = require("wallpaper")

const imagePathResolve = path.resolve(process.cwd(), "unnamed.jpg")

wallpaper.set(imagePathResolve)

console.log(process.cwd())