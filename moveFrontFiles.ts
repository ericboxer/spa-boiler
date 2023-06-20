import * as fs from 'fs-extra'

function deepCopyFolderSync() {
  const sourcePath = './src/static'
  const destinationPath = './dist/static'

  try {
    fs.ensureDirSync(destinationPath) // Create the destination directory if it doesn't exist
    fs.copySync(sourcePath, destinationPath) // Perform the deep copy operation
    console.log('Deep copy completed successfully!')
  } catch (err) {
    console.error('An error occurred during deep copy:', err)
  }
}

deepCopyFolderSync()
