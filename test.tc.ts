import { fixture, Selector } from "testcafe";

fixture("internalServerError500")
	.page("http://localhost:3000/")

test("script was executed", async (t) => {
    // await t.debug(); // take a look at the browser console
    await t.expect(Selector("h1").exists).ok();
});