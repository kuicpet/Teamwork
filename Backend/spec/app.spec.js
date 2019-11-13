const Request = require("request");

describe("Server", () => {
    let server;
    beforeAll(() => {
        server = require("../app");
    });
    afterAll(() => {
        
    });
    describe("GET /", () => {
        var data = {};
        beforeAll((done) => {
            Request.get("http://localhost:3000/", (error, response, body) => {
                data.status = response.statusCode;
                data.body = JSON.parse(body);
                done();
            });
        });
        it("Status 200", () => {
            expect(data.status).toBe(200);
        });
        it("Body", () => {
            expect(data.body).toEqual({
                message: "Your request was a success!"
            });
        });
    });
    describe("GET /test", () => {
        var data = {};
        beforeAll((done) => {
            Request.get("http://localhost:3000/test", (error, response, body) => {
                data.status = response.statusCode;
                data.body = JSON.parse(body);
                done();
            });
        });
        it("Status 200", () => {
            expect(data.status).toBe(500);
        });
        it("Body", () => {
            expect(data.body.message).toBe("This is an error response");
        });
    });
});