require.config({
    baseUrl: "js",
    paths: {
        "react": "/bower_components/react/react-with-addons"
    }
});

require(["app"], (main) => {
    new main.App();
})
