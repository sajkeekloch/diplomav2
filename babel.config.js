const presets = [
    [
        "@babel/env",
        {
            targets: {
                edge: "15",
                firefox: "60",
                chrome: "64",
                safari: "11.1",
                chromeAndroid:"64",
                chromeIOS: "64",
            },
            useBuiltIns: "usage",
            corejs: "3.0.0",
            "targets": {
                "esmodules": true,
                "ie": "11"
            }
        }
    ]
];

module.exports = { presets };
