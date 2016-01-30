// Instead of using package.js, import your dependencies instead.
import './MainView';

// Describe the shape of our global application object
declare var myapp : {
    Application : any;
};

enyo.kind({
    name: "myapp.Application",
    kind: "enyo.Application",
    view: "myapp.MainView"
});

enyo.ready(function () {
    new myapp.Application({name: "app"});
});
