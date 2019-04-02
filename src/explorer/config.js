var config = {
    baseName: function () {
        if (window.location.href == "http://localhost:3000/") {
            return '/'
        } else {
            return "/"
        }
    }

}
export default config;