module.exports = {
    collectCoverageFrom: ['src/components/*.{js,jsx}', '!**/node_modules/**'],
    setupFilesAfterEnv: ['./configs/enzyme'],
    testPathIgnorePatterns: ['<rootDir>/(build|config|node_modules)/'],
}
