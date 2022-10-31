// this is the part that makes hammerhead produce error 500.
// I was not able to reduce the example any further.
const singleton = new class {
    someMap=new Map;
    dosomething() {
        foo.map(({x, y}) => "doesnt matter")
    }
};

// this should make the test pass
document.body.insertAdjacentHTML("afterbegin", `<h1>It works!</h1>`)