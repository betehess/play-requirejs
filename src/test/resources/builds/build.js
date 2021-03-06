/**
* A sample require.js build file in JavaScript syntax, equivalent to ./build.json
*/

({
    appDir: "some/path/",
    dir: "../some/path",
    baseUrl: "./",
    mainConfigFile: '../some/path/to/main.js',
    paths: {
        "foo.bar": "../scripts/foo/bar",
        "baz": "../another/path/baz" /*,
        "bar": "../to/bar" */
    },
    modules: [{ name: "module1" }, { name: "module1", include: ["lib/dep1"] }],
    keepBuildDir: true,
    optimize: "uglify",
    //optimize: "uglify2",
    shim: {
        'libs/underscore': { exports: '_' },
        'libs/jquery':     { exports: '$' },
        'libs/backbone': {
            deps: ['libs/underscore', 'libs/jquery'],
            exports: 'Backbone'
        }
    },
    uglify: {
        toplevel: true,
        ascii_only: true,
        beautify: true,
        max_line_length: 1000,
        defines: {
            DEBUG: ['name', 'false']
        },
        no_mangle: true
    }    
})

