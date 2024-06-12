const EXECUTABLE_LANGUAGES = [
    "python",
    "javascript"
]


export default class CodeExecutor {

    constructor() {
        this.executablesLanguages = EXECUTABLE_LANGUAGES
    }

    getExecutableLanguages() {
        return this.executablesLanguages
    }

    /**
     * This function returns the context to pass to "executeCode" function for the given language
     * @param {string} language the language to execute 
     * @param {*} code the code to execute
     * @returns the context to execute the code
     */
    getContext(language, code) {
        switch (language) {
            case "python":
                return {
                    executable: "python",
                    args: ["-c", code]
                }
            case "javascript":
            case "typescript":
                return {
                    executable: "node",
                    args: ["-e", code]
                }
            default:
                return "Language not supported"
        }
    }


}