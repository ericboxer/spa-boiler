import * as fs from 'fs-extra'

const folderToDelete: string = process.argv[2]

function deleteFolder(path: string) {
  if (!fs.existsSync(path)) {
    console.log(`Folder ${path} does not exist`)
    return
  }
  console.log(`Removing folder ${path}`)
  fs.removeSync(path)
}

deleteFolder(folderToDelete)
