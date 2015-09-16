require.config({
    baseUrl: "js",
    paths: {
        "react": "/bower_components/react/react-with-addons"
    }
});
require(["app"], function (main) {
    new main.App();
});
