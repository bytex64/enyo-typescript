// TypeScript gets confused when you use ES2015 'import' so we define
// require in `require.d.ts` and use require() instead for asset
// imports.
let styles : any = require('./MainView.css');

enyo.kind({
    name: "myapp.MainView",
    kind: "FittableRows",
    fit: true,
    components:[
        {kind: "onyx.Toolbar", content: "List of Stuff"},
        {name: "list", kind: "enyo.List", fit: true, count: 1000, onSetupItem: "setupItem", components: [
            {classes: styles.item, components: [
                {name: "name", classes: styles.itemName},
                {name: "date", classes: styles.itemDate},
            ]}
        ]},
        {kind: "onyx.Toolbar", components: [
            {kind: "onyx.Button", content: "+100", ontap: "addTap"},
            {name: "numItems"}
        ]}
    ],
    bindings: [
        {
            from: '$.list.count',
            to: '$.numItems.content',
            transform: val => `${val} items`,
        }
    ],
    addTap(inSender, inEvent) {
        this.$.list.setCount(this.$.list.getCount() + 100);
    },
    setupItem(inSender, inEvent) {
        const { index } = inEvent;
        this.$.name.setContent(index);
        this.$.date.setContent(new Date().getTime());
    },
});
