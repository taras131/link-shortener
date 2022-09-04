import {loginThunk, registrationThunk} from "./thunk";

describe.only("auth action creators", () => {
    test("creates the action loginThunk", () => {
        expect(loginThunk.fulfilled.type).toEqual("auth/login/fulfilled");
        expect(loginThunk.pending.type).toEqual("auth/login/pending");
        expect(loginThunk.rejected.type).toEqual("auth/login/rejected");
    });
    test("exposes the typePrefix it was created with loginThunk", () => {
        expect(loginThunk.typePrefix).toEqual("auth/login");
    });
    test("creates the action registrationThunk", () => {
        expect(registrationThunk.fulfilled.type).toEqual("auth/registration/fulfilled");
        expect(registrationThunk.pending.type).toEqual("auth/registration/pending");
        expect(registrationThunk.rejected.type).toEqual("auth/registration/rejected");
    });
    test("exposes the typePrefix it was created with loginThunk", () => {
        expect(registrationThunk.typePrefix).toEqual("auth/registration");
    });
});