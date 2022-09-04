import {getLinks, squeezeLink} from "./thunk";

describe.only("link action creators", () => {
    test("creates the action squeezeLink", () => {
        expect(squeezeLink.fulfilled.type).toEqual("link/create/fulfilled")
        expect(squeezeLink.pending.type).toEqual("link/create/pending")
        expect(squeezeLink.rejected.type).toEqual("link/create/rejected")
    })
    test("exposes the typePrefix it was created with squeezeLink", () => {
        expect(squeezeLink.typePrefix).toEqual("link/create")
    })
    test("creates the action getLinks", () => {
        expect(getLinks.fulfilled.type).toEqual("link/get_all/fulfilled")
        expect(getLinks.pending.type).toEqual("link/get_all/pending")
        expect(getLinks.rejected.type).toEqual("link/get_all/rejected")
    })
    test("exposes the typePrefix it was created with getLinks", () => {
        expect(getLinks.typePrefix).toEqual("link/get_all")
    })
})