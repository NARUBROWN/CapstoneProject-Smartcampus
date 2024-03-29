const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true
})

/* const path = require("path");
module.exports = {
  outputDir: path.resolve(__dirname, "../jeiu_express/public")
} */

module.exports = {
    devServer: {
        allowedHosts: "all"
    }
}

module.exports = {
    css: {
        loaderOptions: {
            sass: {
                additionalData: `
                @import "@/assets/scss/reset.scss";
              `
            }
        }
    }
}